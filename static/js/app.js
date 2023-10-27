document.addEventListener('DOMContentLoaded', function() {
    // Comprobar si el usuario ya ha visitado el sitio  
    // Cerrar el cuadro de diálogo
    var closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      var modal = document.getElementById('welcomeModal');
      modal.style.display = 'none';
    });
  });
  