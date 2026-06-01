// Notification close functionality
const closeBtn = document.querySelector('.notification-close');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        const notification = document.getElementById('contactNotification');
        if (notification) {
            notification.classList.add('hidden');
        }
    });
}

// Navigation toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    const toggleMenu = () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));

        const icon = navToggle.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.textContent = isOpen ? 'close' : 'menu';
        }
    };

    navToggle.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'menu';
            }
        });
    });
}

// Showcase filter functionality
const showcaseToggles = document.querySelectorAll('.showcase-toggle');
const showcaseCards = document.querySelectorAll('.showcase-card');

showcaseToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const filter = toggle.getAttribute('data-filter');

        // Update active button
        showcaseToggles.forEach(btn => btn.classList.remove('active'));
        toggle.classList.add('active');

        // Filter cards
        showcaseCards.forEach(card => {
            card.style.display = 'none';
            if (card.classList.contains(filter)) {
                card.style.display = 'grid';
            }
        });
    });
});

