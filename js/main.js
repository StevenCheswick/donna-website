// Shared Header Component
function initHeader() {
    const headerPlaceholder = document.getElementById('site-header');
    if (!headerPlaceholder) return;

    // Determine base path based on current location
    const path = window.location.pathname;
    const isInBlog = path.includes('/blog/');
    const base = isInBlog ? '../' : '';
    const blogBase = isInBlog ? '' : 'blog/';

    const headerHTML = `
    <nav class="nav">
        <div class="container">
            <div class="nav-brand">
                <a href="${base}index.html" class="nav-logo">Cheswick<span class="nav-tagline">Divorce Solutions LLC</span></a>
            </div>
            <ul class="nav-links">
                <li><a href="${base}index.html">Home</a></li>
                <li><a href="${base}${blogBase}index.html">Blog</a></li>
                <li><a href="${base}pension-valuations.html">Pension Valuations</a></li>
                <li><a href="${base}qdros.html">QDROs</a></li>
                <li><a href="${base}marital-tracings.html">Marital Tracings</a></li>
                <li><a href="${base}resources.html">Resources</a></li>
                <li><a href="${base}contact.html" class="nav-cta">Contact Us</a></li>
            </ul>
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    `;

    headerPlaceholder.innerHTML = headerHTML;

    // Initialize mobile menu toggle for dynamically added nav
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize shared header
    initHeader();
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show success message (in production, this would submit to a server)
            alert('Thank you for your message! Donna will get back to you soon.');
            contactForm.reset();
        });
    }
});
