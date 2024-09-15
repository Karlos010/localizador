// Inicialización de Google Maps
function initMap() {
  var location = { lat: -34.397, lng: 150.644 }; // Puedes cambiar las coordenadas
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

// Manejo de navegación por el menú
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.querySelectorAll('.content').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
  });
});

// Muestra la primera sección por defecto
document.getElementById('contacto').classList.add('active');
