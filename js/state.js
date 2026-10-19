let S = { bg: 'pink', to: '', from: '', msg: '', wrap: 'p', card: 'e', gr: 'a', items: {} }, popFor = null, stag = false;

const $ = id => document.getElementById(id);

const tot = () => FL.reduce((a, f) => a + (S.items[f.id] || 0), 0);

const enc = () => btoa(unescape(encodeURIComponent(JSON.stringify(S))));

const link = () => location.href.split('#')[0] + '#b=' + enc();