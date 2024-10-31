 //**  codigo ocultar nav
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#navbar-container');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Ocultar navbar cuando el usuario desplaza hacia abajo
        if (currentScrollY > lastScrollY) {
            navbar.classList.add('hidden');
        } 
        // Mostrar navbar cuando el usuario vuelve al inicio de la página
        else if (currentScrollY === 0) {
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
    });

    // codigo carrusel 
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function moveSlide(direction) {
        if (!container || slides.length === 0) return;

        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

    // navegación con el teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') moveSlide(1);
        if (event.key === 'ArrowLeft') moveSlide(-1);
    });
});
