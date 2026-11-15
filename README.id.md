<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Catatan bayi: tidur, menyusui, dan popok<br>
<b>Bisa dipakai offline</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<b>Bahasa Indonesia</b> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · versi 0.5.2</p>

---

## Apa itu Búho
Búho ("burung hantu" dalam bahasa Spanyol) adalah aplikasi untuk mencatat keseharian bayi dengan sekali ketuk: kapan tidur dan bangun, menyusui (ASI langsung, botol, atau pompa ASI), popok, serta hal lain seperti berat badan, suhu, atau obat. Aplikasi ini dibuat untuk dipakai setengah mengantuk jam 3 pagi: tombol besar, mode gelap, cukup satu tangan.

Bisa dipakai tanpa sinyal: setiap catatan langsung tersimpan di ponsel. Kalau dua orang memakainya dari ponsel masing-masing, aplikasi bisa dihubungkan ke Google Spreadsheet, lalu kedua ponsel akan menyinkronkan diri sendiri setiap kali ada sinyal. Berjalan di Android, iPhone, dan komputer, tanpa toko aplikasi, dan gratis.

Datanya milikmu. Búho tidak punya server sendiri: catatan tersimpan di ponselmu dan, kalau sinkronisasi diaktifkan, di spreadsheet di akun Google milikmu sendiri.

> Tampilan aplikasi saat ini tersedia dalam bahasa Inggris, Spanyol, Prancis, Portugis, Italia, Jerman, dan Katalan, belum dalam bahasa Indonesia. Di ponsel berbahasa Indonesia aplikasi akan tampil dalam bahasa Inggris, jadi nama tombol aplikasi di bawah ditulis dalam bahasa Inggris.

## Yang kamu butuhkan
- **Hanya satu ponsel:** cukup ponselnya. Dua menit (langkah 1).
- **Dua ponsel atau lebih:** akun Google (Gmail bisa) dan komputer selama sekitar 15 menit, sekali saja (langkah 2). Bisa juga lewat ponsel, tetapi editor skrip Google kurang nyaman di layar kecil.
- **Jadwal kontrol dan pengingat obat:** sama seperti langkah 2, ditambah Google Kalender. Lima menit lagi (langkah 3).

Tidak perlu bisa memprogram. Cukup salin-tempel teks dan tekan beberapa tombol, semuanya dijelaskan di bawah.

## Langkah 1. Pasang aplikasi di ponsel
1. Buka alamat ini di ponsel: **https://outsidestructure787.github.io/buho/** Di Android pakai Chrome, di iPhone pakai Safari.
2. Tambahkan ke layar utama:
   - **Android (Chrome):** ketuk tiga titik (⋮) di kanan atas, pilih *Instal aplikasi* atau *Tambahkan ke layar utama*. Konfirmasi.
   - **iPhone (Safari):** ketuk tombol bagikan (kotak dengan panah ke atas, di bawah), gulir sedikit, pilih *Tambah ke Layar Utama*. Ketuk *Tambah*.
3. Tutup browser dan buka Búho dari ikonnya, mata hijau. Mulai sekarang selalu buka dari situ: aplikasi tampil layar penuh seperti aplikasi biasa dan bisa dipakai tanpa sinyal.
4. Ketuk roda gigi di kanan atas (*Settings*), isi *Baby details*: nama, tanggal lahir, dan jenis kelamin. Di *General*, tulis siapa yang memakai ponsel ini (misalnya "Ibu" atau "Ayah"). Ketuk *Save*.

Selesai. Kalau hanya satu orang yang memakai, tidak perlu apa-apa lagi.

## Langkah 2 (opsional). Berbagi catatan antarponsel
Búho menyimpan data di Google Spreadsheet yang kamu buat sendiri. Setiap ponsel mengirim catatannya ke sana dan mengambil catatan dari ponsel lain. Agar spreadsheet dan aplikasi saling mengerti, kamu menempelkan program kecil ("skrip") dari repositori ini ke spreadsheet. Cukup sekali.

