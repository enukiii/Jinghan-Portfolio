// ========================
// INTRO SPLASH SCREEN LOGIC
// ========================

document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('intro-overlay');
    
    // Show intro for 3.5 seconds, then fade out
    setTimeout(function() {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            // Remove from DOM after fade completes
            setTimeout(function() {
                introOverlay.style.display = 'none';
            }, 800);
        }
    }, 3500);
});

// ========================
// FORM HANDLING
// ========================

// Simple contact form handler
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for your message!';
        form.reset();
    });
}

// ========================
// SMOOTH SCROLLING
// ========================

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================
// HAMBURGER MENU
// ========================

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('navbar-hamburger');
    var navLinks = document.getElementById('navbar-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});
