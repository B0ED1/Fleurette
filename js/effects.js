// Efek visual: navigasi yang bersembunyi saat scroll, kelopak jatuh, confetti.

(function () { let y = 0; addEventListener('scroll', () => { const h = document.querySelector('header'), c = scrollY; if (h)
    h.classList.toggle('hide-nav', c > y && c > 80); y = c; }, { passive: true }); })();

function petals() { if (matchMedia('(prefers-reduced-motion:reduce)').matches)
    return; document.querySelectorAll('.petal').forEach(p => p.remove()); const list = (BG.find(b => b.id === S.bg) || BG[0]).p; for (let i = 0; i < 14; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = list[i % list.length];
    p.style.cssText = 'left:' + Math.random() * 100 + '%;font-size:' + (14 + Math.random() * 16) + 'px;animation-duration:' + (9 + Math.random() * 10) + 's;animation-delay:-' + Math.random() * 15 + 's;opacity:.5';
    document.body.appendChild(p);
} }

function boom() { const E = ['🌸', '💖', '✨', '🌷', '🎉']; for (let i = 0; i < 26; i++) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.textContent = E[i % 5];
    const a = Math.random() * 6.28, d = 120 + Math.random() * 180;
    s.style.setProperty('--x', Math.cos(a) * d + 'px');
    s.style.setProperty('--y', Math.sin(a) * d - 80 + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1400);
} }

// Tombol melayang di HP: kembali ke pratinjau buket saat sedang mengatur bunga
(function () {
    const fab = $('fab');
    const cek = () => {
        const pv = $('pv').getBoundingClientRect();
        const bu = $('buat').getBoundingClientRect();
        const vh = innerHeight;
        const tampil = !document.body.classList.contains('view')
            && bu.top < vh * 0.5 && bu.bottom > vh * 0.5
            && (pv.bottom < 0 || pv.top > vh);
        fab.classList.toggle('hidden', !tampil);
    };
    addEventListener('scroll', cek, { passive: true });
    addEventListener('resize', cek);
    fab.onclick = () => $('pv').scrollIntoView({ behavior: 'smooth', block: 'start' });
})();