### 2.1. Buat spreadsheet
Di komputer, buka [sheets.new](https://sheets.new) dengan akun Google-mu. Spreadsheet kosong akan terbuka. Di kiri atas tertulis *Spreadsheet tanpa judul*: klik dan beri nama, misalnya *Búho*.

Tidak perlu menulis apa pun di dalamnya. Tab untuk catatan akan dibuat otomatis saat sinkronisasi pertama.

### 2.2. Tempel skripnya
1. Di tab lain, buka [skrip dalam format teks](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Akan muncul halaman penuh kode. Pilih semua dengan `Ctrl + A` (`Cmd + A` di Mac) lalu salin dengan `Ctrl + C` (`Cmd + C`).
2. Kembali ke spreadsheet. Di menu atas, klik *Ekstensi* (Extensions) lalu *Apps Script*. Editor skrip Google terbuka di tab baru.
3. Editor berisi file bernama `Code.gs` (atau `Kode.gs`) dengan beberapa baris contoh (`function myFunction() { }`). Klik di dalamnya, pilih semua (`Ctrl + A`), lalu hapus sampai kosong.
4. Tempel kode yang sudah disalin (`Ctrl + V`). Baris pertama diawali `/**` dan baris terakhir berupa kurung kurawal tutup: `}`.
5. Di kiri atas tertulis *Project tanpa judul*. Kalau mau, ganti menjadi *Búho*.
6. Simpan dengan ikon disket atau `Ctrl + S`.

Kalau *Apps Script* tidak muncul di menu *Ekstensi*, kemungkinan kamu memakai akun kantor atau sekolah yang memblokirnya. Pakai akun Gmail pribadi.

### 2.3. Buat kunci
Kunci adalah kata sandi yang hanya diketahui ponsel-ponsel kalian. Tanpa kunci, orang lain tidak bisa membaca atau menulis di spreadsheet. Kunci disimpan di file terpisah supaya tidak hilang saat skrip diperbarui.

1. Di kolom kiri editor, di samping *File*, klik **+** dan pilih *Skrip*. Ketik `Config` lalu tekan Enter.
2. Hapus isi file baru itu dan tempel isi [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), yang hanya beberapa baris.
3. Cari baris `const CLAVE = 'CAMBIA-ESTA-CLAVE';` dan ganti hanya teks `CAMBIA-ESTA-CLAVE` dengan kunci panjang buatanmu. Cara termudah: gabungkan empat kata acak, misalnya `jerapah-senin-roti-awan`. Jangan hapus tanda kutip dan titik komanya.
4. Simpan (`Ctrl + S`). Di kolom kiri harus terlihat dua file: `Code.gs` dan `Config.gs`.

Catat kuncinya di suatu tempat: kamu akan memerlukannya di ponsel.

### 2.4. Terbitkan skrip
Dengan menerbitkan skrip, skrip mendapat alamat internet tempat ponsel mengirim data.

1. Di kanan atas, klik tombol biru *Terapkan* (Deploy) lalu pilih *Deployment baru*.
2. Di samping *Pilih jenis* ada ikon roda gigi. Klik dan pilih *Aplikasi web*.
3. Isi seperti ini:
   - *Deskripsi:* bebas, misalnya "Búho".
   - *Jalankan sebagai:* **Saya** (email-mu akan muncul).
   - *Yang memiliki akses:* **Siapa saja** (Anyone). Ini memungkinkan ponsel terhubung tanpa masuk ke Google. Kunci dari langkah sebelumnya yang mencegah orang lain masuk.
4. Klik *Terapkan*. Google akan meminta izin:
   1. Klik *Izinkan akses* (Authorize access) lalu pilih akunmu.
   2. Akan muncul layar bahwa Google belum memverifikasi aplikasi ini. Itu normal: skripnya kamu tempel sendiri dan belum melewati peninjauan Google. Klik *Lanjutan* lalu *Buka Búho (tidak aman)*.
   3. Periksa izinnya (melihat dan mengedit spreadsheet dan kalendermu) lalu klik *Izinkan*. Skrip berjalan dengan akunmu dan hanya melakukan yang diminta Búho: menyimpan catatan di spreadsheet ini dan, kalau kamu aktifkan, membaca serta membuat acara kalender.
5. Muncul *URL aplikasi web*, alamat panjang yang diawali `https://script.google.com/macros/s/` dan diakhiri `/exec`. Klik *Salin* dan simpan. Lalu klik *Selesai*.

Cara termudah memindahkan alamat dan kunci ke ponsel adalah mengirimkannya ke diri sendiri lewat email atau chat.

### 2.5. Hubungkan ponsel pertama
1. Di Búho, ketuk roda gigi dan buka *General*.
2. Di *Sync with Google Sheets*, tempel alamat di kolom pertama dan ketik kunci di *Access key*.
3. Ketuk *Save and test connection*. Kalau berhasil, muncul "Connection OK" dan di samping judul tertulis "Synced".

Kembali ke Google Spreadsheet di komputer: akan ada tab baru berisi catatan yang sudah kamu buat.

### 2.6. Hubungkan ponsel lain
Di ponsel yang sudah terhubung, buka *Settings → General* lalu ketuk *Share setup with another phone*. Kirim tautannya ke orang lain lewat WhatsApp, Telegram, atau email. Tautan itu berisi alamat dan kunci, jadi bagikan hanya ke orang yang akan mencatat.

- **Kalau ponsel lainnya Android:** pasang Búho (langkah 1), lalu buka tautannya. Aplikasi akan terhubung sendiri.
- **Kalau ponsel lainnya iPhone:** pasang Búho (langkah 1), salin tautannya, lalu tempel di *Settings → General* pada kolom *…or paste a setup link here*. Kemudian ketuk *Save and test connection*. Di iPhone harus begini karena aplikasi yang terpasang tidak berbagi data dengan Safari.

Setiap orang sebaiknya menulis namanya di *Who uses this phone?*, supaya di catatan terlihat siapa yang menulis apa.

### Tampilan spreadsheet
Setiap catatan menjadi satu baris di tab `eventos`: tanggal, jam mulai dan selesai, durasi (untuk tidur dan menyusui langsung), jenis, detail, catatan, dan siapa yang mencatat. Kamu bisa memfilter, mengurutkan, atau membuat grafik seperti spreadsheet biasa. Kolom abu-abu di ujung dipakai aplikasi: jangan diubah manual. Kalau kamu menghapus sesuatu di aplikasi, barisnya tidak hilang, tetapi ditandai di kolom *borrado* (dihapus).

## Langkah 3 (opsional). Jadwal kalender dan pengingat obat
Setelah sinkronisasi berjalan, Búho bisa menampilkan jadwal mendatang (dokter anak, bidan, imunisasi) dari Google Kalender, menambah jadwal baru, dan membuat pengingat dengan alarm untuk dosis obat berikutnya.

1. **Pilih kalendernya.** Bisa kalender utamamu atau kalender bersama khusus bayi, yang paling praktis kalau kalian berdua. Cara membuatnya: di [Google Kalender](https://calendar.google.com), di kolom kiri di samping *Kalender lain*, klik **+** → *Buat kalender baru*. Bagikan ke orang lain kalau kalian berdua ingin melihatnya.
2. **Salin ID-nya** (tidak perlu untuk kalender utama). Di Google Kalender, arahkan kursor ke kalender itu, klik tiga titik → *Setelan dan berbagi*, lalu gulir ke *Integrasikan kalender*. *ID Kalender* adalah teks panjang yang diakhiri `@group.calendar.google.com`.
3. **Aktifkan di Búho:** *Settings → Calendar*.
   - Centang *Show upcoming appointments from Google Calendar*.
   - Di *Calendar*, biarkan `primary` untuk kalender utama, atau tempel ID-nya.
   - *Only show events containing* berguna agar acara pribadimu tidak ikut tampil. Contoh: `dokter anak, bidan, imunisasi, posyandu`. Kosong = semua acara.
   - Ketuk *Save*. Di layar utama muncul kartu *Upcoming appointments*. Ketuk untuk melihat daftar lengkap atau menambah jadwal.
4. **Pengingat obat:** di *Settings → Medication*, tambahkan obat (nama, dosis, setiap berapa jam, dan kalau mau, selama berapa hari), aktifkan *Show medication on the main screen*, lalu centang *Create a Google Calendar reminder for the next dose*. Setiap kali kamu mengetuk *Given*, acara "💊 nama obat" dengan alarm dibuat di kalender pada jam dosis berikutnya. Agar berbunyi, notifikasi kalender itu harus aktif di aplikasi Google Kalender di ponsel.

Skrip membaca kalender dengan akun Google pemilik spreadsheet. Kalau kamu memakai kalender milik orang lain, kalender itu harus dibagikan ke akun tersebut. Kalau kamu menyiapkan sinkronisasi sebelum versi 0.3.0, perbarui skripnya dulu (lihat di bawah), lalu di editor pilih fungsi `autorizar` di menu atas, klik *Jalankan*, dan setujui izin kalender. Terakhir, terbitkan versi baru.

## Kalau ada yang tidak berjalan
- **"The key does not match the sheet."** Kunci di ponsel tidak persis sama dengan yang ada di `Config.gs`. Huruf besar-kecil dan spasi berlebih juga berpengaruh.
- **"Could not connect."** Tidak ada sinyal, atau alamatnya salah salin. Alamat harus diakhiri `/exec`.
- **"Update the Google script to use the calendar."** Aplikasi meminta kalender, tetapi skrip yang diterbitkan masih versi lama. Ikuti *Memperbarui skrip Google* di bawah.
- **"Falta autorizar el calendario"** (pesan dari skrip dalam bahasa Spanyol: kalender belum diizinkan). Di editor skrip, pilih `autorizar` di menu fungsi, klik *Jalankan*, lalu setujui. Setelah itu terbitkan versi baru.
- **"No encuentro el calendario"** (juga dari skrip: kalender tidak ditemukan). ID salah salin, atau kalender belum dibagikan ke akun pemilik spreadsheet.
- **Aplikasi tidak diperbarui.** Buka dengan koneksi internet dan tunggu beberapa detik: aplikasi memuat ulang sendiri. Kalau tidak, tutup sepenuhnya (hapus dari aplikasi terbaru) lalu buka lagi. Bisa juga ketuk *Check for updates* di bagian bawah Settings, di samping nomor versi.
- **Di iPhone, tautan pengaturan terbuka di Safari, bukan di aplikasi.** Itu normal. Salin tautannya dan tempel di *Settings → General* di dalam aplikasi yang terpasang.

## Memperbarui skrip Google
Aplikasinya memperbarui diri sendiri, tetapi skrip di spreadsheet tidak. Ini hanya perlu dilakukan kalau versi baru menyebutkannya di [daftar perubahan](../../commits/main) atau kalau aplikasi memberi tahu.

1. Di spreadsheet: *Ekstensi → Apps Script*.
2. Buka `Code.gs`, hapus semua isinya, lalu tempel [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs) yang baru. Simpan. Jangan sentuh `Config.gs`: kuncimu ada di situ.
3. *Terapkan → Kelola deployment*. Klik ikon pensil, di *Versi* pilih *Versi baru*, lalu klik *Terapkan*.

Alamat `/exec` tetap sama, jadi tidak ada yang perlu diubah di ponsel. Kalau versi baru menambah kolom, kolom itu akan muncul sendiri pada sinkronisasi berikutnya.

## Pertanyaan umum
**Bagaimana kalau tidak ada sinyal?** Mencatat seperti biasa. Di bagian atas terlihat berapa catatan yang belum terkirim, dan semuanya terkirim otomatis saat sinyal kembali.

**Bagaimana kalau dua orang mencatat bersamaan saat offline?** Saat sinyal kembali, catatan keduanya digabung. Kalau keduanya mengedit catatan yang sama, yang dipakai adalah editan terakhir.

**Apakah aman?** Spreadsheet bersifat pribadi dan ada di akun Google-mu. Skrip hanya merespons jika menerima kunci yang benar. Siapa pun yang punya tautan pengaturan (atau alamat dan kunci) bisa membaca dan menulis catatan serta melihat acara kalender yang lolos filter, jadi bagikan hanya ke orang yang perlu mencatat.

**Di mana data disimpan?** Di ponsel dan, kalau sinkronisasi aktif, di Google Spreadsheet-mu. Kalau kamu memakai Búho tanpa sinkronisasi lalu menghapus data browser atau ganti ponsel, datanya hilang. Dalam hal itu, ekspor CSV sesekali dari *Settings → Export CSV*.

**Apakah berbayar?** Tidak. GitHub Pages, Google Spreadsheet, Apps Script, dan Google Kalender gratis untuk pemakaian seperti ini.

## Memakai salinan sendiri
Kalau kamu ingin punya versi aplikasi sendiri, fork repositori ini dan aktifkan *Settings → Pages → Deploy from a branch → main / (root)*. Semuanya file statis, tanpa proses build dan tanpa dependensi: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest`, dan `icons/`. Untuk menambahkan bahasa Indonesia ke aplikasi, salin satu blok di `i18n.js` dan terjemahkan. Pull request sangat diterima.

## Tentang proyek ini
Sebentar lagi saya akan menjadi ayah, dan saya mencari aplikasi untuk mencatat menyusui, tidur, dan popok yang sesuai dengan kebutuhan kami di rumah: bisa dipakai tanpa sinyal, bisa kami pakai berdua dari ponsel yang berbeda, dan datanya tetap milik kami. Saya mencoba beberapa, tetapi tidak ada yang cocok, jadi saya memutuskan membuat sendiri.

Saya bukan programmer. Búho saya buat dengan bantuan AI ([Claude](https://claude.ai)), jadi saya mohon maaf lebih dulu kepada para pengembang profesional karena sudah masuk ke wilayah kalian. Kalau kalian melihat sesuatu yang keliru atau bisa diperbaiki, silakan buka [issue](../../issues). Saya akan sangat berterima kasih, dan pasti akan belajar sesuatu.

---

<p align="center"><sub>Lisensi MIT · lihat <a href="LICENSE">LICENSE</a></sub></p>
