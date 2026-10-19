const FL = [
    { id: 'r', e: '🌹', n: 'Mawar', m: 'Cinta dan kasih sayang yang jelas.', f: 'Pasangan, anniversary' },
    { id: 'p', e: '🌺', n: 'Peoni', m: 'Kehangatan dan perayaan yang penuh.', f: 'Ulang tahun, syukuran' },
    { id: 't', e: '🌷', n: 'Tulip', m: 'Persahabatan dan awal yang baru.', f: 'Sahabat, wisuda' },
    { id: 'd', e: '🌼', n: 'Daisy', m: 'Ceria, tulus, dan sederhana.', f: 'Teman, minta maaf' },
    { id: 's', e: '🌻', n: 'Bunga Matahari', m: 'Semangat dan kesetiaan.', f: 'Penyemangat, terima kasih' },
    { id: 'h', e: '🪻', n: 'Lavender', m: 'Tenang dan menenangkan.', f: 'Cepat sembuh, dukungan' },
    { id: 'c', e: '🌸', n: 'Sakura', m: 'Keindahan singkat yang berharga.', f: 'Perpisahan, kenangan' },
    { id: 'l', e: '🪷', n: 'Teratai', m: 'Ketulusan dan ketenangan batin.', f: 'Doa, pemulihan' }
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