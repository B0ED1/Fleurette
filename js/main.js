(function init() {
    petals();
    const m = location.hash.match(/b=([^&]+)/);
    if (m) {
        try {
            const d = JSON.parse(decodeURIComponent(escape(atob(m[1]))));
            S = { to: String(d.to || '').slice(0, 30), from: String(d.from || '').slice(0, 30), msg: String(d.msg || '').slice(0, 200), wrap: d.wrap || 'p', card: d.card || 'e', gr: d.gr || 'a', bg: BG.some(b => b.id === d.bg) ? d.bg : 'pink', items: d.items || {} };
            document.body.classList.add('view');
            $('again').classList.remove('hidden');
            $('again').href = location.href.split('#')[0];
            if (S.to) {
                $('greet').textContent = 'Hai, ' + S.to + '!';
                $('greet').classList.remove('hidden');
            }
            $('gt').textContent = S.from ? 'Ada buket dari ' + S.from : 'Ada buket untukmu';
            $('gate').classList.remove('hidden');
            $('buat').classList.add('min-h-screen', 'flex', 'items-center', 'justify-center');
            $('pv').classList.add('w-full', 'max-w-md', 'lg:static');
            $('buat').firstElementChild.nextElementSibling.className = 'w-full max-w-md';
            $('open').onclick = () => { $('gate').style.opacity = 0; setTimeout(() => $('gate').remove(), 600); stag = true; draw(); setTimeout(boom, 300); };
            draw();
            return;
        }
        catch (e) { }
    }
    build();
    draw();
})();