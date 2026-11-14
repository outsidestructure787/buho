/**
 * Búho · puente de sincronización con Google Sheets (versión gratuita)
 *
 * El proyecto de Apps Script tiene dos archivos:
 *  - Config.gs: tu clave y el nombre de la pestaña. Se crea una vez y no se toca al actualizar.
 *  - Code.gs (este archivo): la lógica. Para actualizar Búho, se sustituye entero.
 * Pasos detallados en el README del proyecto.
 *
 * Protocolo: POST (texto JSON) {key, since, events[]} → {ok, now, events[]}
 *  - events: registros nuevos o modificados en el móvil. Gana el que tenga la marca "u" más reciente.
 *  - since: la respuesta incluye todos los registros que han cambiado en la hoja después de ese momento.
 */

const BUHO_SCRIPT_VERSION = '0.2.1';

// Columnas legibles (para mirar la hoja) + columnas técnicas (las usa la app; no las edites a mano).
// Si a una hoja antigua le falta alguna columna, se añade sola en su sitio.
const COLS = ['id', 'fecha', 'inicio', 'fin', 'duración', 'tipo', 'detalle', 'nota', 'quién', 'borrado', 'datos', 'u', 'srv'];
const FORMATOS = { 'fecha': 'dd/mm/yyyy', 'inicio': 'HH:mm', 'fin': 'HH:mm', 'duración': '[h]:mm:ss' };

function config_() {
  const clave = (typeof CLAVE !== 'undefined') ? String(CLAVE) : '';
  const hoja = (typeof HOJA !== 'undefined' && HOJA) ? String(HOJA) : 'eventos';
  return { clave: clave, hoja: hoja };
}

function doGet() {
  return ContentService.createTextOutput('Búho: la sincronización está activa (script ' + BUHO_SCRIPT_VERSION + '). Esta dirección se pega en la app, en Ajustes.');
}

function doPost(e) {
  const cfg = config_();
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (x) { return out({ ok: false, error: 'bad_json' }); }
  if (!cfg.clave || cfg.clave === 'CAMBIA-ESTA-CLAVE') return out({ ok: false, error: 'no_key_configured' });
  if (!req || req.key !== cfg.clave) return out({ ok: false, error: 'bad_key' });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(25000)) return out({ ok: false, error: 'busy' });
  try {
    const sh = hoja_(cfg.hoja);
    const C = columnas_(sh);
    const width = sh.getLastColumn();
    const now = Date.now();
    const n = sh.getLastRow() - 1;
    const rows = n > 0 ? sh.getRange(2, 1, n, width).getValues() : [];
    const idx = {};
    rows.forEach((r, i) => { if (r[C.id]) idx[String(r[C.id])] = i; });

    const dirty = {};
    (req.events || []).forEach(ev => {
      if (!ev || !ev.id) return;
      const id = String(ev.id);
      const i = idx[id];
      if (i !== undefined && Number(rows[i][C.u]) > Number(ev.u || 0)) return; // la hoja tiene una versión más nueva
      const row = fila_(ev, now, C, width, i !== undefined ? rows[i] : null);
      if (i !== undefined) { rows[i] = row; dirty[i] = true; }
      else { idx[id] = rows.length; rows.push(row); dirty[rows.length - 1] = true; }
    });

    // Escribe solo las filas que han cambiado (las nuevas van al final).
    const firstNew = Math.max(n, 0);
    Object.keys(dirty).map(Number).filter(i => i < firstNew)
      .forEach(i => sh.getRange(i + 2, 1, 1, width).setValues([rows[i]]));
    if (rows.length > firstNew) sh.getRange(firstNew + 2, 1, rows.length - firstNew, width).setValues(rows.slice(firstNew));

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

/** Construye la fila de un evento. Conserva lo que haya en columnas que no son de Búho. */
function fila_(ev, now, C, width, prev) {
  const datos = {};
  Object.keys(ev).forEach(k => { if (k.charAt(0) !== '_') datos[k] = ev[k]; });
  const r = prev ? prev.slice() : new Array(width).fill('');
  const ini = (typeof ev.start === 'number') ? new Date(ev.start) : '';
  const fin = (typeof ev.end === 'number') ? new Date(ev.end) : '';
  r[C.id] = String(ev.id);
  r[C.fecha] = ini;
  r[C.inicio] = ini;
  r[C.fin] = fin;
  r[C['duración']] = duracion_(ev);
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

/** Duración en días (formato de hoja [h]:mm:ss) para sueños y tomas terminados; vacío en el resto. */
function duracion_(ev) {
  if (ev.del || typeof ev.start !== 'number' || typeof ev.end !== 'number' || ev.end <= ev.start) return '';
  if (ev.type !== 'sleep' && !(ev.type === 'feed' && ev.kind !== 'bottle')) return '';
  return (ev.end - ev.start) / 86400000;
}

function hoja_(nombre) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(nombre);
  if (!sh) {
    sh = ss.insertSheet(nombre);
    sh.getRange(1, 1, 1, COLS.length).setValues([COLS]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

/**
 * Devuelve {nombreColumna: índice}. Si falta alguna columna de Búho (por ejemplo, en una hoja
 * creada con una versión anterior), la inserta detrás de la anterior y rellena sus valores.
 */
function columnas_(sh) {
  let head = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0].map(String);
  const nuevas = [];
  COLS.forEach((name, k) => {
    if (head.indexOf(name) >= 0) return;
    const prev = k > 0 ? head.indexOf(COLS[k - 1]) : -1;   // índice 0-based de la columna anterior
    if (prev >= 0) sh.insertColumnAfter(prev + 1); else sh.insertColumnBefore(1);
    const pos = prev + 2;                                    // posición 1-based de la nueva columna
    sh.getRange(1, pos).setValue(name).setFontWeight('bold');
    head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
    nuevas.push(name);
  });
  const C = {};
  COLS.forEach(name => C[name] = head.indexOf(name));

  if (nuevas.length || !PropertiesService.getDocumentProperties().getProperty('formatos_' + BUHO_SCRIPT_VERSION)) {
    Object.keys(FORMATOS).forEach(name => sh.getRange(2, C[name] + 1, sh.getMaxRows() - 1, 1).setNumberFormat(FORMATOS[name]));
    ['datos', 'u', 'srv'].forEach(name => sh.getRange(1, C[name] + 1, sh.getMaxRows(), 1).setFontColor('#999999'));
    PropertiesService.getDocumentProperties().setProperty('formatos_' + BUHO_SCRIPT_VERSION, '1');
  }
  if (nuevas.indexOf('duración') >= 0) rellenarDuracion_(sh, C);
  return C;
}

/** Calcula la duración de los registros que ya estaban en la hoja. */
function rellenarDuracion_(sh, C) {
  const n = sh.getLastRow() - 1;
  if (n < 1) return;
  const datos = sh.getRange(2, C.datos + 1, n, 1).getValues();
  const vals = datos.map(r => { try { return [duracion_(JSON.parse(r[0]))]; } catch (x) { return ['']; } });
  sh.getRange(2, C['duración'] + 1, n, 1).setValues(vals);
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
