const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simulación de envío de formulario
const formulario = document.getElementById('formulario-contacto');
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te contactaré pronto.');
  formulario.reset();
});
