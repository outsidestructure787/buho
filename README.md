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

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · versión 0.5.1</p>

---

## Español

### Qué es Búho
Búho es una app para apuntar lo que hace el bebé con un solo toque: cuándo se duerme y cuándo se despierta, las tomas (pecho, biberón o sacaleches), los pañales y cosas como el peso, la temperatura o las medicinas. Está pensada para usarla medio dormido a las 3 de la mañana, con botones grandes, modo oscuro y una sola mano.

Funciona sin cobertura: lo que apuntas se guarda en el móvil al momento. Si queréis usarla dos personas, cada una desde su móvil, se puede conectar a una hoja de Google para que los dos móviles se pongan al día solos cuando haya señal. Sirve para Android, iPhone y ordenador, no hay que pasar por ninguna tienda de aplicaciones y es gratis.

Los datos son tuyos. Búho no tiene servidores propios: lo que apuntas está en tu móvil y, si activas la sincronización, en una hoja de cálculo de tu cuenta de Google.

### Qué necesitas
- **Para usarla en un solo móvil:** solo el móvil. Son dos minutos (paso 1).
- **Para usarla en dos o más móviles:** una cuenta de Google (la de Gmail sirve) y un ordenador durante unos 15 minutos, una sola vez (paso 2). Desde el móvil también se puede, pero el editor de Google es incómodo en pantalla pequeña.
- **Para ver las visitas del pediatra y recibir avisos de medicación:** lo mismo que en el paso 2 y un calendario de Google. Son 5 minutos más (paso 3).

No hace falta saber programar. Hay que copiar y pegar un texto y pulsar unos cuantos botones, y aquí se explica cada uno.

### Paso 1. Instalar la app en el móvil
1. Abre esta dirección en el móvil: **https://outsidestructure787.github.io/buho/**
   - En Android, usa Chrome.
   - En iPhone, usa Safari.
2. Añádela a la pantalla de inicio:
   - **Android (Chrome):** toca los tres puntos de arriba a la derecha (⋮) y elige *Instalar aplicación* o *Añadir a pantalla de inicio*. Confirma.
   - **iPhone (Safari):** toca el botón de compartir (el cuadrado con una flecha hacia arriba, abajo en el centro), baja un poco y elige *Añadir a pantalla de inicio*. Pulsa *Añadir*.
3. Cierra el navegador y abre Búho desde su icono, el ojo verde. A partir de ahora ábrela siempre desde ahí: así funciona como una app normal, a pantalla completa y sin cobertura.
4. Toca el engranaje de arriba a la derecha (Ajustes) y rellena *Datos del bebé*: nombre, fecha de nacimiento y sexo. En *Configuración*, escribe quién usa ese móvil (por ejemplo, «Mamá» o «Papá»). Pulsa *Guardar*.

Ya puedes usarla. Si solo la va a usar una persona, no necesitas nada más.

### Paso 2 (opcional). Compartir el registro entre varios móviles
Búho guarda los datos en una hoja de cálculo de Google que creas tú. Los móviles mandan ahí lo que apuntan y se traen lo que han apuntado los demás. Para que la hoja y la app se entiendan hay que pegar en la hoja un pequeño programa (un «script») que está en este repositorio. Se hace una vez.

