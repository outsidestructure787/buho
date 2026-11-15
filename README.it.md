<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Diario del bebè: sonno, poppate e pannolini<br>
<b>Funziona offline</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<b>Italiano</b>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · versione 0.5.1</p>

---

## Cos'è Búho
Búho («gufo» in spagnolo) è un'app per annotare con un tocco la giornata del bebè: quando si addormenta e si sveglia, le poppate (seno, biberon o tiralatte), i pannolini e cose come peso, temperatura o farmaci. È pensata per essere usata mezzo addormentati alle 3 di notte: pulsanti grandi, modalità scura, una mano sola.

Funziona senza campo: ogni voce viene salvata subito sul telefono. Se la usate in due, ognuno dal proprio telefono, potete collegarla a un foglio Google e i telefoni si aggiornano da soli quando c'è campo. Funziona su Android, iPhone e computer, non passa da nessuno store ed è gratuita.

I dati sono tuoi. Búho non ha server propri: quello che annoti resta sul telefono e, se attivi la sincronizzazione, in un foglio di calcolo del tuo account Google.

L'app è disponibile in italiano, spagnolo, inglese, francese, portoghese, tedesco e catalano. Segue la lingua del telefono; puoi cambiarla in *Impostazioni → Configurazione → Lingua*.

## Cosa ti serve
- **Un solo telefono:** solo il telefono. Due minuti (passo 1).
- **Due o più telefoni:** un account Google (va bene Gmail) e un computer per circa 15 minuti, una volta sola (passo 2). Si può fare anche dal telefono, ma l'editor di script di Google è scomodo su schermi piccoli.
- **Appuntamenti e promemoria dei farmaci:** come nel passo 2, più un Google Calendar. Altri 5 minuti (passo 3).

Non serve saper programmare. Si tratta di copiare e incollare un testo e premere qualche pulsante, e qui sono spiegati tutti.

## Passo 1. Installare l'app sul telefono
1. Apri questo indirizzo sul telefono: **https://outsidestructure787.github.io/buho/** Su Android con Chrome, su iPhone con Safari.
2. Aggiungila alla schermata Home:
   - **Android (Chrome):** tocca i tre puntini (⋮) in alto a destra e scegli *Installa app* o *Aggiungi a schermata Home*. Conferma.
   - **iPhone (Safari):** tocca il pulsante di condivisione (il quadrato con la freccia in su, in basso), scorri un po' e scegli *Aggiungi alla schermata Home*. Tocca *Aggiungi*.
3. Chiudi il browser e apri Búho dalla sua icona, l'occhio verde. D'ora in poi aprila sempre da lì: funziona a schermo intero come un'app normale, anche senza campo.
4. Tocca l'ingranaggio in alto a destra (Impostazioni) e compila *Dati del bebè*: nome, data di nascita e sesso. In *Configurazione*, scrivi chi usa questo telefono (per esempio «Mamma» o «Papà»). Tocca *Salva*.

Fatto. Se la usa una sola persona, non serve altro.

## Passo 2 (facoltativo). Condividere il diario tra più telefoni
Búho salva i dati in un foglio Google creato da te. Ogni telefono ci manda quello che annota e prende quello che hanno annotato gli altri. Perché foglio e app si capiscano, si incolla nel foglio un piccolo programma (uno «script») che si trova in questo repository. Si fa una volta sola.

