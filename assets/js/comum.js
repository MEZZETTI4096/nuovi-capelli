/* =========================================================================
   comum.js — comportamento da casca compartilhada (cabeçalho e menu).
   Carregado com defer em todas as páginas.
   ========================================================================= */
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
    /* No computador, o botão fixo de agendar só aparece depois do topo (lá o cabeçalho já tem "Agendar") */
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
