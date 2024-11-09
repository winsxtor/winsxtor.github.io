console.log("Bienvenido a la página de WINS THE DEEJAAY!");

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const fotos = document.querySelectorAll('.foto img');

    fotos.forEach(foto => {
        foto.addEventListener('click', function() {
            const src = foto.getAttribute('src');
            mostrarPopup(src);
        });
    });

    function mostrarPopup(src) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <img src="${src}" alt="Foto ampliada">
            <a href="#" class="close-popup">X</a>
        `;
        document.body.appendChild(popup);

        const closeBtn = popup.querySelector('.close-popup');
        closeBtn.addEventListener('click', function() {
            popup.remove();
        });

        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.remove();
            }
        });
    }
});