### 2.1. Crea il foglio
Dal computer, vai su [sheets.new](https://sheets.new) con il tuo account Google. Si apre un foglio vuoto. In alto a sinistra c'è scritto *Foglio di lavoro senza titolo*: cliccaci e chiamalo, per esempio, *Búho*.

Non serve scriverci niente. La scheda delle voci si crea da sola alla prima sincronizzazione.

### 2.2. Incolla lo script
1. In un'altra scheda, apri [lo script in formato testo](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Vedrai una pagina piena di codice. Seleziona tutto con `Ctrl + A` (`Cmd + A` su Mac) e copia con `Ctrl + C` (`Cmd + C`).
2. Torna al foglio. Nel menu in alto, clicca su *Estensioni* e poi su *Apps Script*. L'editor di script di Google si apre in una nuova scheda.
3. L'editor contiene un file `Codice.gs` con alcune righe di esempio (`function myFunction() { }`). Clicca dentro, seleziona tutto (`Ctrl + A`) e cancella finché non è vuoto.
4. Incolla il codice copiato (`Ctrl + V`). La prima riga inizia con `/**` e l'ultima è una parentesi graffa: `}`.
5. In alto a sinistra c'è scritto *Progetto senza titolo*. Se vuoi, rinominalo *Búho*.
6. Salva con l'icona del dischetto o con `Ctrl + S`.

Se nel menu *Estensioni* non compare *Apps Script*, probabilmente stai usando un account di lavoro o di scuola che lo blocca. Usa un account Gmail personale.

### 2.3. Crea la tua chiave
La chiave è una password che conosceranno solo i vostri telefoni. Senza di essa nessun altro può leggere o scrivere nel foglio. Va in un file a parte, così non si perde quando aggiorni lo script.

1. Nella colonna a sinistra dell'editor, accanto a *File*, clicca su **+** e scegli *Script*. Scrivi `Config` e premi Invio.
2. Cancella il contenuto del nuovo file e incolla quello di [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), che sono poche righe.
3. Cerca la riga `const CLAVE = 'CAMBIA-ESTA-CLAVE';` e sostituisci solo il testo `CAMBIA-ESTA-CLAVE` con una chiave lunga inventata da te. La cosa più semplice è unire quattro parole a caso: `giraffa-lunedi-toast-nuvola`. Lascia le virgolette e il punto e virgola.
4. Salva (`Ctrl + S`). A sinistra devono vedersi due file: `Codice.gs` e `Config.gs`.

Annota la chiave da qualche parte: ti servirà sul telefono.

### 2.4. Pubblica lo script
Pubblicandolo, lo script riceve un indirizzo internet a cui i telefoni mandano i dati.

1. In alto a destra, clicca sul pulsante blu *Esegui il deployment* e scegli *Nuovo deployment*.
2. Accanto a *Seleziona tipo* c'è un ingranaggio. Cliccaci e scegli *App web*.
3. Compila così:
   - *Descrizione:* quello che vuoi, per esempio «Búho».
   - *Esegui come:* **Io** (compare la tua email).
   - *Chi può accedere:* **Chiunque**. Così i telefoni possono collegarsi senza accedere a Google. È la chiave del passo precedente a tenere fuori gli altri.
4. Clicca su *Esegui il deployment*. Google chiederà delle autorizzazioni:
   1. Clicca su *Autorizza accesso* e scegli il tuo account.
   2. Compare una schermata che dice che Google non ha verificato l'app. È normale: lo script l'hai incollato tu e non è passato dalla revisione di Google. Clicca su *Avanzate* e poi su *Vai a Búho (non sicuro)*.
   3. Controlla le autorizzazioni (vedere e modificare i tuoi fogli di calcolo e i tuoi calendari) e clicca su *Consenti*. Lo script funziona con il tuo account e fa solo quello che chiede Búho: salvare le voci in questo foglio e, se lo attivi, leggere e creare eventi nel calendario.
5. Compare l'*URL dell'app web*, un indirizzo lungo che inizia con `https://script.google.com/macros/s/` e finisce con `/exec`. Clicca su *Copia* e conservalo. Poi clicca su *Fine*.

Per portare indirizzo e chiave sul telefono, la cosa più comoda è mandarteli per email o in una chat con te stesso.

### 2.5. Collega il primo telefono
1. In Búho, tocca l'ingranaggio e apri *Configurazione*.
2. In *Sincronizzazione con Google Sheets*, incolla l'indirizzo nel primo campo e scrivi la chiave in *Chiave di accesso*.
3. Tocca *Salva e prova la connessione*. Se va tutto bene, compare «Connessione riuscita» e accanto al titolo «Sincronizzato».

Torna al foglio Google sul computer: ci sarà una scheda nuova con quello che avevi già annotato.

### 2.6. Collega gli altri telefoni
Sul telefono che funziona già, vai in *Impostazioni → Configurazione* e tocca *Condividi la configurazione con un altro telefono*. Manda il link all'altra persona via WhatsApp, Telegram o email. Il link contiene indirizzo e chiave, quindi condividilo solo con chi deve annotare.

- **Se l'altro telefono è Android:** installare Búho (passo 1) e aprire il link. L'app si collega da sola.
- **Se l'altro telefono è iPhone:** installare Búho (passo 1), copiare il link e incollarlo in *Impostazioni → Configurazione*, nel campo *…oppure incolla qui un link di configurazione*. Poi *Salva e prova la connessione*. Su iPhone bisogna fare così perché l'app installata non condivide i dati con Safari.

Ognuno scriva il proprio nome in *Chi usa questo telefono?*, così nel diario si vede chi ha annotato cosa.

### Com'è il foglio
Ogni voce è una riga della scheda `eventos`: data, ora di inizio e fine, durata (per sonno e poppate al seno), tipo, dettaglio, nota e chi l'ha annotata. Puoi filtrarlo, ordinarlo o fare grafici come con qualsiasi foglio. Le colonne grigie in fondo le usa l'app: non modificarle a mano. Se cancelli qualcosa dall'app, la riga non sparisce: viene segnata nella colonna *borrado* (cancellato).

## Passo 3 (facoltativo). Appuntamenti del calendario e promemoria dei farmaci
Con la sincronizzazione attiva, Búho può mostrarti i prossimi appuntamenti (pediatra, ostetrica, vaccini) di un Google Calendar, aggiungerne di nuovi e creare promemoria con allarme per la prossima dose di un farmaco.

1. **Scegli il calendario.** Può essere il tuo calendario principale o uno condiviso solo per il bebè, la cosa più pratica se siete in due. Per crearne uno: in [Google Calendar](https://calendar.google.com), nella colonna di sinistra accanto ad *Altri calendari*, clicca su **+** → *Crea nuovo calendario*. Condividilo con l'altra persona se volete vederlo entrambi.
2. **Copia il suo ID** (non serve per il principale). In Google Calendar, passa il mouse sul calendario, clicca sui tre puntini → *Impostazioni e condivisione* e scorri fino a *Integra calendario*. L'*ID calendario* è un testo lungo che finisce con `@group.calendar.google.com`.
3. **Attivalo in Búho:** *Impostazioni → Calendario*.
   - Spunta *Mostra i prossimi appuntamenti di Google Calendar*.
   - In *Calendario*, lascia `primary` per il calendario principale, oppure incolla l'ID.
   - *Mostra solo eventi che contengono* serve a non vedere tutto il tuo calendario personale. Per esempio: `pediatra, ostetrica, vaccino, controllo`. Vuoto = tutti gli eventi.
   - Tocca *Salva*. Nella schermata principale compare la scheda *Prossimi appuntamenti*. Toccandola vedi la lista completa o aggiungi un appuntamento.
4. **Promemoria dei farmaci:** in *Impostazioni → Farmaci*, aggiungi il farmaco (nome, dose, ogni quante ore e, se vuoi, per quanti giorni), attiva *Mostra i farmaci nella schermata principale* e spunta *Crea un promemoria su Google Calendar per la prossima dose*. Ogni volta che tocchi *Data*, nel calendario viene creato un evento «💊 nome del farmaco» all'ora della dose successiva, con allarme. Perché suoni, il calendario deve avere le notifiche attive nell'app Google Calendar del telefono.

Lo script legge il calendario con l'account Google proprietario del foglio. Se usi il calendario di un'altra persona, deve essere condiviso con quell'account. Se hai impostato la sincronizzazione prima della versione 0.3.0, aggiorna prima lo script (vedi sotto), poi nell'editor scegli la funzione `autorizar` nel menu in alto, clicca su *Esegui* e accetta le autorizzazioni del calendario. Infine pubblica una nuova versione.

## Se qualcosa non funziona
- **«La chiave non corrisponde a quella del foglio.»** La chiave sul telefono non è esattamente quella di `Config.gs`. Maiuscole e minuscole contano, e anche uno spazio in più.
- **«Impossibile connettersi.»** Non c'è campo, oppure l'indirizzo è copiato male. Deve finire con `/exec`.
- **«Aggiorna lo script Google per usare il calendario.»** L'app chiede il calendario ma lo script pubblicato è una versione vecchia. Segui *Aggiornare lo script Google* qui sotto.
- **«Falta autorizar el calendario»** (messaggio dello script, in spagnolo: calendario non autorizzato). Nell'editor scegli `autorizar` nel menu delle funzioni, clicca su *Esegui* e accetta. Poi pubblica una nuova versione.
- **«No encuentro el calendario»** (sempre dello script: calendario non trovato). L'ID è copiato male, oppure il calendario non è condiviso con l'account proprietario del foglio.
- **L'app non si aggiorna.** Aprila con la connessione e aspetta qualche secondo: si ricarica da sola. Altrimenti chiudila del tutto (toglila dalle app recenti) e riaprila. Puoi anche toccare *Cerca aggiornamenti* in fondo alle Impostazioni, accanto al numero di versione.
- **Su iPhone il link di configurazione si apre in Safari e non nell'app.** È normale. Copia il link e incollalo in *Impostazioni → Configurazione* dentro l'app installata.

## Aggiornare lo script Google
L'app si aggiorna da sola, lo script del foglio no. Serve solo quando una nuova versione lo indica nell'[elenco delle modifiche](../../commits/main) o quando l'app te lo segnala.

1. Nel foglio: *Estensioni → Apps Script*.
2. Apri `Codice.gs`, cancella tutto il contenuto e incolla il nuovo [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Salva. Non toccare `Config.gs`: lì c'è la tua chiave.
3. *Esegui il deployment → Gestisci deployment*. Clicca sulla matita, in *Versione* scegli *Nuova versione* e clicca su *Esegui il deployment*.

L'indirizzo `/exec` resta lo stesso, quindi sui telefoni non cambia niente. Se la nuova versione aggiunge colonne, compaiono da sole alla sincronizzazione successiva.

## Domande frequenti
**E senza campo?** Annoti normalmente. In alto si vede quante voci aspettano di essere inviate, e partono da sole quando torna il campo.

**E se due persone annotano insieme senza connessione?** Quando torna il campo, le voci di entrambe vengono unite. Se tutte e due modificano la stessa voce, resta l'ultima modifica.

**È sicuro?** Il foglio è privato e sta nel tuo account Google. Lo script risponde solo se riceve la chiave giusta. Chi ha il link di configurazione (o indirizzo e chiave) può leggere e scrivere nel diario e vedere gli eventi del calendario che passano il filtro, quindi condividilo solo con chi deve annotare.

**Dove sono i dati?** Sul telefono e, se attivi la sincronizzazione, nel tuo foglio Google. Se usi Búho senza sincronizzazione e cancelli i dati del browser o cambi telefono, si perdono. In quel caso esporta ogni tanto il CSV da *Impostazioni → Esporta CSV*.

**Costa qualcosa?** No. GitHub Pages, Google Sheets, Apps Script e Google Calendar sono gratuiti per questo uso.

## Usare una tua copia
Se preferisci avere una tua versione dell'app, fai un *fork* di questo repository e attiva *Settings → Pages → Deploy from a branch → main / (root)*. Sono file statici, senza compilazione né dipendenze: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` e `icons/`. Per aggiungere una lingua all'app, copia un blocco di `i18n.js`.

## Sul progetto
Sto per diventare papà e cercavo un'app per annotare poppate, sonno e pannolini che si adattasse a quello che ci serve a casa: che funzioni senza campo, che possiamo usarla in due da telefoni diversi e che i dati restino nostri. Ne ho provate diverse e nessuna andava bene, così ho deciso di farmene una su misura.

Non sono un programmatore. Búho l'ho fatta con l'aiuto di un'IA ([Claude](https://claude.ai)), quindi chiedo scusa in anticipo agli sviluppatori professionisti per essermi intrufolato nel loro campo. Se vedete qualcosa fatto male o che si può migliorare, aprite una [issue](../../issues). Ve ne sarò grato, e sicuramente imparerò qualcosa.

---

<p align="center"><sub>Licenza MIT · vedi <a href="LICENSE">LICENSE</a></sub></p>
