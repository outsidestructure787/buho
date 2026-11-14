/**
 * Búho · puente de sincronización con Google Sheets (versión gratuita)
 *
 * Cómo se usa (detallado en el README):
 *  1. Crea una hoja de cálculo de Google.
 *  2. Extensiones → Apps Script → borra lo que haya y pega este archivo.
 *  3. Cambia CLAVE por una clave tuya (larga y difícil de adivinar).
 *  4. Implementar → Nueva implementación → Aplicación web
 *       Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario
 *  5. Copia la dirección que termina en /exec y pégala en Búho → Ajustes,
 *     junto con la misma clave.
 *
 * Protocolo: POST (texto JSON) {key, since, events[]} → {ok, now, events[]}
 *  - events: registros nuevos o modificados en el móvil. Gana el que tenga la marca "u" más reciente.
 *  - since: la respuesta incluye todos los registros que han cambiado en la hoja después de ese momento.
 */

const CLAVE = 'CAMBIA-ESTA-CLAVE';   // ← pon aquí tu clave
const HOJA = 'eventos';

// Columnas legibles (para mirar la hoja) + columnas técnicas (las usa la app; no las edites a mano).
const COLS = ['id', 'fecha', 'inicio', 'fin', 'tipo', 'detalle', 'nota', 'quién', 'borrado', 'datos', 'u', 'srv'];
const C = {};
COLS.forEach((c, i) => C[c] = i);

function doGet() {
  return ContentService.createTextOutput('Búho: la sincronización está activa. Esta dirección se pega en la app (Ajustes).');
}

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (x) { return out({ ok: false, error: 'bad_json' }); }
  if (!req || req.key !== CLAVE || CLAVE === 'CAMBIA-ESTA-CLAVE') return out({ ok: false, error: 'bad_key' });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(25000)) return out({ ok: false, error: 'busy' });
  try {
    const sh = hoja();
    const now = Date.now();
    const n = sh.getLastRow() - 1;
    const rows = n > 0 ? sh.getRange(2, 1, n, COLS.length).getValues() : [];
    const idx = {};
    rows.forEach((r, i) => { if (r[C.id]) idx[String(r[C.id])] = i; });

    const dirty = {};
    (req.events || []).forEach(ev => {
      if (!ev || !ev.id) return;
      const id = String(ev.id);
      const i = idx[id];
      if (i !== undefined && Number(rows[i][C.u]) > Number(ev.u || 0)) return; // la hoja tiene una versión más nueva
      const row = fila(ev, now);
      if (i !== undefined) { rows[i] = row; dirty[i] = true; }
      else { idx[id] = rows.length; rows.push(row); dirty[rows.length - 1] = true; }
    });

    // Escribe solo las filas que han cambiado (las nuevas van al final).
    const firstNew = n > 0 ? n : 0;
    Object.keys(dirty).map(Number).filter(i => i < firstNew)
      .forEach(i => sh.getRange(i + 2, 1, 1, COLS.length).setValues([rows[i]]));
    if (rows.length > firstNew) sh.getRange(firstNew + 2, 1, rows.length - firstNew, COLS.length).setValues(rows.slice(firstNew));

    const since = Number(req.since || 0);
    const events = [];
    rows.forEach(r => {
      if (Number(r[C.srv]) > since) {
        try { events.push(JSON.parse(r[C.datos])); } catch (x) {}
      }
    });
    return out({ ok: true, now: now, events: events });
  } finally {
    lock.releaseLock();
  }
}

function fila(ev, now) {
  const datos = {};
  Object.keys(ev).forEach(k => { if (k.charAt(0) !== '_') datos[k] = ev[k]; });
  const fecha = (typeof ev.start === 'number') ? new Date(ev.start) : '';
  const fin = (typeof ev.end === 'number') ? new Date(ev.end) : '';
  const r = new Array(COLS.length).fill('');
  r[C.id] = String(ev.id);
  r[C.fecha] = fecha;
  r[C.inicio] = fecha;
  r[C.fin] = fin;
  r[C.tipo] = ev._tipo || ev.type || '';
  r[C.detalle] = ev.del ? '' : (ev._txt || '');
  r[C.nota] = ev.note || '';
  r[C['quién']] = ev.by || '';
  r[C.borrado] = ev.del ? 'sí' : '';
  r[C.datos] = JSON.stringify(datos);
  r[C.u] = Number(ev.u || 0);
  r[C.srv] = now;
  return r;
}

function hoja() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(HOJA);
  if (!sh) {
    sh = ss.insertSheet(HOJA);
    sh.getRange(1, 1, 1, COLS.length).setValues([COLS]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange('B:B').setNumberFormat('dd/mm/yyyy');
    sh.getRange('C:D').setNumberFormat('HH:mm');
    sh.getRange('J:L').setFontColor('#999999');
    sh.setColumnWidth(6, 260);
  }
  return sh;
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