#### 2.1. Crea la hoja
En el ordenador, entra en [sheets.new](https://sheets.new) con tu cuenta de Google. Se abre una hoja en blanco. Arriba a la izquierda pone *Hoja de cálculo sin título*: haz clic y llámala, por ejemplo, *Búho*.

No hace falta escribir nada en ella. La pestaña donde se guardan los registros se crea sola la primera vez que sincronices.

#### 2.2. Pega el script
1. Abre [el script en formato texto](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs) en otra pestaña. Verás una página llena de código. Selecciónalo todo con `Ctrl + A` (en Mac, `Cmd + A`) y cópialo con `Ctrl + C` (`Cmd + C`).
2. Vuelve a la hoja. En el menú de arriba, pulsa *Extensiones* y luego *Apps Script*. Se abre una pestaña nueva con el editor de scripts de Google.
3. El editor trae un archivo llamado `Código.gs` con unas líneas de ejemplo (`function myFunction() { }`). Haz clic dentro, selecciónalo todo (`Ctrl + A`) y bórralo, hasta que quede vacío.
4. Pega el código que copiaste (`Ctrl + V`). La primera línea empieza por `/**` y la última es una llave: `}`.
5. Arriba a la izquierda pone *Proyecto sin título*. Si quieres, cámbialo por *Búho*.
6. Guarda con el icono del disquete o con `Ctrl + S`.

Si en el menú *Extensiones* no aparece *Apps Script*, seguramente estás con una cuenta de trabajo o de un colegio que lo tiene bloqueado. Usa una cuenta personal de Gmail.

#### 2.3. Crea tu clave
La clave es una contraseña que solo conocerán vuestros móviles. Sin ella, nadie más puede leer ni escribir en la hoja. Va en un archivo aparte para que no se pierda cuando actualices el script.

1. En la columna izquierda del editor, junto a *Archivos*, pulsa el **+** y elige *Secuencia de comandos*. Escribe `Config` y pulsa Intro.
2. Borra lo que traiga el archivo nuevo y pega el contenido de [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), que son pocas líneas.
3. Busca la línea `const CLAVE = 'CAMBIA-ESTA-CLAVE';` y cambia solo el texto `CAMBIA-ESTA-CLAVE` por una clave inventada y larga. Lo más fácil es juntar cuatro palabras al azar: `jirafa-lunes-tostada-nube`. No borres las comillas ni el punto y coma.
4. Guarda (`Ctrl + S`). En la columna izquierda tienen que verse dos archivos: `Código.gs` y `Config.gs`.

Apunta la clave en algún sitio: la necesitarás en el móvil.

#### 2.4. Publica el script
Publicarlo le da una dirección de internet a la que el móvil puede enviar los datos.

1. Arriba a la derecha, pulsa el botón azul *Implementar* y elige *Nueva implementación*.
2. Al lado de *Seleccionar tipo* hay una rueda dentada. Púlsala y elige *Aplicación web*.
3. Rellena así:
   - *Descripción:* lo que quieras, por ejemplo «Búho».
   - *Ejecutar como:* **Yo** (aparece tu correo).
   - *Quién tiene acceso:* **Cualquier usuario**. Es necesario para que los móviles puedan conectar sin iniciar sesión en Google. La clave del paso anterior es lo que impide que entre otra persona.
4. Pulsa *Implementar*. Google te pedirá permisos:
   1. Pulsa *Autorizar acceso* y elige tu cuenta.
   2. Saldrá una pantalla que dice que Google no ha verificado la aplicación. Es normal: el script lo has pegado tú y no ha pasado por la revisión de Google. Pulsa *Configuración avanzada* y después *Ir a Búho (no seguro)*.
   3. Revisa los permisos (ver y editar tus hojas de cálculo y tus calendarios) y pulsa *Permitir*. El script funciona con tu cuenta y solo hace lo que pide Búho: guardar registros en esta hoja y, si lo activas, leer y crear eventos en el calendario.
5. Aparece la *URL de la aplicación web*, una dirección larga que empieza por `https://script.google.com/macros/s/` y termina en `/exec`. Pulsa *Copiar* y guárdala. Después pulsa *Hecho*.

Para llevar la dirección y la clave al móvil, lo más cómodo es enviártelas por correo o por un chat contigo mismo.

#### 2.5. Conecta el primer móvil
1. En Búho, toca el engranaje y abre *Configuración*.
2. En *Sincronización con Google Sheets*, pega la dirección en el primer campo y escribe la clave en *Clave de acceso*.
3. Pulsa *Guardar y probar conexión*. Si todo va bien, sale «Conexión correcta» y arriba, junto al título, pone «Sincronizado».

Vuelve a la hoja de Google en el ordenador: habrá una pestaña nueva con lo que tuvieras apuntado.

#### 2.6. Conecta los demás móviles
En el móvil que ya funciona, ve a *Ajustes → Configuración* y pulsa *Compartir configuración con otro móvil*. Envía el enlace a la otra persona por WhatsApp, Telegram o correo. El enlace lleva la dirección y la clave, así que compártelo solo con quien vaya a apuntar.

- **Si el otro móvil es Android:** que instale Búho (paso 1) y luego abra el enlace. La app se conecta sola.
- **Si el otro móvil es iPhone:** que instale Búho (paso 1), copie el enlace y lo pegue en *Ajustes → Configuración*, en el campo *…o pega aquí un enlace de configuración*. Después, *Guardar y probar conexión*. En iPhone hay que hacerlo así porque la app instalada no comparte datos con Safari.

Que cada persona escriba su nombre en *¿Quién usa este móvil?*. Así, en el registro se ve quién apuntó cada cosa.

#### Cómo se ve la hoja
Cada registro es una fila de la pestaña `eventos`: fecha, hora de inicio y fin, duración (en sueños y tomas de pecho), tipo, detalle, nota y quién lo apuntó. Puedes filtrarla, ordenarla o hacer gráficas como con cualquier hoja. Las columnas grises del final las usa la app: no las cambies a mano. Si borras algo desde la app, la fila no desaparece; queda marcada como borrada en la columna *borrado*.

### Paso 3 (opcional). Visitas del calendario y avisos de medicación
Con la sincronización funcionando, Búho puede enseñarte las próximas visitas (pediatra, matrona, vacunas) de un calendario de Google, apuntar visitas nuevas y crear avisos con alarma para la siguiente toma de un medicamento.

1. **Elige el calendario.** Puede ser tu calendario principal o uno compartido solo para el bebé, que es lo más práctico si sois dos. Para crear uno: en [Google Calendar](https://calendar.google.com), en la columna izquierda, junto a *Otros calendarios*, pulsa **+** → *Crear calendario*. Compártelo con la otra persona si queréis verlo los dos.
2. **Copia su ID** (no hace falta si usas el principal). En Google Calendar, pasa el ratón por encima del calendario, pulsa los tres puntos → *Configuración y uso compartido* y baja hasta *Integrar el calendario*. El *ID de calendario* es un texto largo que termina en `@group.calendar.google.com`.
3. **Actívalo en Búho:** *Ajustes → Calendario*.
   - Marca *Mostrar las próximas visitas de Google Calendar*.
   - En *Calendario*, deja `primary` si es tu calendario principal, o pega el ID.
   - *Mostrar solo eventos que contengan* sirve para no ver todo tu calendario personal. Por ejemplo: `pediatra, matrona, vacuna, revisión`. Si lo dejas vacío, se ven todos los eventos.
   - Pulsa *Guardar*. En la pantalla principal aparece la tarjeta *Próximas visitas*. Al tocarla puedes ver la lista completa o añadir una visita.
4. **Avisos de medicación:** en *Ajustes → Medicación*, añade el medicamento (nombre, dosis, cada cuántas horas y, si quieres, durante cuántos días), activa *Mostrar la medicación en la pantalla principal* y marca *Crear un aviso en Google Calendar para la próxima toma*. Cada vez que pulses *Dada*, se crea en el calendario un evento «💊 nombre del medicamento» a la hora de la siguiente toma, con alarma. Para que suene, el calendario tiene que tener las notificaciones activadas en la app de Google Calendar del móvil.

El calendario lo lee el script con la cuenta de Google donde está la hoja. Si usas un calendario de otra persona, tiene que estar compartido con esa cuenta. Si montaste la sincronización antes de la versión 0.3.0, primero actualiza el script (ver más abajo) y después, en el editor, elige la función `autorizar` en el desplegable de arriba, pulsa *Ejecutar* y acepta los permisos del calendario. Por último, publica la versión nueva.

### Si algo no funciona
- **Pone «La clave no coincide con la de la hoja».** La clave escrita en el móvil no es exactamente la de `Config.gs`. Se distinguen mayúsculas y minúsculas, y un espacio de más también cuenta.
- **Pone «No se pudo conectar».** No hay cobertura, o la dirección está mal copiada. Tiene que terminar en `/exec`.
- **Pone «Actualiza el script de Google para usar el calendario».** La app pide el calendario, pero el script publicado es una versión antigua. Sigue los pasos de *Actualizar el script de Google*.
- **Pone «Falta autorizar el calendario».** En el editor del script, elige `autorizar` en el desplegable de funciones, pulsa *Ejecutar* y acepta. Después publica una versión nueva.
- **Pone «No encuentro el calendario».** El ID está mal copiado, o el calendario no está compartido con la cuenta donde está la hoja.
- **La app no se actualiza.** Ábrela con conexión y espera unos segundos: se recarga sola. Si no, ciérrala del todo (quítala de las apps recientes) y vuelve a abrirla. También puedes ir a *Ajustes* y tocar *Buscar actualizaciones*, abajo del todo, junto al número de versión.
- **En el iPhone, el enlace de configuración se abre en Safari y no en la app.** Es normal. Copia el enlace y pégalo en *Ajustes → Configuración* dentro de la app instalada.

### Actualizar el script de Google
La app se actualiza sola, pero el script de la hoja no. Solo hace falta cuando una versión nueva lo diga en la [lista de cambios](../../commits/main) o cuando la app te avise.

1. En la hoja: *Extensiones → Apps Script*.
2. Abre `Código.gs`, borra todo su contenido y pega el nuevo [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Guarda. No toques `Config.gs`: ahí está tu clave.
3. *Implementar → Gestionar implementaciones*. Pulsa el lápiz, en *Versión* elige *Versión nueva* y pulsa *Implementar*.

La dirección `/exec` sigue siendo la misma, así que en los móviles no hay que cambiar nada. Si la versión nueva añade columnas a la hoja, aparecen solas en la siguiente sincronización.

Si montaste la sincronización con la versión 0.1.x (un solo archivo con la clave dentro), antes de pegar el código nuevo apunta lo que pone en `CLAVE` y en `HOJA`. Después crea `Config.gs` como en el paso 2.3 con esos mismos valores.

### Preguntas frecuentes
**¿Qué pasa si no hay cobertura?** Apuntas igual. Arriba se ve cuántos registros faltan por enviar, y se envían solos cuando vuelve la señal.

**¿Y si dos personas apuntan a la vez sin conexión?** Al volver la señal se juntan los registros de las dos. Si las dos editan el mismo registro, se queda la última edición.

**¿Es seguro?** La hoja es privada y está en tu cuenta de Google. El script solo responde si recibe la clave correcta. Quien tenga el enlace de configuración (o la dirección y la clave) puede leer y escribir en el registro, y ver los eventos del calendario que deje pasar el filtro, así que compártelo solo con quien deba apuntar.

**¿Dónde se guardan los datos?** En el móvil y, si activas la sincronización, en tu hoja de Google. Si usas Búho sin sincronizar y borras los datos del navegador o cambias de móvil, se pierden. En ese caso, exporta el CSV de vez en cuando desde *Ajustes → Exportar CSV*.

**¿Cuesta algo?** No. GitHub Pages, Google Sheets, Apps Script y Google Calendar son gratuitos para este uso.

### Qué incluye
- Botones grandes para dormir/despertar, lactancia (pecho izquierdo o derecho, con cronómetro opcional), biberón (materna o fórmula), pañal (pis, caca o ambas) y anotaciones (nota, peso, temperatura, medicación y más, o algo que pasó antes).
- De un vistazo: cronómetros en marcha, cuánto hace de la última toma, del último sueño y del último pañal, y qué pecho toca.
- Resumen del día, gráfica de los últimos 7 días, gráficas de peso, talla y perímetro de la cabeza, y el registro con las últimas 14 entradas. Con *Mostrar más* se abre el registro completo con filtros.
- Medicación con cuenta atrás hasta la próxima toma, duración del tratamiento y avisos en Google Calendar.
- Próximas visitas de Google Calendar y la opción de añadir visitas desde la app.
- Exportación a CSV (7 días, 30 días o todo), que se puede enviar desde el menú de compartir del móvil.
- Tres estilos: Búho (por defecto), Noir (negros y grises) y [Catppuccin](https://catppuccin.com), en modo claro, oscuro o automático.
- Pantalla encendida mientras hay una toma con cronómetro, y la opción de ocultar secciones.
- En español, inglés, catalán, francés, portugués, italiano y alemán.

### Usar tu propia copia
Si prefieres tener tu propia versión de la app, haz un *fork* de este repositorio y activa *Settings → Pages → Deploy from a branch → main / (root)*. Son archivos estáticos, sin compilación ni dependencias: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` e `icons/`. Para añadir un idioma, copia un bloque de `i18n.js`.

### Sobre el proyecto
Voy a ser padre en breve y buscaba una app para apuntar las tomas, los sueños y los pañales que se ajustara a lo que necesitamos en casa: que funcione sin cobertura, que la podamos usar los dos desde móviles distintos y que los datos sean nuestros. Probé varias y ninguna me servía, así que decidí hacerme una a medida.

No soy programador. Búho lo he hecho con ayuda de una IA ([Claude](https://claude.ai)), así que pido disculpas de antemano a los desarrolladores profesionales por meterme en su terreno. Si veis algo mal hecho o que se puede mejorar, abrid un [issue](../../issues). Os lo agradeceré, y seguro que aprendo algo.

---

## English

### What Búho is
Búho ("owl" in Spanish) is an app to log your baby's day with a single tap: sleep and wake times, feeds (breast, bottle or pump), diapers and things such as weight, temperature or medicines. It is built to be used half-asleep at 3 a.m., with big buttons, dark mode and one hand.

It works without coverage: every entry is saved on the phone straight away. If two people want to use it from their own phones, you can connect it to a Google Sheet and both phones catch up by themselves whenever there is signal. It runs on Android, iPhone and desktop, needs no app store and is free.

Your data stays yours. Búho has no servers of its own: entries live on your phone and, if you turn on sync, in a spreadsheet in your own Google account.

The interface is available in English, Spanish, Catalan, French, Portuguese, Italian and German. It follows the phone language, or you can pick one in *Settings → General*.

### What you need
- **One phone only:** just the phone. Two minutes (step 1).
- **Two or more phones:** a Google account (Gmail is fine) and a computer for about 15 minutes, once (step 2).
- **Appointments and medication reminders:** the same as step 2 plus a Google Calendar. Five more minutes (step 3).

No coding needed: you copy and paste some text and press a few buttons.

### Step 1. Install the app
1. Open **https://outsidestructure787.github.io/buho/** on your phone, in Chrome (Android) or Safari (iPhone).
2. Add it to the home screen:
   - **Android:** tap the three dots (⋮) at the top right and choose *Install app* or *Add to Home screen*.
   - **iPhone:** tap the share button (the square with an arrow), scroll down a little, choose *Add to Home Screen* and tap *Add*.
3. Open Búho from its icon, the green eye. From now on, always open it from there.
4. Tap the gear (Settings), fill in *Baby details* and, under *General*, who uses this phone. Tap *Save*.

That's it for a single phone.

### Step 2 (optional). Share the log between phones
Búho stores the data in a Google Sheet you create. To connect the sheet and the app, you paste a small script from this repository into the sheet. You only do this once.

1. **Create the sheet:** go to [sheets.new](https://sheets.new) on a computer and give it a name, such as *Búho*.
2. **Paste the script:** open [the raw script](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs), select all (`Ctrl/Cmd + A`) and copy. In the sheet, open *Extensions → Apps Script*. Delete the sample code in `Code.gs`, paste, and save (`Ctrl/Cmd + S`). If *Apps Script* is missing, you are probably on a work or school account that blocks it: use a personal Gmail account.
3. **Create your key:** click **+** next to *Files* → *Script*, name it `Config`, delete its contents and paste [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs). Replace `CAMBIA-ESTA-CLAVE` with a long made-up key, for example four random words like `giraffe-monday-toast-cloud`. Keep the quotes. Save, and write the key down.
4. **Publish it:** *Deploy → New deployment*, click the gear next to *Select type* and choose *Web app*. *Execute as:* **Me**. *Who has access:* **Anyone** (the key is what keeps others out). Click *Deploy* and authorise it. Google warns that the app is not verified because it is your own script: click *Advanced → Go to Búho (unsafe)* and then *Allow*.
5. **Copy the web app URL**, the one that ends in `/exec`.
6. **Connect the first phone:** in Búho, *Settings → General → Sync with Google Sheets*. Paste the URL and the key, then tap *Save and test connection*. You should see "Connection OK".
7. **Connect the other phones:** tap *Share setup with another phone* and send the link. On Android, install Búho and open the link. On iPhone, install Búho first, then paste the link into *…or paste a setup link here* in Settings, because the installed app does not share storage with Safari.

Each entry becomes a row in the `eventos` tab, with readable date, times, duration, type, details and who logged it. Don't edit the grey columns at the end: the app uses them.

### Step 3 (optional). Calendar appointments and medication reminders
1. Pick a calendar: your main one, or a shared calendar just for the baby (Google Calendar → **+** next to *Other calendars* → *Create new calendar*).
2. For a shared calendar, copy its ID: calendar settings → *Integrate calendar* → *Calendar ID* (it ends in `@group.calendar.google.com`).
3. In Búho, *Settings → Calendar*: tick *Show upcoming appointments*, enter `primary` or the ID, optionally filter by words such as `paediatrician, midwife, vaccine`, and save. An *Upcoming appointments* card appears on the main screen.
4. For reminders: in *Settings → Medication*, add the medicine and tick *Create a Google Calendar reminder for the next dose*. Each time you tap *Given*, an event with an alarm is created for the next dose.

The calendar must belong to, or be shared with, the Google account that owns the sheet. If you set up sync before version 0.3.0, update the script first, then run the `autorizar` function once from the editor (pick it in the function menu and press *Run*), accept the calendar permissions and publish a new version.

### Troubleshooting
- **"The key does not match the sheet":** the key on the phone is not exactly the one in `Config.gs` (case and spaces count).
- **"Could not connect":** no coverage, or the URL is wrong. It must end in `/exec`.
- **"Update the Google script to use the calendar":** the published script is an old version. See *Updating the script* below.
- **The app does not update:** open it with a connection and wait a few seconds. If nothing happens, close it completely and reopen it, or use *Check for updates* at the bottom of Settings.

### Updating the script
The app updates itself; the script in the sheet does not. When a new version asks for it: replace the contents of `Code.gs` with the new [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs) (leave `Config.gs` alone), save, then *Deploy → Manage deployments* → pencil icon → *Version: New version* → *Deploy*. The `/exec` URL stays the same.

### Self-host
Fork this repository and enable *Settings → Pages → Deploy from a branch → main / (root)*. Plain static files: no build step, no dependencies. To add a language, copy a block in `i18n.js`.

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

**Sincronitzar:** crea un full a [sheets.new](https://sheets.new) → *Extensions → Apps Script* → enganxa [`Code.gs`](apps-script/Code.gs) i crea `Config.gs` amb [la teva clau](apps-script/Config.gs) → *Implementa → Aplicació web* (*Executa com: Jo*, *Accés: Qualsevol usuari*) → copia l'adreça `/exec` i enganxa-la amb la clau a *Ajustes* de l'app. Les passes detallades són a la secció en [castellà](#español).

La interfície està disponible en català i en sis idiomes més.

La fa un futur pare que no és programador, amb ajuda d'una IA, perquè cap de les aplicacions que va provar no li servia. Disculpeu-ne les errades; els suggeriments són benvinguts als [issues](../../issues).

---

## Français

**Búho** est une web-app pour noter d'un seul geste le sommeil, les tétées (sein, biberon ou tire-lait) et les couches de bébé, ainsi que le poids, la température ou les médicaments.

- **Fonctionne hors ligne :** elle s'installe sur l'écran d'accueil et enregistre tout sur le téléphone.
- **Plusieurs téléphones :** reliée à une feuille Google Sheets, elle se synchronise dès qu'il y a du réseau.
- **Android, iPhone et ordinateur**, sans passer par un store. Gratuite et open source.

**Installer :** ouvrez https://outsidestructure787.github.io/buho/ puis choisissez *Installer l'application* (Android) ou *Partager → Sur l'écran d'accueil* (iPhone).

**Synchroniser :** créez une feuille sur [sheets.new](https://sheets.new) → *Extensions → Apps Script* → collez [`Code.gs`](apps-script/Code.gs) et créez `Config.gs` avec [votre clé](apps-script/Config.gs) → *Déployer → Application web* (*Exécuter en tant que : Moi*, *Accès : Tout le monde*) → copiez l'adresse `/exec` et collez-la avec la clé dans *Ajustes* de l'app. Les étapes détaillées sont dans la section [English](#english).

L'interface est disponible en français et dans six autres langues.

Elle est faite par un futur papa qui n'est pas développeur, avec l'aide d'une IA, parce qu'aucune des applications qu'il a essayées ne lui convenait. Pardon d'avance aux développeurs professionnels ; vos remarques sont les bienvenues dans les [issues](../../issues).

---

## Português

**Búho** é uma web-app para registar com um toque o sono, as mamadas (peito, biberão ou bomba) e as fraldas do bebé, além do peso, da temperatura ou dos medicamentos.

- **Funciona sem ligação:** instala-se no ecrã inicial e guarda tudo no telemóvel.
- **Vários telemóveis:** ligada a uma folha do Google Sheets, sincroniza quando há rede.
- **Android, iPhone e computador**, sem loja de apps. Gratuita e de código aberto.

**Instalar:** abra https://outsidestructure787.github.io/buho/ e escolha *Instalar aplicação* (Android) ou *Partilhar → Adicionar ao ecrã principal* (iPhone).

**Sincronizar:** crie uma folha em [sheets.new](https://sheets.new) → *Extensões → Apps Script* → cole [`Code.gs`](apps-script/Code.gs) e crie `Config.gs` com [a sua chave](apps-script/Config.gs) → *Implementar → Aplicação Web* (*Executar como: Eu*, *Acesso: Qualquer pessoa*) → copie o endereço `/exec` e cole-o com a chave em *Ajustes* na app. Os passos detalhados estão na secção [English](#english).

A interface está disponível em português e em mais seis idiomas.

Foi feita por um futuro pai que não é programador, com a ajuda de uma IA, porque nenhuma das apps que experimentou lhe servia. Desculpem desde já os programadores profissionais; sugestões são bem-vindas nos [issues](../../issues).

---

## Italiano

**Búho** è una web-app per annotare con un tocco il sonno, le poppate (seno, biberon o tiralatte) e i pannolini del bebè, oltre a peso, temperatura o medicine.

- **Funziona offline:** si installa nella schermata Home e salva tutto sul telefono.
- **Più telefoni:** collegata a un foglio Google Sheets, si sincronizza quando c'è campo.
- **Android, iPhone e computer**, senza store. Gratuita e open source.

**Installare:** apri https://outsidestructure787.github.io/buho/ e scegli *Installa app* (Android) oppure *Condividi → Aggiungi alla schermata Home* (iPhone).

**Sincronizzare:** crea un foglio su [sheets.new](https://sheets.new) → *Estensioni → Apps Script* → incolla [`Code.gs`](apps-script/Code.gs) e crea `Config.gs` con [la tua chiave](apps-script/Config.gs) → *Esegui il deployment → App web* (*Esegui come: Io*, *Accesso: Chiunque*) → copia l'indirizzo `/exec` e incollalo con la chiave in *Ajustes* nell'app. I passaggi dettagliati sono nella sezione [English](#english).

L'interfaccia è disponibile in italiano e in altre sei lingue.

L'ha fatta un futuro papà che non è programmatore, con l'aiuto di un'IA, perché nessuna delle app che ha provato faceva al caso suo. Chiedo scusa in anticipo agli sviluppatori professionisti; i suggerimenti sono benvenuti negli [issues](../../issues).

---

## Deutsch

**Búho** ist eine Web-App, mit der man Schlaf, Mahlzeiten (Brust, Fläschchen oder Milchpumpe) und Windeln des Babys mit einem Tipp festhält, dazu Gewicht, Temperatur oder Medikamente.

- **Funktioniert offline:** Sie wird auf dem Startbildschirm installiert und speichert alles auf dem Handy.
- **Mehrere Handys:** Mit einer Google-Tabelle verbunden, synchronisiert sie sich, sobald Empfang da ist.
- **Android, iPhone und Computer**, ohne App-Store. Kostenlos und Open Source.

**Installieren:** https://outsidestructure787.github.io/buho/ öffnen und *App installieren* (Android) bzw. *Teilen → Zum Home-Bildschirm* (iPhone) wählen.

**Synchronisieren:** Tabelle unter [sheets.new](https://sheets.new) anlegen → *Erweiterungen → Apps Script* → [`Code.gs`](apps-script/Code.gs) einfügen und `Config.gs` mit [eigenem Schlüssel](apps-script/Config.gs) anlegen → *Bereitstellen → Web-App* (*Ausführen als: Ich*, *Zugriff: Jeder*) → die `/exec`-Adresse kopieren und mit dem Schlüssel in der App unter *Ajustes* einfügen. Die ausführlichen Schritte stehen im Abschnitt [English](#english).

Die Oberfläche gibt es auf Deutsch und in sechs weiteren Sprachen.

Gebaut hat sie ein werdender Vater, der kein Entwickler ist, mit Hilfe einer KI, weil keine der getesteten Apps gepasst hat. Entschuldigung vorab an alle Profi-Entwickler; Hinweise sind in den [Issues](../../issues) willkommen.

---

<p align="center"><sub>Licencia MIT · MIT License · ver / see <a href="LICENSE">LICENSE</a></sub></p>
