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

const neuralSkills = document.querySelectorAll('.neural-skill');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createSkillPulse(card, x, y) {
    if (prefersReducedMotion || document.hidden) return;
    const pulse = document.createElement('span');
    pulse.className = 'skill-pulse';
    pulse.style.left = `${x}px`;
    pulse.style.top = `${y}px`;
    card.appendChild(pulse);
    pulse.addEventListener('animationend', () => pulse.remove());
}

neuralSkills.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
        const now = Date.now();
        const lastPulse = Number(card.dataset.lastPulse || 0);
        if (now - lastPulse < 180) return;
        card.dataset.lastPulse = String(now);
        const rect = card.getBoundingClientRect();
        createSkillPulse(card, event.clientX - rect.left, event.clientY - rect.top);
    });
});

setInterval(() => {
    if (!neuralSkills.length) return;
    const card = neuralSkills[Math.floor(Math.random() * neuralSkills.length)];
    createSkillPulse(
        card,
        24 + Math.random() * (card.clientWidth - 48),
        24 + Math.random() * (card.clientHeight - 48)
    );
}, 1300);
