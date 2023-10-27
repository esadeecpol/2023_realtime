document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el cuadro de diálogo
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'block';
  
    // Cerrar el cuadro de diálogo
    var closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      var modal = document.getElementById('welcomeModal');
      modal.style.display = 'none';
    });
  });
  