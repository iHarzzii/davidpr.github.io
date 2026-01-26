// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page Load Effect
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Reveal elements on scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Si es un contenedor de elementos escalonados
            if (entry.target.classList.contains('stagger-container')) {
                const items = entry.target.querySelectorAll('.stagger-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 100);
                });
            }
        }
    });
}, { threshold: 0.1 });

// Initialize observers
document.addEventListener('DOMContentLoaded', () => {
    createGlow();
    document.querySelectorAll('.reveal, .stagger-container').forEach(el => {
        revealObserver.observe(el);
    });
});

// Navbar active on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
        nav.style.borderBottomColor = 'var(--primary)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.borderBottomColor = 'var(--border-color)';
    }
});
