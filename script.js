// Navegação entre seções sem recarregar a página
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-section');

    // Atualiza botão ativo
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Mostra a seção correspondente
    sections.forEach(section => {
      if (section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

// Botões sociais abrem links em nova aba (mesmo domínio) ou nova janela
document.getElementById('btnInstagram').addEventListener('click', () => {
  window.open('https://www.instagram.com', '_blank', 'noopener');
});
document.getElementById('btnFacebook').addEventListener('click', () => {
  window.open('https://www.facebook.com', '_blank', 'noopener');
});
document.getElementById('btnWhatsApp').addEventListener('click', () => {
  window.open('https://web.whatsapp.com', '_blank', 'noopener');
});

// Botões de acessibilidade - zoom in/out
let zoomLevel = 1;

document.getElementById('zoomIn').addEventListener('click', () => {
  if (zoomLevel < 2) {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = 'top left';
  }
});

document.getElementById('zoomOut').addEventListener('click', () => {
  if (zoomLevel > 0.8) {
    zoomLevel -= 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = 'top left';
  }
});
