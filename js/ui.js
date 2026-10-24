// Tampilan: render ulang (draw), tombol pilihan, dan pembentukan elemen halaman.

function draw() {
    const list = [];
    FL.forEach(f => { for (let i = 0; i < (S.items[f.id] || 0); i++)
        list.push(f.e); });
    if (document.documentElement.dataset.bg !== S.bg) {
        document.documentElement.dataset.bg = S.bg;
        petals();
    }
    scene(popFor);
    popFor = null;
    stag = false;
    const g = GR.find(x => x.id === S.gr).e;
    $('empty').classList.toggle('hidden', list.length > 0);
    const has = S.to || S.from || S.msg;
    $('card').classList.toggle('hidden', !has);
    $('card').className = ($('card').className.replace(/cs-\w/g, '') + ' cs-' + S.card).replace(/\s+/g, ' ');
    $('cto').textContent = S.to ? 'Untuk ' + S.to : '';
    $('cmsg').textContent = S.msg;
    $('cfrom').textContent = S.from ? '– ' + S.from : '';
    $('cnt').textContent = '(' + list.length + '/15 tangkai)';
    FL.forEach(f => {
        const c = $('n-' + f.id);
        if (c)
            c.textContent = S.items[f.id] || 0;
        const row = $('row-' + f.id);
        if (row)
            row.classList.toggle('border-ac', (S.items[f.id] || 0) > 0);
    });
    document.querySelectorAll('[data-k]').forEach(x => x.classList.toggle('ring-2', S[x.dataset.k] === x.dataset.v));
    $('wa').href = 'https://wa.me/?text=' + encodeURIComponent('Ada buket untukmu 💐 Buka di sini: ' + link());
}

function grp(id, k, opts, mk) { opts.forEach(o => { const b = document.createElement('button'); b.dataset.k = k; b.dataset.v = o.id; mk(b, o); b.onclick = () => { S[k] = o.id; draw(); }; $(id).appendChild(b); }); }

function sync() { $('to').value = S.to; $('from').value = S.from; $('msg').value = S.msg; draw(); }

function build() {
    // Hiasan beranda: tiga foto bunga bertumpuk
    $('heroIkon').innerHTML = [['p', 64], ['r', 92], ['s', 64]].map(([id, u], i) => `<span class="float inline-flex rounded-full ring-4 ring-white shadow-lg ${i ? '-ml-3' : ''} ${i === 1 ? 'relative z-10' : ''}" style="animation-delay:${i * 0.4}s">${ikon(id, u)}</span>`).join('');
    FL.forEach(f => {
        const r = document.createElement('div');
        r.className = 'flex items-center gap-3 bg-bg border border-bd rounded-2xl px-3 py-2 transition';
        r.id = 'row-' + f.id;
        r.innerHTML = '<span class="shrink-0"></span><p class="flex-1 min-w-0 font-semibold text-sm leading-tight"></p><div class="flex items-center gap-1 shrink-0"><button class="w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-bd" aria-label="Kurangi">−</button><span id="n-' + f.id + '" class="w-6 text-center font-semibold">0</span><button class="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-ac text-white" aria-label="Tambah">+</button></div>';
        r.children[0].innerHTML = ikon(f.id, 36);
        r.children[1].textContent = f.n;
        const bt = r.querySelectorAll('button');
        const ch = d => { if (d > 0 && tot() >= 15)
            return; S.items[f.id] = Math.max(0, (S.items[f.id] || 0) + d); if (d > 0)
            popFor = f.id; draw(); };
        bt[0].onclick = () => ch(-1);
        bt[1].onclick = () => ch(1);
        $('flowers').appendChild(r);
        const gc = document.createElement('div');
        gc.className = 'bg-card/90 border border-bd rounded-3xl p-4 sm:p-5 flex sm:flex-col items-center gap-4 sm:gap-0 text-left sm:text-center';
        gc.innerHTML = '<div class="shrink-0"></div><div class="flex-1 sm:w-full flex flex-col"><h3 class="font-semibold sm:mt-3"></h3><p class="text-sm text-mut mt-1"></p><p class="text-xs mt-2"></p><button class="mt-auto pt-3 text-sm text-ac font-semibold text-left sm:text-center">+ Tambah ke buket</button></div>';
        gc.children[0].innerHTML = ikon(f.id, 64);
        const isi = gc.children[1];
        isi.children[0].textContent = f.n;
        isi.children[1].textContent = f.m;
        isi.children[2].textContent = 'Cocok untuk: ' + f.f;
        isi.children[3].onclick = () => { ch(1); $('buat').scrollIntoView(); };
        $('guide').appendChild(gc);
    });
    const pill = 'px-3 py-1 rounded-full border border-bd bg-bg text-sm ring-ac';
    grp('greens', 'gr', GR, (b, o) => { b.className = pill; b.textContent = (o.e + ' ' + o.n).trim(); });
    grp('cards', 'card', CS, (b, o) => { b.className = pill + ' cs-' + o.id; b.textContent = o.n; });
    grp('wraps', 'wrap', WR, (b, o) => { b.className = 'w-10 h-10 rounded-full border-2 border-bd ring-ac'; b.style.background = o.c; b.title = o.n; });
    ['to', 'from', 'msg'].forEach(k => $(k).oninput = e => { S[k] = e.target.value; draw(); });
    EX.forEach(x => {
        const c = document.createElement('div');
        c.className = 'bg-card/90 border border-bd rounded-3xl p-5 flex flex-col text-left';
        const em = Object.keys(x.i).map(k => ikon(k, 30)).join(' ');
        c.innerHTML = '<div class="text-3xl"></div><h3 class="font-semibold mt-2"></h3><p class="script text-xl text-mut mt-1"></p><button class="mt-auto pt-3 text-sm text-ac font-semibold text-left">Pakai contoh ini →</button>';
        c.children[0].innerHTML = em;
        c.children[1].textContent = x.t;
        c.children[2].textContent = x.m;
        c.children[3].onclick = () => { S = { bg: S.bg, to: S.to, from: S.from, msg: x.m, wrap: x.w, card: x.c, gr: x.g, items: { ...x.i } }; stag = true; sync(); $('buat').scrollIntoView(); };
        $('ex').appendChild(c);
    });
    $('copy').onclick = async () => { try {
        await navigator.clipboard.writeText(link());
        $('note').textContent = 'Link tersalin! Kirim ke penerima ya 💌';
        boom();
    }
    catch (e) {
        $('note').textContent = 'Gagal menyalin, coba tombol WhatsApp.';
    } };
    $('wa').onclick = boom;
    grp('bgs', 'bg', BG, (b, o) => { b.className = 'w-6 h-6 rounded-full border border-bd ring-ac ring-offset-1'; b.style.background = o.c; b.title = o.n; });
}