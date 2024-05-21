document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.querySelector('.contenidoContenedor');
    var mainContenedor = document.querySelector('.contenedorMainContenido');
    if (contenedor && mainContenedor) {
        var adjustHeight = function() {
            var viewportHeight = window.innerHeight;
            mainContenedor.style.minHeight = viewportHeight + 'px';
            contenedor.style.minHeight = viewportHeight + 'px';
        };
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
    }
});