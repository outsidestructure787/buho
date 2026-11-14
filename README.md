<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Registro del bebé: sueño, tomas y pañales · Baby log: sleep, feeds and diapers<br>
<b>Funciona sin conexión · Works offline</b>
</p>

<p align="center">
<a href="#español">Español</a> ·
<a href="#english">English</a> ·
<a href="#català">Català</a> ·
<a href="#français">Français</a> ·
<a href="#português">Português</a> ·
<a href="#italiano">Italiano</a> ·
<a href="#deutsch">Deutsch</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · versión 0.1.1</p>

---

## Español

### Qué es
Búho es una web-app para apuntar con un toque lo que hace el bebé: cuándo se duerme y se despierta, las tomas (pecho, biberón o sacaleches), los pañales y otras cosas como el peso, la temperatura o las medicinas. Está pensada para usarla medio dormido a las 3 de la mañana: botones grandes, modo oscuro y todo a una mano.

- **Funciona sin conexión.** Se instala en la pantalla de inicio del móvil y abre aunque no haya cobertura. Lo que apuntas se guarda en el móvil al momento.
- **Varios móviles.** Si la conectas a una hoja de Google, los móviles se sincronizan solos cuando hay señal.
- **Android, iPhone y ordenador.** No hay que pasar por ninguna tienda de apps.
- **Tus datos son tuyos.** No hay servidores de terceros: los datos están en tu móvil y, si quieres, en tu propia hoja de Google.
- **Gratis y de código abierto.**

### Qué incluye
- Botones de un toque: se duerme/despierta, pecho izquierdo o derecho (con cronómetro opcional), biberón, pis, caca, pis y caca, otros registros y anotar algo pasado.
- De un vistazo: cronómetros en marcha, cuánto hace de la última toma, del último sueño y del último pañal, y qué pecho toca.
- Resumen del día, gráfica de los últimos 7 días, registro con filtros, edición y borrado, deshacer y exportación a CSV para el pediatra.

### Instalarla en el móvil
1. Abre **https://outsidestructure787.github.io/buho/** en el móvil.
2. **Android (Chrome):** menú ⋮ → *Instalar app* (o *Añadir a pantalla de inicio*).
   **iPhone (Safari):** botón Compartir → *Añadir a pantalla de inicio*.
3. Ábrela desde el icono. Sin hacer nada más, ya funciona y guarda los datos solo en ese móvil.

### Sincronizar varios móviles con Google Sheets (gratis)
Solo hay que hacerlo una vez, desde un ordenador. Se tarda unos 10 minutos.

