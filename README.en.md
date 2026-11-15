<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Baby log: sleep, feeds and diapers<br>
<b>Works offline</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<b>English</b> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · version 0.5.1</p>

---

## What Búho is
Búho ("owl" in Spanish) is an app to log your baby's day with a single tap: when they fall asleep and wake up, feeds (breast, bottle or pump), diapers and things like weight, temperature or medicines. It is built to be used half-asleep at 3 a.m., with big buttons, dark mode and one hand.

It works without coverage: every entry is saved on the phone straight away. If two people want to use it, each on their own phone, you can connect it to a Google Sheet and both phones catch up by themselves whenever there is signal. It runs on Android, iPhone and computers, needs no app store and is free.

Your data stays yours. Búho has no servers of its own: entries live on your phone and, if you turn on sync, in a spreadsheet in your own Google account.

The app is available in English, Spanish, French, Portuguese, Italian, German and Catalan. It follows the phone language; you can change it in *Settings → General → Language*.

## What you need
- **One phone only:** just the phone. Two minutes (step 1).
- **Two or more phones:** a Google account (Gmail is fine) and a computer for about 15 minutes, once (step 2). You can do it on a phone too, but Google's script editor is awkward on a small screen.
- **Appointments and medication reminders:** the same as step 2 plus a Google Calendar. Five more minutes (step 3).

You don't need to know how to code. You copy and paste some text and press a few buttons, and each one is explained below.

## Step 1. Install the app on your phone
1. Open **https://outsidestructure787.github.io/buho/** on your phone. Use Chrome on Android and Safari on iPhone.
2. Add it to the home screen:
   - **Android (Chrome):** tap the three dots (⋮) at the top right and choose *Install app* or *Add to Home screen*. Confirm.
   - **iPhone (Safari):** tap the share button (the square with an arrow pointing up, at the bottom), scroll down a little and choose *Add to Home Screen*. Tap *Add*.
3. Close the browser and open Búho from its icon, the green eye. From now on, always open it from there: it runs full screen, like a normal app, and works without coverage.
4. Tap the gear at the top right (Settings) and fill in *Baby details*: name, date of birth and sex. Under *General*, write who uses this phone (for example "Mum" or "Dad"). Tap *Save*.

You're ready. If only one person will use it, you don't need anything else.

## Step 2 (optional). Share the log between phones
Búho stores the data in a Google Sheet that you create. Each phone sends what it logs to the sheet and picks up what the others logged. For the sheet and the app to understand each other, you paste a small program (a "script") from this repository into the sheet. You only do this once.

