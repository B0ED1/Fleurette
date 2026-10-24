// Menggambar bunga dan buket dalam SVG.

const P = [[160, 108], [112, 128], [208, 128], [160, 162], [78, 162], [242, 162], [120, 190], [200, 190], [84, 206], [236, 206], [160, 206], [52, 196], [268, 196], [134, 222], [186, 222]];

let uid = 0;

const HD = {
    r: { L: [[5, 40, 25, 0, 360, '#5a0812', '#c9202f'], [5, 31, 20, 36, 360, '#6e0a16', '#d62a38'], [4, 20, 14, 10, 360, '#82101e', '#e53c48']], c: ['#5a0812', 6], sw: 1 },
    p: { L: [[8, 42, 21, 0, 360, '#ef9a98', '#fde5e0'], [7, 33, 19, 20, 360, '#ec8f90', '#fbd6d2'], [6, 23, 15, 8, 360, '#e07a88', '#f7bcbf'], [5, 14, 10, 0, 360, '#c94a68', '#ee9aac']], c: ['#b53a5c', 4] },
    t: { L: [[5, 42, 15, 0, 64, '#dc6f89', '#fbd2d8'], [3, 34, 16, 0, 30, '#d45f7b', '#f5bcc6']] },
    d: { L: [[16, 38, 6, 0, 360, '#dfe6ee', '#ffffff']], c: ['#f5b800', 10] },
    s: { L: [[20, 44, 8, 0, 360, '#e8a800', '#ffd91a'], [20, 36, 7, 9, 360, '#efb30a', '#ffe03d']], c: ['#7a3d12', 15], c2: ['#2b2a15', .5] },
    c: { L: [[5, 36, 19, 0, 360, '#f08aae', '#fde0ea']], c: ['#d81b60', 4], ra: 1 },
    l: { L: [[6, 46, 13, 0, 360, '#e5557a', '#ffd9e1', 1], [6, 40, 12, 30, 360, '#ec6d8c', '#ffe3e8', 1]], c: ['#9bb23a', 4], st: 1 },
    k: { L: [[26, 36, 8, 0, 360, '#e6e2cc', '#ffffff'], [24, 29, 8, 7, 360, '#ece6c8', '#fffef4'], [18, 19, 6, 5, 360, '#dfdca0', '#f7f4d2']], c: ['#d3d58a', 3] },
    g: { L: [[14, 44, 10, 0, 360, '#e8530e', '#ff9b45'], [14, 38, 9, 13, 360, '#f06a1c', '#ffa958']], c: ['#3b1c14', 9], ring: ['#a8431a', 14] }
};

// Titik-titik kecil berpola spiral (biji bunga matahari, putik gerbera, bola lolipop)
function spiral(n, radius, ukuran, warna) {
    let o = '';
    for (let j = 1; j < n; j++) {
        const r = radius * Math.sqrt(j / n), a = j * 2.39996;
        o += `<circle cx='${(r * Math.cos(a)).toFixed(1)}' cy='${(r * Math.sin(a)).toFixed(1)}' r='${ukuran}' fill='${warna[j % warna.length]}'/>`;
    }
    return o;
}

