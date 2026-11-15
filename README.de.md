<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Baby-Tagebuch: Schlaf, Mahlzeiten und Windeln<br>
<b>Funktioniert offline</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<b>Deutsch</b> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · Version 0.5.2</p>

---

## Was Búho ist
Búho (spanisch für „Eule") ist eine App, mit der man den Tag des Babys mit einem Tipp festhält: wann es einschläft und aufwacht, die Mahlzeiten (Brust, Fläschchen oder Milchpumpe), die Windeln und Dinge wie Gewicht, Temperatur oder Medikamente. Sie ist dafür gemacht, um 3 Uhr nachts im Halbschlaf benutzt zu werden: große Tasten, dunkler Modus, eine Hand reicht.

Sie funktioniert ohne Empfang: Jeder Eintrag wird sofort auf dem Handy gespeichert. Wenn zwei Personen sie nutzen, jede auf ihrem Handy, kann man sie mit einer Google-Tabelle verbinden, und die Handys gleichen sich von selbst ab, sobald Empfang da ist. Sie läuft auf Android, iPhone und Computer, braucht keinen App-Store und ist kostenlos.

Die Daten gehören dir. Búho hat keine eigenen Server: Die Einträge liegen auf deinem Handy und, wenn du die Synchronisierung einschaltest, in einer Tabelle in deinem eigenen Google-Konto.

Die App gibt es auf Deutsch, Spanisch, Englisch, Französisch, Portugiesisch, Italienisch und Katalanisch. Sie folgt der Sprache des Handys; ändern kannst du sie unter *Einstellungen → Allgemein → Sprache*.

## Was du brauchst
- **Nur ein Handy:** nur das Handy. Zwei Minuten (Schritt 1).
- **Zwei oder mehr Handys:** ein Google-Konto (Gmail reicht) und einmalig etwa 15 Minuten an einem Computer (Schritt 2). Am Handy geht es auch, aber der Skript-Editor von Google ist auf kleinen Bildschirmen umständlich.
- **Termine und Medikamenten-Erinnerungen:** dasselbe wie in Schritt 2 und ein Google Kalender. Fünf Minuten mehr (Schritt 3).

Programmieren musst du nicht können. Du kopierst einen Text, fügst ihn ein und klickst ein paar Schaltflächen, und jede wird hier erklärt.

## Schritt 1. App auf dem Handy installieren
1. Öffne diese Adresse auf dem Handy: **https://outsidestructure787.github.io/buho/** Auf Android mit Chrome, auf dem iPhone mit Safari.
2. Leg sie auf den Startbildschirm:
   - **Android (Chrome):** Tippe oben rechts auf die drei Punkte (⋮) und wähle *App installieren* oder *Zum Startbildschirm hinzufügen*. Bestätigen.
   - **iPhone (Safari):** Tippe auf die Teilen-Taste (das Quadrat mit dem Pfeil nach oben, unten in der Mitte), scroll etwas nach unten und wähle *Zum Home-Bildschirm*. Tippe auf *Hinzufügen*.
3. Schließ den Browser und öffne Búho über das Symbol, das grüne Auge. Öffne sie ab jetzt immer dort: Dann läuft sie im Vollbild wie eine normale App und funktioniert ohne Empfang.
4. Tippe oben rechts auf das Zahnrad (Einstellungen) und füll *Babydaten* aus: Name, Geburtsdatum und Geschlecht. Unter *Allgemein* trägst du ein, wer dieses Handy benutzt (zum Beispiel „Mama" oder „Papa"). Tippe auf *Speichern*.

Fertig. Wenn nur eine Person die App nutzt, brauchst du nichts weiter.

## Schritt 2 (optional). Das Tagebuch zwischen Handys teilen
Búho speichert die Daten in einer Google-Tabelle, die du selbst anlegst. Jedes Handy schickt seine Einträge dorthin und holt sich, was die anderen eingetragen haben. Damit Tabelle und App sich verstehen, fügst du ein kleines Programm (ein „Skript") aus diesem Repository in die Tabelle ein. Das machst du nur einmal.

### 2.1. Tabelle anlegen
Öffne am Computer [sheets.new](https://sheets.new) mit deinem Google-Konto. Es öffnet sich eine leere Tabelle. Oben links steht *Unbenannte Tabelle*: Klick darauf und nenn sie zum Beispiel *Búho*.

Du musst nichts hineinschreiben. Das Tabellenblatt für die Einträge wird bei der ersten Synchronisierung automatisch angelegt.

### 2.2. Skript einfügen
1. Öffne in einem anderen Tab [das Skript als reinen Text](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Du siehst eine Seite voller Code. Markiere alles mit `Strg + A` (`Cmd + A` am Mac) und kopiere es mit `Strg + C` (`Cmd + C`).
2. Geh zurück zur Tabelle. Klick im Menü oben auf *Erweiterungen* und dann auf *Apps Script*. Der Skript-Editor von Google öffnet sich in einem neuen Tab.
3. Der Editor enthält eine Datei `Code.gs` mit ein paar Beispielzeilen (`function myFunction() { }`). Klick hinein, markiere alles (`Strg + A`) und lösche es, bis die Datei leer ist.
4. Füge den kopierten Code ein (`Strg + V`). Die erste Zeile beginnt mit `/**`, die letzte ist eine geschweifte Klammer: `}`.
5. Oben links steht *Unbenanntes Projekt*. Wenn du willst, nenn es *Búho*.
6. Speichere mit dem Diskettensymbol oder mit `Strg + S`.

Wenn im Menü *Erweiterungen* kein *Apps Script* erscheint, nutzt du wahrscheinlich ein Arbeits- oder Schulkonto, in dem es gesperrt ist. Nimm ein privates Gmail-Konto.

### 2.3. Schlüssel anlegen
Der Schlüssel ist ein Passwort, das nur eure Handys kennen. Ohne ihn kann niemand sonst die Tabelle lesen oder beschreiben. Er kommt in eine eigene Datei, damit er beim Aktualisieren des Skripts nicht verloren geht.

1. Klick in der linken Spalte des Editors neben *Dateien* auf **+** und wähle *Skript*. Gib `Config` ein und drück Enter.
2. Lösch den Inhalt der neuen Datei und füge den Inhalt von [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs) ein, das sind nur ein paar Zeilen.
3. Such die Zeile `const CLAVE = 'CAMBIA-ESTA-CLAVE';` und ersetze nur den Text `CAMBIA-ESTA-CLAVE` durch einen langen, selbst ausgedachten Schlüssel. Am einfachsten sind vier zufällige Wörter: `giraffe-montag-toast-wolke`. Anführungszeichen und Semikolon bleiben stehen.
4. Speichere (`Strg + S`). Links sollten jetzt zwei Dateien stehen: `Code.gs` und `Config.gs`.

Schreib dir den Schlüssel auf: Du brauchst ihn am Handy.

### 2.4. Skript veröffentlichen
Durch die Veröffentlichung bekommt das Skript eine Internetadresse, an die die Handys die Daten schicken.

1. Klick oben rechts auf die blaue Schaltfläche *Bereitstellen* und wähle *Neue Bereitstellung*.
2. Neben *Typ auswählen* ist ein Zahnrad. Klick darauf und wähle *Web-App*.
3. So ausfüllen:
   - *Beschreibung:* beliebig, zum Beispiel „Búho".
   - *Ausführen als:* **Ich** (deine E-Mail-Adresse erscheint).
   - *Zugriff:* **Jeder**. So können sich die Handys verbinden, ohne sich bei Google anzumelden. Der Schlüssel aus dem vorigen Schritt hält alle anderen draußen.
4. Klick auf *Bereitstellen*. Google fragt nach Berechtigungen:
   1. Klick auf *Zugriff autorisieren* und wähle dein Konto.
   2. Es erscheint ein Hinweis, dass Google die App nicht überprüft hat. Das ist normal: Du hast das Skript selbst eingefügt, und es ist nicht durch die Google-Prüfung gegangen. Klick auf *Erweitert* und dann auf *Búho öffnen (unsicher)*.
   3. Sieh dir die Berechtigungen an (Tabellen und Kalender ansehen und bearbeiten) und klick auf *Zulassen*. Das Skript läuft mit deinem Konto und tut nur, was Búho verlangt: Einträge in dieser Tabelle speichern und, wenn du es einschaltest, Kalendertermine lesen und anlegen.
5. Es erscheint die *URL der Web-App*, eine lange Adresse, die mit `https://script.google.com/macros/s/` beginnt und auf `/exec` endet. Klick auf *Kopieren* und heb sie auf. Dann auf *Fertig*.

Am einfachsten bringst du Adresse und Schlüssel aufs Handy, indem du sie dir selbst per E-Mail oder Chat schickst.

### 2.5. Das erste Handy verbinden
1. Tippe in Búho auf das Zahnrad und öffne *Allgemein*.
2. Unter *Synchronisierung mit Google Sheets* fügst du die Adresse ins erste Feld ein und schreibst den Schlüssel in *Zugangsschlüssel*.
3. Tippe auf *Speichern und Verbindung testen*. Wenn alles passt, erscheint „Verbindung erfolgreich", und oben neben dem Titel steht „Synchronisiert".

Schau am Computer in die Google-Tabelle: Dort gibt es ein neues Blatt mit dem, was du schon eingetragen hattest.

### 2.6. Die anderen Handys verbinden
Geh auf dem Handy, das schon funktioniert, zu *Einstellungen → Allgemein* und tippe auf *Einrichtung mit einem anderen Handy teilen*. Schick den Link per WhatsApp, Telegram oder E-Mail. Der Link enthält Adresse und Schlüssel, also teil ihn nur mit Leuten, die eintragen sollen.

- **Ist das andere Handy ein Android:** Búho installieren (Schritt 1) und dann den Link öffnen. Die App verbindet sich von selbst.
- **Ist das andere Handy ein iPhone:** Búho installieren (Schritt 1), den Link kopieren und in *Einstellungen → Allgemein* in das Feld *…oder hier einen Einrichtungslink einfügen* einfügen. Dann *Speichern und Verbindung testen*. Auf dem iPhone geht es nur so, weil die installierte App keine Daten mit Safari teilt.

Jede Person trägt ihren Namen unter *Wer benutzt dieses Handy?* ein. So sieht man im Tagebuch, wer was eingetragen hat.

### So sieht die Tabelle aus
Jeder Eintrag ist eine Zeile im Blatt `eventos`: Datum, Beginn und Ende, Dauer (bei Schlaf und Stillen), Art, Details, Notiz und wer ihn eingetragen hat. Du kannst filtern, sortieren oder Diagramme machen wie in jeder Tabelle. Die grauen Spalten am Ende benutzt die App: nicht von Hand ändern. Wenn du in der App etwas löschst, verschwindet die Zeile nicht, sondern wird in der Spalte *borrado* (gelöscht) markiert.

## Schritt 3 (optional). Kalendertermine und Medikamenten-Erinnerungen
Mit funktionierender Synchronisierung kann Búho die nächsten Termine (Kinderarzt, Hebamme, Impfungen) aus einem Google Kalender anzeigen, neue Termine eintragen und für die nächste Gabe eines Medikaments eine Erinnerung mit Alarm anlegen.

1. **Kalender auswählen.** Das kann dein Hauptkalender sein oder ein geteilter Kalender nur fürs Baby, was zu zweit am praktischsten ist. So legst du einen an: In [Google Kalender](https://calendar.google.com) links neben *Weitere Kalender* auf **+** → *Neuen Kalender erstellen* klicken. Teil ihn mit der anderen Person, wenn ihn beide sehen sollen.
2. **Kalender-ID kopieren** (beim Hauptkalender nicht nötig). In Google Kalender mit der Maus über den Kalender fahren, auf die drei Punkte → *Einstellungen und Freigabe* klicken und bis *Kalender integrieren* scrollen. Die *Kalender-ID* ist ein langer Text, der auf `@group.calendar.google.com` endet.
3. **In Búho einschalten:** *Einstellungen → Kalender*.
   - *Nächste Termine aus Google Kalender anzeigen* ankreuzen.
   - Unter *Kalender* `primary` stehen lassen (Hauptkalender) oder die ID einfügen.
   - *Nur Termine anzeigen, die enthalten* hält private Termine fern. Zum Beispiel: `Kinderarzt, Hebamme, Impfung, U-Untersuchung`. Leer lassen zeigt alle Termine.
   - *Speichern* tippen. Auf dem Hauptbildschirm erscheint die Karte *Nächste Termine*. Antippen zeigt die ganze Liste oder fügt einen Termin hinzu.
4. **Medikamenten-Erinnerungen:** Unter *Einstellungen → Medikamente* das Medikament hinzufügen (Name, Dosis, alle wie viele Stunden und, wenn du willst, für wie viele Tage), *Medikamente auf dem Hauptbildschirm anzeigen* einschalten und *Für die nächste Gabe eine Erinnerung in Google Kalender anlegen* ankreuzen. Jedes Mal, wenn du auf *Gegeben* tippst, entsteht im Kalender ein Termin „💊 Medikament" zur Zeit der nächsten Gabe, mit Alarm. Damit er klingelt, müssen für den Kalender in der Google-Kalender-App auf dem Handy Benachrichtigungen eingeschaltet sein.

Das Skript liest den Kalender mit dem Google-Konto, dem die Tabelle gehört. Wenn du den Kalender einer anderen Person nutzt, muss er mit diesem Konto geteilt sein. Wenn du die Synchronisierung vor Version 0.3.0 eingerichtet hast, aktualisiere zuerst das Skript (siehe unten). Wähl dann im Editor oben im Funktionsmenü `autorizar`, klick auf *Ausführen* und bestätige die Kalenderberechtigung. Zum Schluss eine neue Version veröffentlichen.

## Wenn etwas nicht klappt
- **„Der Schlüssel passt nicht zur Tabelle."** Der Schlüssel im Handy ist nicht genau der aus `Config.gs`. Groß- und Kleinschreibung zählen, ein Leerzeichen zu viel auch.
- **„Keine Verbindung."** Kein Empfang, oder die Adresse ist falsch kopiert. Sie muss auf `/exec` enden.
- **„Aktualisiere das Google-Skript, um den Kalender zu nutzen."** Die App fragt den Kalender ab, aber das veröffentlichte Skript ist eine alte Version. Siehe *Google-Skript aktualisieren* unten.
- **„Falta autorizar el calendario"** (Meldung des Skripts, auf Spanisch: Kalender nicht autorisiert). Im Skript-Editor im Funktionsmenü `autorizar` wählen, *Ausführen* klicken und bestätigen. Danach eine neue Version veröffentlichen.
- **„No encuentro el calendario"** (ebenfalls vom Skript: Kalender nicht gefunden). Die ID ist falsch kopiert, oder der Kalender ist nicht mit dem Konto geteilt, dem die Tabelle gehört.
- **Die App aktualisiert sich nicht.** Mit Internetverbindung öffnen und ein paar Sekunden warten: Sie lädt sich selbst neu. Sonst ganz schließen (aus den letzten Apps entfernen) und wieder öffnen. Oder unten in den Einstellungen neben der Versionsnummer auf *Nach Updates suchen* tippen.
- **Auf dem iPhone öffnet sich der Einrichtungslink in Safari statt in der App.** Das ist normal. Den Link kopieren und in der installierten App unter *Einstellungen → Allgemein* einfügen.

## Google-Skript aktualisieren
Die App aktualisiert sich selbst, das Skript in der Tabelle nicht. Nötig ist das nur, wenn eine neue Version es in der [Liste der Änderungen](../../commits/main) sagt oder die App dich darauf hinweist.

1. In der Tabelle: *Erweiterungen → Apps Script*.
2. `Code.gs` öffnen, den ganzen Inhalt löschen und den neuen [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs) einfügen. Speichern. `Config.gs` nicht anfassen: Dort steht dein Schlüssel.
3. *Bereitstellen → Bereitstellungen verwalten*. Auf den Stift klicken, unter *Version* *Neue Version* wählen und *Bereitstellen* klicken.

Die `/exec`-Adresse bleibt gleich, an den Handys ändert sich also nichts. Wenn die neue Version Spalten hinzufügt, erscheinen sie bei der nächsten Synchronisierung von selbst.

## Häufige Fragen
**Was passiert ohne Empfang?** Du trägst ganz normal ein. Oben steht, wie viele Einträge noch nicht gesendet sind, und sie gehen von selbst raus, sobald wieder Empfang da ist.

**Was, wenn zwei Personen gleichzeitig offline eintragen?** Sobald wieder Empfang da ist, werden die Einträge beider zusammengeführt. Bearbeiten beide denselben Eintrag, gilt die letzte Änderung.

**Ist das sicher?** Die Tabelle ist privat und liegt in deinem Google-Konto. Das Skript antwortet nur mit dem richtigen Schlüssel. Wer den Einrichtungslink (oder Adresse und Schlüssel) hat, kann das Tagebuch lesen und beschreiben und die Kalendertermine sehen, die den Filter passieren. Teil ihn also nur mit Leuten, die eintragen sollen.

**Wo werden die Daten gespeichert?** Auf dem Handy und, wenn du die Synchronisierung einschaltest, in deiner Google-Tabelle. Nutzt du Búho ohne Synchronisierung und löschst die Browserdaten oder wechselst das Handy, sind sie weg. Exportier dann ab und zu die CSV unter *Einstellungen → CSV exportieren*.

**Kostet das etwas?** Nein. GitHub Pages, Google Sheets, Apps Script und Google Kalender sind für diese Nutzung kostenlos.

## Eigene Kopie nutzen
Wenn du lieber deine eigene Version der App hast, forke dieses Repository und schalte *Settings → Pages → Deploy from a branch → main / (root)* ein. Es sind statische Dateien, ohne Build-Schritt und ohne Abhängigkeiten: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` und `icons/`. Für eine weitere App-Sprache kopierst du einen Block in `i18n.js`.

## Über das Projekt
Ich werde bald Vater und suchte eine App für Mahlzeiten, Schlaf und Windeln, die zu dem passt, was wir zu Hause brauchen: Sie muss ohne Empfang funktionieren, wir beide müssen sie von verschiedenen Handys aus nutzen können, und die Daten sollen uns gehören. Keine der Apps, die ich ausprobiert habe, konnte das, also habe ich mir eine eigene gebaut.

Ich bin kein Programmierer. Búho ist mit Hilfe einer KI ([Claude](https://claude.ai)) entstanden, deshalb entschuldige ich mich schon jetzt bei allen Profi-Entwicklern, dass ich in ihrem Revier wildere. Wenn ihr etwas seht, das falsch gemacht ist oder besser ginge, eröffnet bitte ein [Issue](../../issues). Ich bin dankbar dafür und lerne bestimmt etwas dazu.

---

<p align="center"><sub>MIT-Lizenz · siehe <a href="LICENSE">LICENSE</a></sub></p>
