# 💐 Fleurette

Website untuk merangkai buket bunga digital, menulis kartu ucapan, lalu mengirimkannya lewat link. Penerima membuka amplop dan melihat buketnya mekar satu per satu.

Gratis, tanpa akun, tanpa backend, dan tanpa database.

## Fitur

- **Pembuat buket:** pilih hingga 15 tangkai dari 8 bunga (mawar, peoni, tulip, daisy, bunga matahari, lavender, sakura, teratai).
- **Buket digambar dengan SVG:** kelopak berlapis, tangkai, kertas pembungkus, dan pita. Bunga baru jatuh masuk ke dalam buket.
- **Kustomisasi:** 4 pilihan daun, 6 warna pembungkus, dan 4 gaya kartu (elegan, vintage, tengah malam, botani).
- **Kartu ucapan:** nama penerima, nama pengirim, dan pesan hingga 200 karakter.
- **Berbagi lewat link:** salin link atau kirim langsung ke WhatsApp.
- **Layar amplop untuk penerima:** penerima membuka amplop, lalu bunga tersusun satu per satu disertai confetti.
- **5 tema latar:** Pink, Taman, Senja, Lavender, dan Malam. Particle yang jatuh ikut berganti sesuai tema.
- **Panduan bunga dan contoh buket:** arti tiap bunga dan empat contoh siap pakai (minta maaf, cepat sembuh, ulang tahun, terima kasih).
- **Responsif:** nyaman dipakai di HP dan desktop, mendukung mode gelap, dan menghormati pengaturan "kurangi gerakan".

## Struktur folder

```
fleurette/
├── index.html        Kerangka halaman
├── README.md
├── css/
│   └── style.css     Tema warna, animasi, gaya kartu, latar, tampilan HP
└── js/
    ├── data.js       Data bunga, pembungkus, daun, kartu, contoh, dan latar
    ├── state.js      State aplikasi dan fungsi bantu (membuat link, dll.)
    ├── effects.js    Navigasi yang bersembunyi, kelopak jatuh, confetti, tombol melayang
    ├── flower.js     Menggambar bunga dan buket dalam SVG
    ├── ui.js         Memperbarui tampilan dan membuat tombol serta kartu
    └── main.js       Titik masuk: mode pembuat atau mode penerima
```

## Cara menjalankan

1. Simpan semua file dengan struktur folder seperti di atas.
2. Buka `index.html` di browser.

Tidak perlu instalasi apa pun. Koneksi internet dibutuhkan karena Tailwind CSS dan font dimuat dari CDN.

> **Penting:** urutan `<script>` di `index.html` jangan diubah (`data`, `state`, `effects`, `flower`, `ui`, `main`). File yang di belakang memakai isi file yang di depan.

## Cara kerja link kiriman

Isi buket (bunga, pembungkus, daun, kartu, pesan, dan tema) disimpan langsung di dalam link, tepatnya di bagian setelah tanda `#`, dengan format base64. Karena itu tidak ada server yang menyimpan data apa pun. Saat link dibuka, `main.js` membaca bagian itu dan menampilkan buketnya dalam mode penerima.

Agar link bisa dibuka orang lain, situsnya harus di-hosting. Kalau `index.html` dibuka langsung dari komputer, link yang dihasilkan hanya berfungsi di komputer itu.

Beberapa pilihan hosting statis gratis: GitHub Pages, Netlify, dan Vercel.

## Mengubah isi dan tampilan

| Mau mengubah | Buka | Bagian |
|---|---|---|
| Jenis bunga, warna pembungkus, daun, contoh buket | `js/data.js` | `FL`, `WR`, `GR`, `EX` |
| Tema latar dan particle yang jatuh | `js/data.js` | `BG` (kolom `p:` untuk particle) |
| Jumlah, ukuran, dan kecepatan particle | `js/effects.js` | fungsi `petals()` |
| Bentuk dan warna kelopak bunga | `js/flower.js` | objek `HD` |
| Posisi bunga di dalam buket | `js/flower.js` | array `P` |
| Teks halaman | `index.html` | bagian terkait |
| Warna tema dan gaya kartu | `css/style.css` | "Tema warna", "Gaya kartu ucapan", "Pilihan latar halaman" |

## Teknologi

- HTML, CSS, dan JavaScript murni (tanpa framework dan tanpa proses build)
- [Tailwind CSS](https://tailwindcss.com/) lewat CDN
- SVG untuk gambar buket
- Font: Poppins dan Dancing Script (Google Fonts)

## Batasan

- Maksimal 15 tangkai per buket.
- Belum ada pembayaran, pengiriman bunga fisik, akun, atau riwayat buket.
- Panjang link bertambah seiring isi buket dan pesan, jadi pesan dibatasi 200 karakter.