1. **Crea la hoja.** Entra en [sheets.new](https://sheets.new) con tu cuenta de Google y ponle un nombre, por ejemplo *Búho*.
2. **Pega el script.** En la hoja: *Extensiones → Apps Script*. Borra lo que haya y pega el contenido de [`apps-script/Code.gs`](apps-script/Code.gs).
3. **Pon tu clave.** En la línea `const CLAVE = 'CAMBIA-ESTA-CLAVE';` escribe una clave larga, inventada por ti (por ejemplo, cuatro palabras al azar). Guarda (icono del disquete).
4. **Publícalo.** *Implementar → Nueva implementación* → engranaje → *Aplicación web*.
   - *Ejecutar como:* **Yo**
   - *Quién tiene acceso:* **Cualquier usuario**
   - Pulsa *Implementar* y autoriza el acceso con tu cuenta. Google avisará de que la app no está verificada: es normal, porque el script es tuyo. Pulsa *Configuración avanzada → Ir a…*
5. **Copia la dirección** que termina en `/exec`.
6. **En Búho:** ⚙️ Ajustes → *Sincronización con Google Sheets* → pega la dirección y la clave → *Guardar y probar conexión*.
7. **Para el otro móvil:** en Ajustes, pulsa *Compartir configuración con otro móvil* y envía el enlace a la otra persona.
   - En **Android**, basta con abrir el enlace.
   - En **iPhone**, primero hay que instalar la app (paso anterior). Después se pega el enlace en Ajustes, en el campo *…o pega aquí un enlace de configuración*. En iPhone, la app instalada y Safari no comparten datos.

Cada registro es una fila de la pestaña `eventos`, con fecha, hora, tipo y detalle legibles. Las columnas grises las usa la app: no las edites a mano.

### Preguntas frecuentes
- **¿Qué pasa si no hay cobertura?** Apuntas igual. Los registros quedan pendientes (lo indica la cabecera) y se envían solos cuando vuelve la señal.
- **¿Y si dos personas apuntan a la vez sin conexión?** No pasa nada: al reconectar se juntan los registros de los dos. Si los dos editan el mismo registro, se queda la última edición.
- **¿Es seguro?** La hoja es privada y está en tu cuenta de Google. El script solo acepta peticiones con tu clave. Comparte el enlace de configuración solo con quien tenga que apuntar.
- **¿Cómo me llegan las actualizaciones?** Cuando hay una versión nueva, la app muestra el aviso *Hay una versión nueva · Actualizar*.
- **¿Dónde se guardan los datos?** En el móvil (almacenamiento del navegador) y, si la configuras, en tu hoja de Google. Si borras los datos del navegador sin tener la hoja configurada, se pierden. Exporta el CSV de vez en cuando.

### Usar tu propia copia
Haz un *fork* de este repositorio y activa *Settings → Pages → Deploy from a branch → main / (root)*. Son archivos estáticos, sin compilación ni dependencias: `index.html`, `sw.js`, `manifest.webmanifest` e `icons/`.

### Sobre el proyecto
Voy a ser padre en breve y buscaba una app para apuntar las tomas, los sueños y los pañales que se ajustara a lo que necesitamos en casa: que funcione sin cobertura, que la podamos usar los dos desde móviles distintos y que los datos sean nuestros. Probé varias y ninguna me servía, así que decidí hacerme una a medida.

No soy programador. Búho lo he hecho con ayuda de una IA ([Claude](https://claude.ai)), así que pido disculpas de antemano a los desarrolladores profesionales por meterme en su terreno. Si veis algo mal hecho o que se puede mejorar, abrid un [issue](../../issues). Os lo agradeceré, y seguro que aprendo algo.

**Próximamente:** más idiomas en la app, gráfica de peso y recordatorios de toma.

---

## English

### What it is
Búho ("owl" in Spanish) is a web app to log your baby's day with a single tap: sleep and wake times, feeds (breast, bottle or pump), diapers and other things such as weight, temperature or medicines. It is designed to be used half-asleep at 3 a.m.: big buttons, dark mode and one-handed use.

- **Works offline.** Install it on your phone's home screen and it opens without signal. Every entry is saved on the phone instantly.
- **Multiple phones.** Connect it to a Google Sheet and phones sync automatically whenever there is coverage.
- **Android, iPhone and desktop.** No app store needed.
- **Your data stays yours.** No third-party servers: data lives on your phone and, optionally, in your own Google Sheet.
- **Free and open source.**

> The app interface is currently in **Spanish only**. More languages are coming.

### Install
1. Open **https://outsidestructure787.github.io/buho/** on your phone.
2. **Android (Chrome):** menu ⋮ → *Install app*. **iPhone (Safari):** Share → *Add to Home Screen*.
3. Open it from the icon. It works right away and keeps data on that phone only.

### Sync phones with Google Sheets (free)
1. Create a sheet at [sheets.new](https://sheets.new).
2. *Extensions → Apps Script*, delete everything and paste [`apps-script/Code.gs`](apps-script/Code.gs).
3. Replace `CAMBIA-ESTA-CLAVE` with a long secret key of your own and save.
4. *Deploy → New deployment → Web app*. *Execute as:* **Me**; *Who has access:* **Anyone**. Authorize it. Google warns that the app is unverified: it is your own script, so choose *Advanced → Go to…*
5. Copy the URL ending in `/exec`.
6. In Búho: ⚙️ *Ajustes → Sincronización con Google Sheets*. Paste the URL and the key, then tap *Guardar y probar conexión*.
7. Tap *Compartir configuración con otro móvil* to send a setup link to the other person. On iPhone, install the app first and paste the link into the settings field, because the installed app does not share storage with Safari.

Entries without coverage are queued and sent automatically when the connection comes back. If two people edit the same entry, the latest edit wins.

### Self-host
Fork this repository and enable *Settings → Pages → Deploy from a branch → main / (root)*. Plain static files: no build step, no dependencies.

### About
I'm about to become a dad and I was looking for a baby log that fit what we need at home: it has to work without mobile coverage, we both need to use it from different phones, and the data has to stay ours. None of the apps I tried did that, so I decided to build my own.

I'm not a developer. I built Búho with the help of an AI ([Claude](https://claude.ai)), so apologies in advance to professional developers for stepping onto your turf. If you spot something done wrong or something that could be better, please open an [issue](../../issues). I'll be grateful, and I'll probably learn something.

---

## Català

**Búho** és una web-app per apuntar amb un sol toc el son, les preses (pit, biberó o treullet) i els bolquers del nadó, a més del pes, la temperatura o els medicaments.

- **Funciona sense connexió:** s'instal·la a la pantalla d'inici i ho guarda tot al mòbil.
- **Diversos mòbils:** si la connectes a un full de Google, es sincronitzen quan hi ha cobertura.
- **Android, iPhone i ordinador**, sense botiga d'aplicacions. Gratuïta i de codi obert.

**Instal·lar-la:** obre https://outsidestructure787.github.io/buho/ i tria *Instal·lar l'aplicació* (Android) o *Compartir → Afegir a la pantalla d'inici* (iPhone).

**Sincronitzar:** crea un full a [sheets.new](https://sheets.new) → *Extensions → Apps Script* → enganxa [`apps-script/Code.gs`](apps-script/Code.gs) → canvia la clau → *Implementa → Aplicació web* (*Executa com: Jo*, *Accés: Qualsevol usuari*) → copia l'adreça `/exec` i enganxa-la amb la clau a *Ajustes* de l'app. Les passes detallades són a la secció en [castellà](#español).

La interfície, de moment, només està en castellà.

La fa un futur pare que no és programador, amb ajuda d'una IA, perquè cap de les aplicacions que va provar no li servia. Disculpeu-ne les errades; els suggeriments són benvinguts als [issues](../../issues).

---

## Français

**Búho** est une web-app pour noter d'un seul geste le sommeil, les tétées (sein, biberon ou tire-lait) et les couches de bébé, ainsi que le poids, la température ou les médicaments.

- **Fonctionne hors ligne :** elle s'installe sur l'écran d'accueil et enregistre tout sur le téléphone.
- **Plusieurs téléphones :** reliée à une feuille Google Sheets, elle se synchronise dès qu'il y a du réseau.
- **Android, iPhone et ordinateur**, sans passer par un store. Gratuite et open source.

**Installer :** ouvrez https://outsidestructure787.github.io/buho/ puis choisissez *Installer l'application* (Android) ou *Partager → Sur l'écran d'accueil* (iPhone).

**Synchroniser :** créez une feuille sur [sheets.new](https://sheets.new) → *Extensions → Apps Script* → collez [`apps-script/Code.gs`](apps-script/Code.gs) → changez la clé → *Déployer → Application web* (*Exécuter en tant que : Moi*, *Accès : Tout le monde*) → copiez l'adresse `/exec` et collez-la avec la clé dans *Ajustes* de l'app. Les étapes détaillées sont dans la section [English](#english).

L'interface n'est disponible qu'en espagnol pour l'instant.

Elle est faite par un futur papa qui n'est pas développeur, avec l'aide d'une IA, parce qu'aucune des applications qu'il a essayées ne lui convenait. Pardon d'avance aux développeurs professionnels ; vos remarques sont les bienvenues dans les [issues](../../issues).

---

## Português

**Búho** é uma web-app para registar com um toque o sono, as mamadas (peito, biberão ou bomba) e as fraldas do bebé, além do peso, da temperatura ou dos medicamentos.

- **Funciona sem ligação:** instala-se no ecrã inicial e guarda tudo no telemóvel.
- **Vários telemóveis:** ligada a uma folha do Google Sheets, sincroniza quando há rede.
- **Android, iPhone e computador**, sem loja de apps. Gratuita e de código aberto.

**Instalar:** abra https://outsidestructure787.github.io/buho/ e escolha *Instalar aplicação* (Android) ou *Partilhar → Adicionar ao ecrã principal* (iPhone).

**Sincronizar:** crie uma folha em [sheets.new](https://sheets.new) → *Extensões → Apps Script* → cole [`apps-script/Code.gs`](apps-script/Code.gs) → altere a chave → *Implementar → Aplicação Web* (*Executar como: Eu*, *Acesso: Qualquer pessoa*) → copie o endereço `/exec` e cole-o com a chave em *Ajustes* na app. Os passos detalhados estão na secção [English](#english).

Por agora, a interface só está em espanhol.

Foi feita por um futuro pai que não é programador, com a ajuda de uma IA, porque nenhuma das apps que experimentou lhe servia. Desculpem desde já os programadores profissionais; sugestões são bem-vindas nos [issues](../../issues).

---

## Italiano

**Búho** è una web-app per annotare con un tocco il sonno, le poppate (seno, biberon o tiralatte) e i pannolini del bebè, oltre a peso, temperatura o medicine.

- **Funziona offline:** si installa nella schermata Home e salva tutto sul telefono.
- **Più telefoni:** collegata a un foglio Google Sheets, si sincronizza quando c'è campo.
- **Android, iPhone e computer**, senza store. Gratuita e open source.

**Installare:** apri https://outsidestructure787.github.io/buho/ e scegli *Installa app* (Android) oppure *Condividi → Aggiungi alla schermata Home* (iPhone).

**Sincronizzare:** crea un foglio su [sheets.new](https://sheets.new) → *Estensioni → Apps Script* → incolla [`apps-script/Code.gs`](apps-script/Code.gs) → cambia la chiave → *Esegui il deployment → App web* (*Esegui come: Io*, *Accesso: Chiunque*) → copia l'indirizzo `/exec` e incollalo con la chiave in *Ajustes* nell'app. I passaggi dettagliati sono nella sezione [English](#english).

Per ora l'interfaccia è solo in spagnolo.

L'ha fatta un futuro papà che non è programmatore, con l'aiuto di un'IA, perché nessuna delle app che ha provato faceva al caso suo. Chiedo scusa in anticipo agli sviluppatori professionisti; i suggerimenti sono benvenuti negli [issues](../../issues).

---

## Deutsch

**Búho** ist eine Web-App, mit der man Schlaf, Mahlzeiten (Brust, Fläschchen oder Milchpumpe) und Windeln des Babys mit einem Tipp festhält, dazu Gewicht, Temperatur oder Medikamente.

- **Funktioniert offline:** Sie wird auf dem Startbildschirm installiert und speichert alles auf dem Handy.
- **Mehrere Handys:** Mit einer Google-Tabelle verbunden, synchronisiert sie sich, sobald Empfang da ist.
- **Android, iPhone und Computer**, ohne App-Store. Kostenlos und Open Source.

**Installieren:** https://outsidestructure787.github.io/buho/ öffnen und *App installieren* (Android) bzw. *Teilen → Zum Home-Bildschirm* (iPhone) wählen.

**Synchronisieren:** Tabelle unter [sheets.new](https://sheets.new) anlegen → *Erweiterungen → Apps Script* → [`apps-script/Code.gs`](apps-script/Code.gs) einfügen → Schlüssel ändern → *Bereitstellen → Web-App* (*Ausführen als: Ich*, *Zugriff: Jeder*) → die `/exec`-Adresse kopieren und mit dem Schlüssel in der App unter *Ajustes* einfügen. Die ausführlichen Schritte stehen im Abschnitt [English](#english).

Die Oberfläche ist vorerst nur auf Spanisch verfügbar.

Gebaut hat sie ein werdender Vater, der kein Entwickler ist, mit Hilfe einer KI, weil keine der getesteten Apps gepasst hat. Entschuldigung vorab an alle Profi-Entwickler; Hinweise sind in den [Issues](../../issues) willkommen.

---

<p align="center"><sub>Licencia MIT · MIT License · ver / see <a href="LICENSE">LICENSE</a></sub></p>
