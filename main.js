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

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Dynamic classes and initial state for reveal elements
    const revealTargets = document.querySelectorAll('.info-grid, .ailment-card, .transplant-grid, .section-intro, .feature-image-container');

    revealTargets.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`;

        revealObserver.observe(el);
    });
});

// CSS check for active state
const style = document.createElement('style');
style.textContent = `
    .is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
