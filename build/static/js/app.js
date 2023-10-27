document.addEventListener('DOMContentLoaded', function() {
  // Comprobar si el usuario ya ha visitado el sitio
  if (!sessionStorage.getItem('visitedBefore')) {
    // Mostrar el cuadro de diálogo
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'block';
    
    // Marcar en sessionStorage que el usuario ya ha visitado el sitio
    sessionStorage.setItem('visitedBefore', 'true');
  }

  // Cerrar el cuadro de diálogo
  var closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'none';
  });
});
