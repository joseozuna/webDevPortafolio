const TYPING_SPEED = 100;
const FULL_NAME = "José Elías González Ozuna";

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupIntersectionObserver();
    typeWriterEffect();
});

// Efecto de escritura para el nombre
function typeWriterEffect() {
    const nameElement = document.getElementById('nameTitle');
    if (!nameElement) return;
    let index = 0;
    nameElement.textContent = '';
    function type() {
        if (index < FULL_NAME.length) {
            nameElement.textContent += FULL_NAME.charAt(index);
            index++;
            setTimeout(type, TYPING_SPEED);
        }
    }
    setTimeout(type, 500);
}

// Descargar CV en PDF
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'docs/Jose_Elias_Gonzalez_CV.pdf'; // asegúrate de tener este archivo en tu carpeta docs
    link.download = 'Jose_Elias_Gonzalez_CV.pdf';
    link.click();
}

// Animaciones con IntersectionObserver
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section').forEach(section => observer.observe(section));
}

// Animaciones hover
function initializeAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-6px) scale(1.01)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });
}