### 2.1. Create the sheet
On a computer, go to [sheets.new](https://sheets.new) with your Google account. A blank spreadsheet opens. At the top left it says *Untitled spreadsheet*: click it and name it, for example, *Búho*.

You don't need to type anything in it. The tab where entries are stored is created automatically the first time a phone syncs.

### 2.2. Paste the script
1. In another browser tab, open [the script as plain text](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). You'll see a page full of code. Select everything with `Ctrl + A` (`Cmd + A` on a Mac) and copy it with `Ctrl + C` (`Cmd + C`).
2. Go back to the sheet. In the top menu, click *Extensions* and then *Apps Script*. Google's script editor opens in a new tab.
3. The editor comes with a file called `Code.gs` containing a few sample lines (`function myFunction() { }`). Click inside it, select everything (`Ctrl + A`) and delete it until it's empty.
4. Paste the code you copied (`Ctrl + V`). The first line starts with `/**` and the last one is a closing brace: `}`.
5. At the top left it says *Untitled project*. You can rename it to *Búho* if you like.
6. Save with the floppy-disk icon or `Ctrl + S`.

If *Apps Script* is missing from the *Extensions* menu, you're probably using a work or school account that blocks it. Use a personal Gmail account.

### 2.3. Create your key
The key is a password that only your phones will know. Without it, nobody else can read or write the sheet. It goes in a separate file so it isn't lost when you update the script.

1. In the left column of the editor, next to *Files*, click **+** and choose *Script*. Type `Config` and press Enter.
2. Delete whatever the new file contains and paste the contents of [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), which is just a few lines.
3. Find the line `const CLAVE = 'CAMBIA-ESTA-CLAVE';` and replace only the text `CAMBIA-ESTA-CLAVE` with a long key you make up. The easiest way is four random words: `giraffe-monday-toast-cloud`. Keep the quotes and the semicolon.
4. Save (`Ctrl + S`). The left column should now show two files: `Code.gs` and `Config.gs`.

Write the key down somewhere: you'll need it on the phone.

### 2.4. Publish the script
Publishing gives the script a web address that the phones can send data to.

1. At the top right, click the blue *Deploy* button and choose *New deployment*.
2. Next to *Select type* there's a gear icon. Click it and choose *Web app*.
3. Fill it in like this:
   - *Description:* anything you like, for example "Búho".
   - *Execute as:* **Me** (your email appears).
   - *Who has access:* **Anyone**. This lets the phones connect without signing in to Google. The key from the previous step is what keeps everyone else out.
4. Click *Deploy*. Google will ask for permissions:
   1. Click *Authorize access* and choose your account.
   2. A screen says Google hasn't verified the app. That's expected: you pasted the script yourself and it hasn't gone through Google's review. Click *Advanced* and then *Go to Búho (unsafe)*.
   3. Check the permissions (see and edit your spreadsheets and your calendars) and click *Allow*. The script runs with your account and only does what Búho asks: store entries in this sheet and, if you turn it on, read and create calendar events.
5. The *Web app URL* appears: a long address that starts with `https://script.google.com/macros/s/` and ends in `/exec`. Click *Copy* and keep it. Then click *Done*.

To get the address and the key onto your phone, the easiest way is to email them to yourself or send them in a chat with yourself.

### 2.5. Connect the first phone
1. In Búho, tap the gear and open *General*.
2. Under *Sync with Google Sheets*, paste the address in the first field and type the key in *Access key*.
3. Tap *Save and test connection*. If everything is fine, you'll see "Connection OK", and next to the title at the top it says "Synced".

Go back to the Google Sheet on your computer: there'll be a new tab with whatever you had logged.

### 2.6. Connect the other phones
On the phone that already works, go to *Settings → General* and tap *Share setup with another phone*. Send the link to the other person by WhatsApp, Telegram or email. The link contains the address and the key, so only share it with people who will log entries.

- **If the other phone is Android:** install Búho (step 1), then open the link. The app connects by itself.
- **If the other phone is an iPhone:** install Búho (step 1), copy the link and paste it in *Settings → General*, in the field *…or paste a setup link here*. Then tap *Save and test connection*. On iPhone it has to be done this way because the installed app doesn't share data with Safari.

Each person should write their name in *Who uses this phone?*, so the log shows who wrote each entry.

### What the sheet looks like
Each entry is a row in the `eventos` tab: date, start and end time, duration (for sleep and breastfeeds), type, details, note and who logged it. You can filter it, sort it or make charts like with any spreadsheet. The grey columns at the end are used by the app: don't change them by hand. If you delete something in the app, the row doesn't disappear; it's marked in the *borrado* (deleted) column.

## Step 3 (optional). Calendar appointments and medication reminders
With sync working, Búho can show the upcoming appointments (paediatrician, midwife, vaccines) from a Google Calendar, add new appointments, and create reminders with an alarm for the next dose of a medicine.

1. **Choose the calendar.** It can be your main calendar or a shared one just for the baby, which is the most practical option for two people. To create one: in [Google Calendar](https://calendar.google.com), in the left column next to *Other calendars*, click **+** → *Create new calendar*. Share it with the other person if you both want to see it.
2. **Copy its ID** (not needed for your main calendar). In Google Calendar, hover over the calendar, click the three dots → *Settings and sharing* and scroll down to *Integrate calendar*. The *Calendar ID* is a long text ending in `@group.calendar.google.com`.
3. **Turn it on in Búho:** *Settings → Calendar*.
   - Tick *Show upcoming appointments from Google Calendar*.
   - In *Calendar*, leave `primary` for your main calendar, or paste the ID.
   - *Only show events containing* keeps your personal events out. For example: `paediatrician, midwife, vaccine, check-up`. Leave it empty to see every event.
   - Tap *Save*. An *Upcoming appointments* card appears on the main screen. Tap it to see the full list or add an appointment.
4. **Medication reminders:** in *Settings → Medication*, add the medicine (name, dose, every how many hours and, optionally, for how many days), tick *Show medication on the main screen* and *Create a Google Calendar reminder for the next dose*. Each time you tap *Given*, a "💊 medicine name" event with an alarm is created at the time of the next dose. For it to ring, the calendar must have notifications turned on in the Google Calendar app on your phone.

The script reads the calendar with the Google account that owns the sheet. If you use someone else's calendar, it must be shared with that account. If you set up sync before version 0.3.0, update the script first (see below), then in the editor choose the `autorizar` function in the drop-down at the top, click *Run* and accept the calendar permissions. Finally, publish a new version.

## If something doesn't work
- **"The key does not match the sheet."** The key on the phone isn't exactly the one in `Config.gs`. Upper and lower case matter, and so does an extra space.
- **"Could not connect."** There's no coverage, or the address is copied wrong. It must end in `/exec`.
- **"Update the Google script to use the calendar."** The app asks for the calendar but the published script is an old version. Follow *Updating the Google script* below.
- **"Falta autorizar el calendario"** (this message comes from the script, in Spanish: the calendar hasn't been authorised). In the script editor, choose `autorizar` in the function drop-down, click *Run* and accept. Then publish a new version.
- **"No encuentro el calendario"** (also from the script: calendar not found). The ID is copied wrong, or the calendar isn't shared with the account that owns the sheet.
- **The app doesn't update.** Open it with a connection and wait a few seconds: it reloads by itself. If not, close it completely (remove it from recent apps) and open it again. You can also tap *Check for updates* at the bottom of Settings, next to the version number.
- **On iPhone, the setup link opens in Safari instead of the app.** That's normal. Copy the link and paste it in *Settings → General* inside the installed app.

## Updating the Google script
The app updates itself, but the script in the sheet doesn't. You only need to do this when a new version says so in the [list of changes](../../commits/main) or when the app tells you.

1. In the sheet: *Extensions → Apps Script*.
2. Open `Code.gs`, delete all its contents and paste the new [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Save. Don't touch `Config.gs`: your key is there.
3. *Deploy → Manage deployments*. Click the pencil, choose *New version* under *Version* and click *Deploy*.

The `/exec` address stays the same, so nothing changes on the phones. If the new version adds columns to the sheet, they appear by themselves on the next sync.

## Frequently asked questions
**What happens without coverage?** You log as usual. The top of the screen shows how many entries are waiting, and they're sent automatically when the signal comes back.

**What if two people log at the same time offline?** When the signal returns, both sets of entries are merged. If both edit the same entry, the latest edit wins.

**Is it safe?** The sheet is private and lives in your Google account. The script only answers when it receives the right key. Anyone with the setup link (or the address and the key) can read and write the log, and see the calendar events that pass the filter, so only share it with people who should log entries.

**Where is the data stored?** On the phone and, if you turn on sync, in your Google Sheet. If you use Búho without sync and clear the browser data or change phones, it's lost. In that case, export the CSV from time to time in *Settings → Export CSV*.

**Does it cost anything?** No. GitHub Pages, Google Sheets, Apps Script and Google Calendar are free for this use.

## Use your own copy
If you'd rather have your own version of the app, fork this repository and turn on *Settings → Pages → Deploy from a branch → main / (root)*. They're plain static files, with no build step and no dependencies: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` and `icons/`. To add a language to the app, copy a block in `i18n.js`.

## About the project
I'm about to become a dad and I was looking for a baby log that fit what we need at home: it has to work without mobile coverage, we both need to use it from different phones, and the data has to stay ours. None of the apps I tried did that, so I decided to build my own.

I'm not a developer. I built Búho with the help of an AI ([Claude](https://claude.ai)), so apologies in advance to professional developers for stepping onto your turf. If you spot something done wrong or something that could be better, please open an [issue](../../issues). I'll be grateful, and I'll probably learn something.

---

<p align="center"><sub>MIT License · see <a href="LICENSE">LICENSE</a></sub></p>
