const P = [[160, 108], [112, 128], [208, 128], [160, 162], [78, 162], [242, 162], [120, 190], [200, 190], [84, 206], [236, 206], [160, 206], [52, 196], [268, 196], [134, 222], [186, 222]];

let uid = 0;

const HD = { r: { L: [[5, 40, 25, 0, 360, '#7a0f20', '#ef4a63'], [5, 31, 20, 36, 360, '#951427', '#f25a72'], [4, 20, 14, 10, 360, '#b81d37', '#ff7e94']], c: ['#8c1428', 6] },
    p: { L: [[8, 42, 21, 0, 360, '#f08cb0', '#fde3ec'], [7, 33, 19, 20, 360, '#ee7aa4', '#fbd0e0'], [6, 23, 15, 8, 360, '#e86b98', '#f9bcd2']], c: ['#f6cf5b', 5] },
    t: { L: [[5, 42, 15, 0, 64, '#f0502f', '#ffd2b8'], [3, 34, 16, 0, 30, '#e03a1e', '#ffb08a']] },
    d: { L: [[16, 38, 6, 0, 360, '#dfe6ee', '#ffffff']], c: ['#f6c026', 10] },
    s: { L: [[20, 44, 8, 0, 360, '#f2970a', '#ffd84a'], [20, 36, 7, 9, 360, '#f5a30f', '#ffe36e']], c: ['#4a2c12', 15] },
    c: { L: [[5, 36, 19, 0, 360, '#ffa8c4', '#fff3f7']], c: ['#e0527f', 5] },
    l: { L: [[12, 44, 11, 0, 360, '#fff0f6', '#f3a0c4', 1], [9, 34, 11, 20, 360, '#ffe3ee', '#ee8db8', 1], [6, 24, 9, 10, 360, '#ffd5e6', '#e87aab', 1]], c: ['#f5c542', 7] } };

function head(id) {
    if (id === 'h') {
        let o = '';
        for (let j = 0; j < 10; j++) {
            const x = j % 2 ? 5 : -5, y = 22 - j * 6.4;
            o += `<ellipse cx='${x}' cy='${y}' rx='6' ry='4.2' fill='${j % 3 ? '#9b7fe0' : '#7e5bd0'}' transform='rotate(${j % 2 ? 25 : -25} ${x} ${y})'/>`;
        }
        return o;
    }
    const h = HD[id], k = uid++;
    let o = '';
    h.L.forEach((a, i) => {
        const [n, l, w, of, sp, c0, c1, pt] = a;
        o += `<radialGradient id='q${k}_${i}' cx='.5' cy='.7' r='.8'><stop offset='0' stop-color='${c0}'/><stop offset='1' stop-color='${c1}'/></radialGradient>`;
        const d = pt ? `M0 0C${-w} ${-l * .4} ${-w * .5} ${-l * .8} 0 ${-l}C${w * .5} ${-l * .8} ${w} ${-l * .4} 0 0Z` : `M0 0C${-w} ${-l * .3} ${-w * .8} ${-l} 0 ${-l}C${w * .8} ${-l} ${w} ${-l * .3} 0 0Z`;
        for (let j = 0; j < n; j++) {
            const ang = sp < 360 ? (n > 1 ? -sp / 2 + j * sp / (n - 1) : 0) : of + j * 360 / n;
            o += `<path d='${d}' transform='rotate(${ang})' fill='url(#q${k}_${i})' stroke='rgba(0,0,0,.18)' stroke-width='.6'/>`;
        }
    });
    if (h.c)
        o += `<circle r='${h.c[1]}' fill='${h.c[0]}'/><circle r='${h.c[1] * .5}' fill='#000' opacity='.15'/>`;
    return o;
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
    let gr = '';
    if (S.gr === 'a')
        gr = [-62, -40, -18, 18, 40, 62].map((a, i) => `<path d='M0 0C20 -50 16 -105 0 -${130 - Math.abs(a) / 2}C-16 -105 -20 -50 0 0Z' transform='translate(160 318) rotate(${a})' fill='${i % 2 ? '#4f9a49' : '#3a7d3a'}'/>`).join('');
    if (S.gr === 'b')
        gr = [-58, -44, -30, -16, -4, 8, 20, 34, 48, 60].map(a => `<path d='M160 318Q${160 + a * 1.6} 200 ${160 + a * 3.2} ${150 + Math.abs(a)}' stroke='#7fae5a' stroke-width='3' fill='none' stroke-linecap='round'/>`).join('');
    if (S.gr === 'c')
        for (let i = 0; i < 16; i++) {
            const x = 70 + ((i * 53) % 180), y = 120 + ((i * 37) % 90);
            gr += `<path d='M160 318Q${(160 + x) / 2} ${(318 + y) / 2} ${x} ${y}' stroke='#6b9a5e' stroke-width='1.2' fill='none'/><circle cx='${x}' cy='${y}' r='4.5' fill='#fff'/><circle cx='${x + 5}' cy='${y + 3}' r='3.5' fill='#fff'/><circle cx='${x - 5}' cy='${y + 3}' r='3.5' fill='#f4f4f4'/>`;
        }
    const fs = seq.map((s, i) => {
        const [x, y] = P[i], r = ((i * 29) % 40) - 20;
        const dr = stag || (pf && s.f.id === pf && s.o === S.items[pf] - 1);
        return `<g${dr ? ` class='drop' style='animation-delay:${stag ? i * 140 : 0}ms'` : ''}><path d='M160 318Q${(160 + x) / 2} ${(318 + y) / 2 + 20} ${x} ${y}' stroke='#3d7a38' stroke-width='3.5' fill='none' stroke-linecap='round'/><g transform='translate(${x} ${y}) rotate(${r}) scale(.85)' style='filter:drop-shadow(0 2px 2px rgba(0,0,0,.25))'>${head(s.f.id)}</g></g>`;
    }).join('');
    const defs = `<defs><linearGradient id='gw' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${w.a}'/><stop offset='1' stop-color='${w.b}'/></linearGradient></defs>`;
    const back = `<path d='M38 178L282 178L160 392Z' fill='url(#gw)' opacity='.8'/>`;
    const front = `<path d='M60 214Q160 252 260 214L160 394Z' fill='url(#gw)'/><path d='M60 214L160 394L108 296Z' fill='#000' opacity='.1'/><path d='M260 214L160 394L214 290Z' fill='#fff' opacity='.2'/><path d='M60 214Q160 252 260 214' stroke='#fff' stroke-opacity='.6' stroke-width='2' fill='none'/>`;
    const rib = `<path d='M112 244Q160 262 208 244L206 258Q160 276 114 258Z' fill='#e11d74'/><ellipse cx='136' cy='256' rx='20' ry='10' fill='#f43f8e' transform='rotate(-20 136 256)'/><ellipse cx='184' cy='256' rx='20' ry='10' fill='#f43f8e' transform='rotate(20 184 256)'/><circle cx='160' cy='262' r='8' fill='#be185d'/>`;
    $('svg').innerHTML = defs + back + gr + fs + front + rib;
}