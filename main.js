// Anubhuti - Official Clinical Interaction System
// Focused on smooth navigation, readability, and content reveal

document.addEventListener('DOMContentLoaded', () => {
    console.log('Anubhuti Healthcare Platform Ready');

    // 1. Initial Hero Reveal
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // 2. High-Fidelity Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const revealTargets = document.querySelectorAll('section, .glass-card, .alert-point, .anatomy-text, .section-heading');
    revealTargets.forEach((target, index) => {
        target.classList.add('reveal');
        // Stagger logic for child elements if they are in a grid
        if (target.classList.contains('alert-point')) {
            target.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
        revealObserver.observe(target);
    });

    // 3. Health-Literacy Navigation (Smooth Scroll with Offset)
    document.querySelectorAll('.nav-links a, .cta-group button').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const targetId = trigger.getAttribute('href') || trigger.getAttribute('onclick')?.match(/'#(.*?)'/)?.[1];
            if (!targetId || !targetId.startsWith('#')) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = 140; // Including emergency banner
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // 4. Clinical Accordion (Simple Language)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Auto-close others for focus
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-body').style.display = 'none';
            });

            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.accordion-body').style.display = 'block';
            }
        });
    });

    // 5. Parallax Video Optimization
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const video = document.querySelector('.bg-video');
        if (video && Math.abs(currentScroll - lastScroll) > 5) {
            video.style.transform = `translateY(${currentScroll * 0.25}px)`;
            lastScroll = currentScroll;
        }
    }, { passive: true });

    // 6. Condition Hub Tab Logic
    const hubTabs = document.querySelectorAll('.hub-tab');
    const hubPanes = document.querySelectorAll('.hub-pane');

    hubTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // Update Tab States
            hubTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update Pane States
            hubPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === target) {
                    pane.classList.add('active');
                }
            });

            // Smooth Scroll into view on mobile
            if (window.innerWidth <= 992) {
                const hubContainer = document.querySelector('.hub-container');
                window.scrollTo({
                    top: hubContainer.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Sidebar Toggling
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('sidebar-overlay');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.getElementById('close-sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleSidebar);
    if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    // 8. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
