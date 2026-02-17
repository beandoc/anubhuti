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
});
