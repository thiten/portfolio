// ===== LIGHTBOX / ZOOM =====
document.addEventListener('DOMContentLoaded', function() {
  
  // Cria o overlay dinamicamente (só uma vez)
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Imagem ampliada">
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  // Adiciona classe "zoomable" a todas as imagens (exceto logos e ícones)
  document.querySelectorAll('img').forEach(img => {
    // Ignora imagens pequenas (logos, ícones)
    if (img.width > 300 || img.naturalWidth > 300) {
      img.classList.add('zoomable');
    }
  });

  // Ao clicar em uma imagem com classe zoomable
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('zoomable')) {
      e.preventDefault();
      overlayImg.src = target.src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // trava scroll
    }
  });

  // Fecha o lightbox ao clicar fora da imagem ou no X
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target === closeBtn) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Fecha com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

});
