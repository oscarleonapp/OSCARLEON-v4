/* ============================
   script.js (unificado)
   ============================
*/

/* -------------------------------
   Función: Toggle menú en móvil
   ------------------------------- */
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  if (nav) {
    nav.classList.toggle('active');
  }
}

/* -------------------------------
   Lógica de filtrado
   ------------------------------- */
function applyFilter(btn, botones, cards) {
  botones.forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  const filtro = btn.getAttribute('data-filtro');
  cards.forEach((card) => {
    if (filtro === 'todos' || card.getAttribute('data-categoria') === filtro) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function initFilters() {
  const certFilterBtns = document.querySelectorAll('.certificaciones .filtro-btn');
  const certCards = document.querySelectorAll('.certificaciones .cert-card');

  if (certFilterBtns.length && certCards.length) {
    certFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => applyFilter(btn, certFilterBtns, certCards));
    });
  }

  const casoFilterBtns = document.querySelectorAll('.casos-exito .filtro-btn');
  const casoCards = document.querySelectorAll('.casos-exito .caso-card');

  if (casoFilterBtns.length && casoCards.length) {
    casoFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => applyFilter(btn, casoFilterBtns, casoCards));
    });
  }
}

document.addEventListener('DOMContentLoaded', initFilters);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { toggleMenu, applyFilter };
}
