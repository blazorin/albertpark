let images = document.querySelectorAll('.card img');

images.forEach(image => {
    image.addEventListener('click', () => {
        window.location.href = "atracciones.html";
    });
});


document.querySelector('.newsletter-button').addEventListener('click', function() {
  const emailInput = document.querySelector('.newsletter-input');
  const email = emailInput.value;

  // Verifica si el correo no es válido
  if (!isValidEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa un correo electrónico válido.',
      customClass: {
        popup: 'larger-popup'
      }
    });
  }
});


function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}


document.getElementById('comprarEntrada').addEventListener('click', function() {
  window.location.href = 'entradas.html';
});





