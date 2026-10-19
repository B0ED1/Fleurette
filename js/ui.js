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
    FL.forEach(f => { const c = $('n-' + f.id); if (c)
        c.textContent = S.items[f.id] || 0; });
    document.querySelectorAll('[data-k]').forEach(x => x.classList.toggle('ring-2', S[x.dataset.k] === x.dataset.v));
    $('wa').href = 'https://wa.me/?text=' + encodeURIComponent('Ada buket untukmu 💐 Buka di sini: ' + link());
}

function grp(id, k, opts, mk) { opts.forEach(o => { const b = document.createElement('button'); b.dataset.k = k; b.dataset.v = o.id; mk(b, o); b.onclick = () => { S[k] = o.id; draw(); }; $(id).appendChild(b); }); }

function sync() { $('to').value = S.to; $('from').value = S.from; $('msg').value = S.msg; draw(); }

function build() {
    FL.forEach(f => {
        const r = document.createElement('div');
        r.className = 'flex items-center gap-2 bg-bg border border-bd rounded-2xl px-3 py-2';
        r.innerHTML = '<span class="text-3xl"></span><p class="flex-1 font-semibold text-sm"></p><button class="w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-bd" aria-label="Kurangi">−</button><span id="n-' + f.id + '" class="w-5 text-center">0</span><button class="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-ac text-white" aria-label="Tambah">+</button>';
        r.children[0].textContent = f.e;
        r.children[1].textContent = f.n;
        const bt = r.querySelectorAll('button');
        const ch = d => { if (d > 0 && tot() >= 15)
            return; S.items[f.id] = Math.max(0, (S.items[f.id] || 0) + d); if (d > 0)
            popFor = f.id; draw(); };
        bt[0].onclick = () => ch(-1);
        bt[1].onclick = () => ch(1);
        $('flowers').appendChild(r);
        const gc = document.createElement('div');
        gc.className = 'bg-card/90 border border-bd rounded-3xl p-5 text-center';
        gc.innerHTML = '<div class="text-5xl"></div><h3 class="font-semibold mt-2"></h3><p class="text-sm text-mut mt-1"></p><p class="text-xs mt-2"></p><button class="mt-3 text-sm text-ac font-semibold">+ Tambah ke buket</button>';
        gc.children[0].textContent = f.e;
        gc.children[1].textContent = f.n;
        gc.children[2].textContent = f.m;
        gc.children[3].textContent = 'Cocok untuk: ' + f.f;
        gc.children[4].onclick = () => { ch(1); $('buat').scrollIntoView(); };
        $('guide').appendChild(gc);
    });
    const pill = 'px-3 py-1 rounded-full border border-bd bg-bg text-sm ring-ac';
    grp('greens', 'gr', GR, (b, o) => { b.className = pill; b.textContent = (o.e + ' ' + o.n).trim(); });
    grp('cards', 'card', CS, (b, o) => { b.className = pill + ' cs-' + o.id; b.textContent = o.n; });
    grp('wraps', 'wrap', WR, (b, o) => { b.className = 'w-10 h-10 rounded-full border-2 border-bd ring-ac'; b.style.background = o.c; b.title = o.n; });
    ['to', 'from', 'msg'].forEach(k => $(k).oninput = e => { S[k] = e.target.value; draw(); });
    EX.forEach(x => {
        const c = document.createElement('div');
        c.className = 'bg-card/90 border border-bd rounded-3xl p-5';
        const em = Object.keys(x.i).map(k => FL.find(f => f.id === k).e).join(' ');
        c.innerHTML = '<div class="text-3xl"></div><h3 class="font-semibold mt-2"></h3><p class="script text-xl text-mut mt-1"></p><button class="mt-3 text-sm text-ac font-semibold">Pakai contoh ini →</button>';
        c.children[0].textContent = em;
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