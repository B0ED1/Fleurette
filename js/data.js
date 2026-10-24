// Data statis: bunga, pembungkus, daun, gaya kartu, contoh, dan latar.

const FL = [
    { id: 'r', e: '🌹', n: 'Mawar', m: 'Cinta dan kasih sayang yang jelas.', f: 'Pasangan, anniversary' },
    { id: 'p', e: '🌺', n: 'Peoni', m: 'Kehangatan dan perayaan yang penuh.', f: 'Ulang tahun, syukuran' },
    { id: 't', e: '🌷', n: 'Tulip', m: 'Persahabatan dan awal yang baru.', f: 'Sahabat, wisuda' },
    { id: 'd', e: '🌼', n: 'Daisy', m: 'Ceria, tulus, dan sederhana.', f: 'Teman, minta maaf' },
    { id: 's', e: '🌻', n: 'Bunga Matahari', m: 'Semangat dan kesetiaan.', f: 'Penyemangat, terima kasih' },
    { id: 'h', e: '🪻', n: 'Lavender', m: 'Tenang dan menenangkan.', f: 'Cepat sembuh, dukungan' },
    { id: 'c', e: '🌸', n: 'Sakura', m: 'Keindahan singkat yang berharga.', f: 'Perpisahan, kenangan' },
    { id: 'l', e: '🌸', n: 'Lili', m: 'Kemurnian, rasa hormat, dan ketulusan.', f: 'Pernikahan, syukuran, ucapan duka' },
    { id: 'k', e: '🌼', n: 'Krisan', m: 'Kebahagiaan dan umur panjang.', f: 'Syukuran, ulang tahun, penyemangat' },
    { id: 'g', e: '🌼', n: 'Gerbera', m: 'Keceriaan dan semangat yang menular.', f: 'Ulang tahun, hadiah ceria' },
    { id: 'o', e: '🟡', n: 'Lolipop', m: 'Ceria dan penuh semangat, bentuk uniknya menarik perhatian.', f: 'Hadiah ceria, ulang tahun' }
];

const WR = [{ id: 'p', n: 'Pink', c: '#f9a8c4', a: '#fbc3d6', b: '#f48fb1' }, { id: 'k', n: 'Krem', c: '#f3e3c3', a: '#faf0d9', b: '#e6cfa1' }, { id: 'g', n: 'Hijau', c: '#a7d7b5', a: '#c4e8cf', b: '#7fc096' }, { id: 'u', n: 'Ungu', c: '#c9b6ee', a: '#dccff5', b: '#a78bdc' }, { id: 'o', n: 'Senja', c: 'linear-gradient(135deg,#fdba74,#f472b6)', a: '#fdba74', b: '#f472b6' }, { id: 'b', n: 'Langit', c: 'linear-gradient(135deg,#93c5fd,#c4b5fd)', a: '#93c5fd', b: '#c4b5fd' }];

const GR = [{ id: 'n', n: 'Tanpa', e: '' }, { id: 'a', n: 'Daun', e: '🌿' }, { id: 'b', n: 'Rumput', e: '🌾' }, { id: 'c', n: 'Baby breath', e: '❄️' }];

const CS = [{ id: 'e', n: 'Elegan' }, { id: 'v', n: 'Vintage' }, { id: 'm', n: 'Tengah Malam' }, { id: 'b', n: 'Botani' }];

const EX = [
    { t: 'Minta maaf', w: 'k', c: 'b', g: 'a', i: { d: 3, t: 2, h: 1 }, m: 'Maaf ya. Aku mau memperbaikinya, pelan-pelan.' },
    { t: 'Cepat sembuh', w: 'b', c: 'e', g: 'a', i: { l: 2, h: 3, d: 2 }, m: 'Istirahat yang cukup ya. Aku ada kalau kamu butuh apa pun.' },
    { t: 'Ulang tahun', w: 'o', c: 'v', g: 'c', i: { p: 3, s: 2, t: 3 }, m: 'Selamat ulang tahun! Semoga harimu penuh bahagia.' },
    { t: 'Terima kasih', w: 'g', c: 'm', g: 'b', i: { s: 3, r: 1, c: 2 }, m: 'Terima kasih untuk semua kebaikanmu.' }
];

// p = particle yang jatuh untuk tiap tema latar
const BG = [
    { id: 'pink', n: 'Pink', c: '#f9a8d4', p: ['🌸', '🌺', '🌷', '✨'] },
    { id: 'taman', n: 'Taman', c: '#86efac', p: ['🍃', '🌿', '🦋', '🌼'] },
    { id: 'senja', n: 'Senja', c: '#fdba74', p: ['🍂', '🧡', '✨', '☀️'] },
    { id: 'lavender', n: 'Lavender', c: '#c4b5fd', p: ['💜', '🦋', '✨', '🪻'] },
    { id: 'malam', n: 'Malam', c: '#1e1b4b', p: ['⭐', '✨', '🌙', '💫'] }
];

// Foto ikon di images/icons/.
// n = daftar nama file yang dicoba berurutan (tanpa ekstensi). Kodenya otomatis mencoba huruf besar/kecil
//     dan ekstensi .jpg, .png, .jpeg, .webp, jadi nama file boleh diganti selama salah satunya ada di sini.
// w, h = ukuran foto asli (piksel). cx, cy = titik tengah bunga. s = setengah lebar bagian yang dipotong.
const FOTO = {
    r: { n: ['Rose', 'Mawar'], w: 736, h: 1118, cx: 390, cy: 590, s: 285 },
    p: { n: ['Peony', 'Peoni'], w: 735, h: 1105, cx: 435, cy: 670, s: 300 },
    t: { n: ['Tulip'], w: 735, h: 919, cx: 350, cy: 322, s: 225 },
    d: { n: ['Daisy'], w: 736, h: 1104, cx: 365, cy: 505, s: 255 },
    s: { n: ['Sunflower'], w: 736, h: 1104, cx: 370, cy: 465, s: 310 },
    h: { n: ['Lavender'], w: 667, h: 1000, cx: 290, cy: 420, s: 260 },
    c: { n: ['sakura'], w: 736, h: 736, cx: 415, cy: 420, s: 300 },
    l: { n: ['Lily', 'Lili'], w: 735, h: 1105, cx: 370, cy: 560, s: 340 },
    k: { n: ['Krisan'], w: 736, h: 1472, cx: 330, cy: 990, s: 290 },
    g: { n: ['Gerbera'], w: 736, h: 885, cx: 425, cy: 520, s: 180 },
    o: { n: ['Lollipop', 'Lolipop'], w: 736, h: 1104, cx: 212, cy: 510, s: 180 }
};