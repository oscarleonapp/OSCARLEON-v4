const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const script = require('../script.js');

describe('toggleMenu', () => {
  test('toggles active class on nav-menu', () => {
    document.body.innerHTML = '<nav id="nav-menu" class="menu"></nav>';
    const nav = document.getElementById('nav-menu');

    script.toggleMenu();
    expect(nav.classList.contains('active')).toBe(true);
    script.toggleMenu();
    expect(nav.classList.contains('active')).toBe(false);
  });
});

describe('applyFilter', () => {
  test('certification filter shows/hides cards', () => {
    document.body.innerHTML = `
      <div class="certificaciones">
        <button class="filtro-btn" data-filtro="todos">Todos</button>
        <button class="filtro-btn" data-filtro="SEO">SEO</button>
      </div>
      <div class="cert-card" data-categoria="SEO"></div>
      <div class="cert-card" data-categoria="Marketing"></div>
    `;
    const btns = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.cert-card');

    script.applyFilter(btns[1], btns, cards);
    expect(cards[0].style.display).toBe('flex');
    expect(cards[1].style.display).toBe('none');

    script.applyFilter(btns[0], btns, cards);
    expect(cards[0].style.display).toBe('flex');
    expect(cards[1].style.display).toBe('flex');
  });

  test('case filter shows/hides cards', () => {
    document.body.innerHTML = `
      <div class="casos-exito">
        <button class="filtro-btn" data-filtro="todos">Todos</button>
        <button class="filtro-btn" data-filtro="Web">Web</button>
      </div>
      <div class="caso-card" data-categoria="Web"></div>
      <div class="caso-card" data-categoria="SEO"></div>
    `;
    const btns = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.caso-card');

    script.applyFilter(btns[1], btns, cards);
    expect(cards[0].style.display).toBe('flex');
    expect(cards[1].style.display).toBe('none');
  });
});
