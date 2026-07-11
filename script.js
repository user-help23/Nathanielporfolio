/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================ */

// ============= DOM ELEMENTS =============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// ============= HAMBURGER MENU =============
/**
 * Toggle mobile menu visibility
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/**
 * Close mobile menu when a nav link is clicked
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener('click', (e) => {
    const isClickInsideNav = e.target.closest('.navbar-container');
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============= SMOOTH SCROLLING =============
/**
 * Smooth scroll navigation (fallback for older browsers)
 * Modern browsers have native smooth scroll via CSS
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle same-page links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Handle CTA button smooth scroll
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const href = ctaButton.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// ============= CONTACT FORM HANDLING =============
/**
 * Handle contact form submission
 * IMPORTANT: No backend is configured. This is UI only.
 * In production, connect this to a backend service or email API.
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Log form data (for demonstration)
    console.log('Form Data:', { name, email, message });
    
    // Show success message
    showNotification('Message received! Thank you for reaching out. I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    /**
     * TODO: CONNECT TO BACKEND
     * Replace the above with an actual API call:
     * 
     * const formData = { name, email, message };
     * 
     * fetch('/api/contact', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(formData)
     * })
     * .then(response => response.json())
     * .then(data => {
     *     showNotification('Message sent successfully!', 'success');
     *     contactForm.reset();
     * })
     * .catch(error => {
     *     console.error('Error:', error);
     *     showNotification('Failed to send message. Please try again.', 'error');
     * });
     */
});

// ============= NOTIFICATION SYSTEM =============
/**
 * Show a temporary notification to the user
 * @param {string} message - The notification message
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'success') {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
            font-weight: 500;
            word-wrap: break-word;
        }
        
        .notification-success {
            background-color: #10b981;
            color: white;
            border-left: 4px solid #059669;
        }
        
        .notification-error {
            background-color: #ef4444;
            color: white;
            border-left: 4px solid #dc2626;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;
        }
        
        .notification-close:hover {
            transform: scale(1.2);
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @media (max-width: 480px) {
            .notification {
                bottom: 20px;
                right: 20px;
                left: 20px;
                max-width: none;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ============= SCROLL ANIMATIONS =============
/**
 * Add scroll animation to elements (fade in on scroll)
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill cards for animation
const animateElements = document.querySelectorAll('.project-card, .skill-card, .contact-item');
animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ============= NAVBAR SCROLL EFFECT =============
/**
 * Add shadow to navbar on scroll
 */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============= KEYBOARD ACCESSIBILITY =============
/**
 * Close mobile menu with Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============= PREVENT PROJECT LINK DEFAULTS =============
/**
 * Prevent placeholder project links from navigating
 */
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // If href is just '#', prevent default
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// ============= PAGE LOAD ANIMATION =============
/**
 * Add fade-in animation to page load
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page with smooth animations
document.addEventListener('DOMContentLoaded', () => {
    // Page is ready - you can add initialization code here
    console.log('Portfolio website loaded successfully!');
});

// Export for potential future module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification
    };
}