function head(id) {
    const k = uid++;
    // Lolipop: bunga tegak kuning dengan daun pelindung bertumpuk dan bunga putih kecil
    if (id === 'o') {
        let o = `<linearGradient id='q${k}' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffd23f'/><stop offset='1' stop-color='#f08c00'/></linearGradient>`;
        [7, 9, 11, 13, 15, 16, 17].forEach((w, j) => {
            const y = -36 + j * 10;
            o += `<path d='M${-w} ${y + 9}C${-w - 3} ${y - 2} ${-w + 3} ${y - 9} 0 ${y - 11}C${w - 3} ${y - 9} ${w + 3} ${y - 2} ${w} ${y + 9}C${w / 2} ${y + 13} ${-w / 2} ${y + 13} ${-w} ${y + 9}Z' fill='url(#q${k})' stroke='#c97a00' stroke-width='.8'/>`;
        });
        return o + `<ellipse cx='-15' cy='-10' rx='7' ry='3' fill='#fff' transform='rotate(-30 -15 -10)'/><ellipse cx='14' cy='-22' rx='6' ry='2.6' fill='#fff' transform='rotate(25 14 -22)'/><ellipse cx='-11' cy='6' rx='6' ry='2.6' fill='#fff' transform='rotate(-20 -11 6)'/><ellipse cx='-6' cy='-4' rx='3' ry='14' fill='#fff' opacity='.2'/>`;
    }
    if (id === 'h') {
        let o = '';
        for (let j = 0; j < 12; j++) {
            const x = j % 2 ? 5 : -5, y = 24 - j * 5.8, g = j % 3 ? '#8a5fc9' : '#5b2d91';
            o += `<ellipse cx='${x}' cy='${y}' rx='6' ry='4.2' fill='${g}' transform='rotate(${j % 2 ? 25 : -25} ${x} ${y})'/>`
                + `<ellipse cx='${x - 1.5}' cy='${y - 1.2}' rx='2.4' ry='1.2' fill='#fff' opacity='.28' transform='rotate(${j % 2 ? 25 : -25} ${x} ${y})'/>`;
        }
        return o;
    }
    const h = HD[id];
    let o = '';
    const besar = Math.max(...h.L.map(a => a[1]));
    h.L.forEach((a, i) => {
        const [n, l, w, of, sp, c0, c1, pt] = a;
        o += `<radialGradient id='q${k}_${i}' cx='.5' cy='.7' r='.8'><stop offset='0' stop-color='${c0}'/><stop offset='1' stop-color='${c1}'/></radialGradient>`;
        const d = pt ? `M0 0C${-w} ${-l * .4} ${-w * .5} ${-l * .8} 0 ${-l}C${w * .5} ${-l * .8} ${w} ${-l * .4} 0 0Z` : `M0 0C${-w} ${-l * .3} ${-w * .8} ${-l} 0 ${-l}C${w * .8} ${-l} ${w} ${-l * .3} 0 0Z`;
        for (let j = 0; j < n; j++) {
            // sudut dan ukuran sedikit dibuat tidak seragam supaya terlihat alami
            const dasar = sp < 360 ? (n > 1 ? -sp / 2 + j * sp / (n - 1) : 0) : of + j * 360 / n;
            const ang = dasar + (((j * 13 + i * 5) % 7) - 3) * 1.2;
            const sc = 1 + (((j * 7 + i * 3) % 5) - 2) * 0.03;
            o += `<g transform='rotate(${ang}) scale(${sc})'><path d='${d}' fill='url(#q${k}_${i})' stroke='rgba(0,0,0,.18)' stroke-width='.6'/>`
                + (w >= 9 ? `<path d='M0 -3L0 ${-l * .78}' stroke='rgba(0,0,0,.13)' stroke-width='.9' fill='none'/>` : '')
                + `</g>`;
        }
    });
    // bayangan lembut di dasar kelopak
    if (h.L[0][4] === 360)
        o += `<radialGradient id='sh${k}'><stop offset='0' stop-color='#000' stop-opacity='.3'/><stop offset='1' stop-color='#000' stop-opacity='0'/></radialGradient><circle r='${besar * .42}' fill='url(#sh${k})'/>`;
    if (h.ra) {
        for (let j = 0; j < 16; j++) {
            const p = 11 + (j % 3) * 2;
            o += `<g transform='rotate(${j * 22.5})'><line y1='-3' y2='${-p}' stroke='#d81b60' stroke-width='.9'/><circle cy='${-p - 1}' r='1.1' fill='#e8b923'/></g>`;
        }
    }
    if (h.sw)
        o += `<path d='M-7 3C-8 -9 7 -10 7 0C7 7 -3 8 -4 1C-4 -3 2 -4 2 0' stroke='rgba(0,0,0,.35)' fill='none' stroke-width='1.3' stroke-linecap='round'/>`;
    if (h.st) {
        for (let j = 0; j < 6; j++) {
            o += `<g transform='rotate(${j * 60 + 15})'><line y2='-17' stroke='#c9a227' stroke-width='1.6'/><ellipse cy='-19' rx='2.4' ry='3.8' fill='#8a4b12'/></g>`;
            for (let m = 0; m < 3; m++) {
                o += `<circle cx='${(m % 2 ? 2.6 : -2.6) + (j * 60 % 7) * 0}' cy='${-(10 + m * 7)}' r='.95' fill='#a23a5f' opacity='.7' transform='rotate(${j * 60})'/>`;
            }
        }
    }
    if (h.ring)
        o += `<circle r='${h.ring[1]}' fill='${h.ring[0]}'/>` + spiral(30, h.ring[1] * .85, .9, ['rgba(0,0,0,.25)', 'rgba(255,255,255,.12)']);
    if (h.c) {
        const R = h.c[1];
        o += `<circle r='${R}' fill='${h.c[0]}'/>`;
        if (h.c2)
            o += `<circle r='${R * h.c2[1]}' fill='${h.c2[0]}'/>`;
        if (R >= 9)
            o += spiral(46, R * .88, .95, ['rgba(255,255,255,.22)', 'rgba(0,0,0,.35)', 'rgba(255,255,255,.1)']);
        o += `<ellipse cx='${-R * .3}' cy='${-R * .35}' rx='${R * .35}' ry='${R * .2}' fill='#fff' opacity='.25' transform='rotate(-30 ${-R * .3} ${-R * .35})'/>`;
    }
    return o;
}

