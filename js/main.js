// ========================================
// DUBAI SYNDICATE â Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Scroll Animations (Intersection Observer)
    const animateElements = document.querySelectorAll(
        '.card, .chapter-card, .service-card, .testimonial-card, .about-feature, .cat-item, .meetup-card, .pricing-card, .step, .faq-item, .contact-item'
    );

    animateElements.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 60);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animateElements.forEach(el => observer.observe(el));

    // Contact Form â WhatsApp
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const business = document.getElementById('business').value;
            const category = document.getElementById('category').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;

            const waMessage = encodeURIComponent(
                `*New Enquiry â Dubai Syndicate*\n\n` +
                `*Name:* ${name}\n` +
                `*Mobile:* ${mobile}\n` +
                `*Business:* ${business}\n` +
                `*Category:* ${category}\n` +
                `*Interested In:* ${interest}\n` +
                `*Message:* ${message || 'N/A'}`
            );

            window.open(`https://wa.me/971557133786?text=${waMessage}`, '_blank');
        });
    }

    // Hero Particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? 'rgba(240, 192, 64, 0.3)' : 'rgba(139, 92, 246, 0.3)'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 4}s;
            `;
            particlesContainer.appendChild(particle);
        }

        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                25% { transform: translate(${Math.random() * 40 - 20}px, -30px) scale(1.2); opacity: 0.6; }
                50% { transform: translate(${Math.random() * 40 - 20}px, -60px) scale(0.8); opacity: 0.4; }
                75% { transform: translate(${Math.random() * 40 - 20}px, -30px) scale(1.1); opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    }

    // Counter Animation for stats
    const stats = document.querySelectorAll('.stat-num');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const num = parseInt(text.replace(/,/g, ''));
                if (isNaN(num)) return;

                const suffix = text.replace(/[0-9,]/g, '');
                let current = 0;
                const increment = num / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        current = num;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current).toLocaleString() + suffix;
                }, 30);

                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => counterObserver.observe(stat));
});
