// Anubhuti - Excellence in Digestive Care
// Core Interactions & Dynamic Reveal System

document.addEventListener('DOMContentLoaded', () => {
    console.log('Anubhuti Website Initialized');

    // Initial Hero Entrance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(40px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Advanced Scroll Reveal using Intersection Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after reveal for performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Collect all elements intended for reveal
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.glass-card, .habit-card, .flag-card, .v-pillar');
    const headings = document.querySelectorAll('.section-heading, .eyebrow, .subtitle');

    const revealTargets = [...sections, ...cards, ...headings];

    revealTargets.forEach((el, index) => {
        el.classList.add('reveal');
        // Stagger delay based on child position if needed
        if (el.parentNode.classList.contains('grid-3') || el.parentNode.classList.contains('flags-grid')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
        revealObserver.observe(el);
    });

    // Premium Smooth Scroll for Navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accordion Logic (Pathology Section)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-body').style.display = 'none';
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.accordion-body').style.display = 'block';
            }
        });
    });

    // Parallax effect for the background video (subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const video = document.querySelector('.bg-video');
        if (video) {
            video.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});

// Global Styles for reveals if not in CSS
if (!document.getElementById('reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'reveal-styles';
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            will-change: opacity, transform;
        }
        .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .accordion-body {
            display: none;
            padding-bottom: 20px;
            animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}