// Ikon bunga dari foto di images/icons (dipotong tepat di bunganya memakai data FOTO).
// Kalau foto tidak ditemukan, dipakai gambar SVG.
function ikonSvg(id, ukuran) {
    return `<svg viewBox='-48 -48 96 96' width='${ukuran}' height='${ukuran}' style='display:inline-block;vertical-align:middle'>${head(id)}</svg>`;
}

const FOTO_OK = {};     // id bunga -> alamat foto yang berhasil dimuat
const FOTO_GAGAL = {};  // id bunga -> true kalau tidak ada foto yang cocok

// Daftar alamat foto yang dicoba berurutan (nama, huruf kecil, dan beberapa ekstensi)
function fotoKandidat(id) {
    const hasil = [];
    FOTO[id].n.forEach(nama => {
        [nama, nama.toLowerCase()].forEach(v => {
            ['jpg', 'png', 'jpeg', 'webp'].forEach(e => {
                const alamat = `images/icons/${v}.${e}`;
                if (!hasil.includes(alamat)) hasil.push(alamat);
            });
        });
    });
    return hasil;
}

// Dipanggil saat foto gagal dimuat: coba alamat berikutnya, atau pakai gambar SVG
function fotoCoba(img, id, ukuran) {
    const daftar = fotoKandidat(id);
    const i = daftar.indexOf(img.getAttribute('src')) + 1;
    if (i < daftar.length) {
        img.src = daftar[i];
    } else {
        FOTO_GAGAL[id] = true;
        img.parentNode.outerHTML = ikonSvg(id, ukuran);
    }
}

function ikon(id, ukuran) {
    // Versi satu file: foto sudah dipotong dan ditanam langsung
    if (typeof IKON_DATA !== 'undefined' && IKON_DATA[id])
        return `<img src='${IKON_DATA[id]}' width='${ukuran}' height='${ukuran}' alt='' style='display:inline-block;vertical-align:middle;border-radius:50%;object-fit:cover'>`;
    if (FOTO_GAGAL[id]) return ikonSvg(id, ukuran);
    const f = FOTO[id], k = ukuran / (2 * f.s);
    const src = FOTO_OK[id] || fotoKandidat(id)[0];
    const gaya = `position:absolute;max-width:none;width:${f.w * k}px;height:${f.h * k}px;left:${-(f.cx - f.s) * k}px;top:${-(f.cy - f.s) * k}px`;
    return `<span style='display:inline-block;position:relative;overflow:hidden;border-radius:50%;width:${ukuran}px;height:${ukuran}px;vertical-align:middle'>`
        + `<img src='${src}' alt='' style='${gaya}' onload="FOTO_OK['${id}']=this.getAttribute('src')" onerror="fotoCoba(this,'${id}',${ukuran})"></span>`;
}

