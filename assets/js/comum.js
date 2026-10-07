/* =========================================================================
   comum.js — comportamento da casca compartilhada (cabeçalho, menu e a
   lista do "Meu horário"). Carregado com defer em todas as páginas:
   roda depois dos scripts embutidos no fim de cada página.
   ========================================================================= */

/* "Meu horário": a lista de serviços escolhidos, guardada no aparelho e
   compartilhada entre o cardápio, a página Meu horário e o contador do
   cabeçalho. Formato: { s: [ids], dia, periodo, obs } — o nome nunca é guardado.
   Quem grava avisa as outras partes com o evento "nuovi-horario". */
window.nuoviHorario = (() => {
  const CHAVE = 'nuovi-horario';
  const ler = () => {
    try { return JSON.parse(localStorage.getItem(CHAVE) || '{}') || {}; } catch (e) { return {}; }
  };
  const gravar = (dados) => {
    try { localStorage.setItem(CHAVE, JSON.stringify(dados)); } catch (e) { /* sem armazenamento: segue só com a URL */ }
    dispatchEvent(new Event('nuovi-horario'));
  };
  const ids = () => (Array.isArray(ler().s) ? ler().s : []);
  return { CHAVE, ler, gravar, ids, contar: () => ids().length };
})();

/* Contador do "Meu horário" no cabeçalho e o botão fixo ("Montar meu horário" ou "Meu horário (N)") */
(() => {
  const atualizar = () => {
    const n = window.nuoviHorario.contar();
    document.querySelectorAll('[data-horario-conta]').forEach(el => {
      el.hidden = !n;
      el.innerHTML = `${n}<span class="so-leitor"> ${n === 1 ? 'serviço' : 'serviços'}</span>`;
    });
    const link = document.querySelector('[data-agendar-link]');
    if (link) {
      link.href = n ? link.dataset.hrefHorario : link.dataset.hrefServicos;
      link.querySelector('[data-agendar-texto]').textContent = n ? `Meu horário (${n})` : 'Montar meu horário';
    }
  };
  atualizar();
  addEventListener('nuovi-horario', atualizar);
  addEventListener('storage', (ev) => { if (ev.key === window.nuoviHorario.CHAVE) atualizar(); });
})();

(() => {
  const cab = document.querySelector('[data-cab]');
  if (!cab) return;

  /* Tom do cabeçalho: escuro sobre o topo escuro da página, claro no resto.
     A página marca o topo escuro com data-topo-escuro. */
  const topoEscuro = document.querySelector('[data-topo-escuro]');
  const agendar = document.querySelector('[data-agendar]');
  const ajustarTom = () => {
    const claro = !topoEscuro || topoEscuro.getBoundingClientRect().bottom <= cab.offsetHeight;
    cab.classList.toggle('cab--claro', claro);
    /* O botão (computador) e a barra (celular) de agendar só aparecem depois do topo, que já tem o botão de agendar */
    if (agendar) agendar.classList.toggle('agendar-fixo--no-topo', !claro);
  };
  ajustarTom();
  addEventListener('scroll', ajustarTom, { passive: true });
  addEventListener('resize', ajustarTom);

  /* Menu do celular: botão com aria-expanded, fecha com Esc, com clique fora e ao escolher um link */
  const botao = cab.querySelector('.cab__menu');
  const menu = botao && document.getElementById(botao.getAttribute('aria-controls'));
  if (!botao || !menu) return;
  const icone = botao.querySelector('use');

  const marcar = (aberto, devolverFoco) => {
    cab.classList.toggle('cab--aberto', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    if (icone) icone.setAttribute('href', aberto ? '#i-x' : '#i-menu');
    if (!aberto && devolverFoco) botao.focus();
  };
  const aberto = () => botao.getAttribute('aria-expanded') === 'true';

  botao.addEventListener('click', () => marcar(!aberto()));
  menu.addEventListener('click', (ev) => { if (ev.target.closest('a')) marcar(false); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && aberto()) marcar(false, true); });
  document.addEventListener('click', (ev) => { if (aberto() && !cab.contains(ev.target)) marcar(false); });
  matchMedia('(min-width: 901px)').addEventListener('change', (ev) => { if (ev.matches) marcar(false); });
})();
