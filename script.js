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

/* ------------------------------------------
   Filtrado de Certificaciones por Categoría
   ------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  const certFilterBtns = document.querySelectorAll('.certificaciones .filtro-btn');
  const certCards = document.querySelectorAll('.certificaciones .cert-card');

  if (certFilterBtns.length && certCards.length) {
    certFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        certFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filtro = btn.getAttribute('data-filtro');
        certCards.forEach((card) => {
          if (filtro === 'todos' || card.getAttribute('data-categoria') === filtro) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------
     Filtrado de Casos de Éxito por Categoría
     -------------------------------------- */
  const casoFilterBtns = document.querySelectorAll('.casos-exito .filtro-btn');
  const casoCards = document.querySelectorAll('.casos-exito .caso-card');

  if (casoFilterBtns.length && casoCards.length) {
    casoFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        casoFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filtro = btn.getAttribute('data-filtro');
        casoCards.forEach((card) => {
          if (filtro === 'todos' || card.getAttribute('data-categoria') === filtro) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
