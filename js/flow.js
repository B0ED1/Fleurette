let sudahDikirim = false;

function bukaModal() {
    const n = tot();
    $('m1').classList.remove('hidden');
    $('m2').classList.add('hidden');
    $('ok').disabled = n === 0;
    $('ok').classList.toggle('opacity-40', n === 0);
    $('sum').textContent = n === 0
        ? 'Kamu belum memilih bunga. Pilih minimal satu bunga dulu ya.'
        : n + ' tangkai bunga' + (S.to ? ' untuk ' + S.to : '')
            + (S.msg ? ', lengkap dengan pesan.' : ', tanpa pesan.')
            + ' Ada yang mau diubah dulu?';
    $('note').textContent = '';
    $('modal').classList.remove('hidden');
}

function tutupModal() {
    sudahDikirim = false;
    $('modal').classList.add('hidden');
}

function kosongkan() {
    S = { bg: S.bg, to: '', from: '', msg: '', wrap: 'p', card: 'e', gr: 'a', items: {} };
    sync();
    tutupModal();
    $('buat').scrollIntoView();
}

$('done').onclick = bukaModal;
$('edit').onclick = tutupModal;
$('ok').onclick = () => {
    $('m1').classList.add('hidden');
    $('m2').classList.remove('hidden');
};
$('again2').onclick = kosongkan;
$('modal').onclick = e => { if (e.target === $('modal')) tutupModal(); };

// Setelah link disalin atau dikirim, kosongkan saat pengguna kembali ke tab ini
$('copy').addEventListener('click', () => { sudahDikirim = true; });
$('wa').addEventListener('click', () => { sudahDikirim = true; });
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && sudahDikirim) kosongkan();
});