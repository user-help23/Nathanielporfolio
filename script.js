/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================ */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typedName = document.getElementById('typed-name');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    const navContainer = event.target.closest('.navbar-container');
    if (!navContainer && navMenu && navMenu.classList.contains('active')) {
        hamburger?.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        const href = ctaButton.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetElement = document.getElementById(href.substring(1));
            targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

const fullName = 'Nathaniel Patrick';
let index = 0;

function typeName() {
    if (!typedName) return;
    if (index <= fullName.length) {
        typedName.textContent = fullName.slice(0, index);
        index += 1;
        setTimeout(typeName, 90);
    }
}

typeName();