function scene(pf) {
    const w = WR.find(x => x.id === S.wrap) || WR[0];
    const q = FL.map(f => ({ f, n: S.items[f.id] || 0 })).filter(x => x.n);
    const seq = [];
    let k = 0;
    while (seq.length < 15 && q.some(x => k < x.n)) {
        q.forEach(x => { if (k < x.n && seq.length < 15)
            seq.push({ f: x.f, o: k }); });
        k++;
    }
    seq.sort((a, b) => (b.f.id === 'o') - (a.f.id === 'o'));
    let gr = '';
    if (S.gr === 'a')
        gr = [-74, -54, -34, 34, 54, 74].map((a, i) => { const L = 112 + Math.abs(a) * 0.55; return `<g transform='translate(160 228) rotate(${a})'><path d='M0 0C26 ${-L * 0.35} 22 ${-L * 0.75} 0 ${-L}C-22 ${-L * 0.75} -26 ${-L * 0.35} 0 0Z' fill='${i % 2 ? '#4f9a49' : '#3a7d3a'}'/><path d='M0 0L0 ${-L * 0.9}' stroke='rgba(255,255,255,.3)' stroke-width='1.5' fill='none'/></g>`; }).join('');
    if (S.gr === 'b')
        gr = [-62, -48, -34, -20, -8, 8, 20, 34, 48, 62].map(a => `<path d='M160 232Q${160 + a * 1.2} 190 ${160 + a * 1.9} ${140 + Math.abs(a)}' stroke='#7fae5a' stroke-width='3' fill='none' stroke-linecap='round'/>`).join('');
    if (S.gr === 'c')
        for (let i = 0; i < 16; i++) {
            const x = 70 + ((i * 53) % 180), y = 120 + ((i * 37) % 90);
            gr += `<path d='M160 318Q${(160 + x) / 2} ${(318 + y) / 2} ${x} ${y}' stroke='#6b9a5e' stroke-width='1.2' fill='none'/><circle cx='${x}' cy='${y}' r='4.5' fill='#fff'/><circle cx='${x + 5}' cy='${y + 3}' r='3.5' fill='#fff'/><circle cx='${x - 5}' cy='${y + 3}' r='3.5' fill='#f4f4f4'/>`;
        }
    const fs = seq.map((s, i) => {
        const [x, y] = P[i], r = ((i * 29) % 40) - 20;
        const dr = stag || (pf && s.f.id === pf && s.o === S.items[pf] - 1);
        return `<g${dr ? ` class='drop' style='animation-delay:${stag ? i * 140 : 0}ms'` : ''}><path d='M160 318Q${(160 + x) / 2} ${(318 + y) / 2 + 20} ${x} ${y}' stroke='#3d7a38' stroke-width='3.5' fill='none' stroke-linecap='round'/><path d='M160 318Q${(160 + x) / 2} ${(318 + y) / 2 + 20} ${x} ${y}' stroke='#7fbf74' stroke-width='1' fill='none' stroke-linecap='round' opacity='.6'/><g transform='translate(${x} ${y}) rotate(${r}) scale(.85)' style='filter:drop-shadow(0 2px 2px rgba(0,0,0,.25))'>${head(s.f.id)}</g></g>`;
    }).join('');
    const defs = `<defs><linearGradient id='gw' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${w.a}'/><stop offset='1' stop-color='${w.b}'/></linearGradient></defs>`;
    const back = `<path d='M38 178L282 178L160 392Z' fill='url(#gw)' opacity='.8'/>`;
    const front = `<path d='M60 214Q160 252 260 214L160 394Z' fill='url(#gw)'/><path d='M60 214L160 394L108 296Z' fill='#000' opacity='.1'/><path d='M260 214L160 394L214 290Z' fill='#fff' opacity='.2'/><path d='M112 226L160 392M208 226L160 392M86 220L160 392' stroke='#000' stroke-opacity='.07' fill='none'/><path d='M60 214Q160 252 260 214' stroke='#fff' stroke-opacity='.6' stroke-width='2' fill='none'/>`;
    const rib = `<path d='M112 244Q160 262 208 244L206 258Q160 276 114 258Z' fill='#e11d74'/><ellipse cx='136' cy='256' rx='20' ry='10' fill='#f43f8e' transform='rotate(-20 136 256)'/><ellipse cx='184' cy='256' rx='20' ry='10' fill='#f43f8e' transform='rotate(20 184 256)'/><circle cx='160' cy='262' r='8' fill='#be185d'/>`;
    $('svg').innerHTML = defs + back + gr + fs + front + rib;
}