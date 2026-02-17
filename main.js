// Anubhuti - Premium Concierge Gastroenterology
// Main Entry Point

document.addEventListener('DOMContentLoaded', () => {
    console.log('Anubhuti Website Initialized');

    // Smooth reveal for hero elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Scroll reveal for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.info-grid, .feature-image-container');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(el);
    });
});

// Helper for dynamic classes
document.addEventListener('scroll', () => {
    const infoGrid = document.querySelector('.info-grid');
    if (infoGrid && infoGrid.getBoundingClientRect().top < window.innerHeight * 0.8) {
        infoGrid.style.opacity = '1';
        infoGrid.style.transform = 'translateY(0)';
    }
});
