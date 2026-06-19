/**
 * script.js
 * Handles mobile navigation, form validation, and dynamic content.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Set Current Year in Footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle visibility via data attribute (CSS handles the transform)
            primaryNav.setAttribute('data-visible', !isExpanded);
            
            // Prevent scrolling on body when menu is open
            if (!isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // --- 3. Accessible Form Validation ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Get fields
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Reset all errors first
            resetErrors();

            // Validate Full Name
            if (!fullName.value.trim()) {
                showError(fullName, 'Please enter your full name.');
                isValid = false;
            }

            // Validate Email
            if (!email.value.trim()) {
                showError(email, 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address (e.g., name@example.com).');
                isValid = false;
            }

            // Validate Subject
            if (!subject.value.trim()) {
                showError(subject, 'Please enter a subject for your message.');
                isValid = false;
            }

            // Validate Message
            if (!message.value.trim()) {
                showError(message, 'Please enter your message.');
                isValid = false;
            }

            // If valid, simulate submission
            if (isValid) {
                const successContainer = document.getElementById('form-success');
                successContainer.textContent = 'Thank you! Your message has been sent successfully.';
                successContainer.classList.remove('sr-only');
                contactForm.reset();
                
                // Set focus to success message for screen readers
                successContainer.setAttribute('tabindex', '-1');
                successContainer.focus();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successContainer.classList.add('sr-only');
                    successContainer.textContent = '';
                }, 5000);
            }
        });

        // Clear error on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.getAttribute('aria-invalid') === 'true') {
                    clearError(input);
                }
            });
        });
    }

    // --- Helper Functions for Validation ---
    
    function showError(input, message) {
        input.setAttribute('aria-invalid', 'true');
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }

    function clearError(input) {
        input.removeAttribute('aria-invalid');
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }

    function resetErrors() {
        const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
        inputs.forEach(clearError);
    }

    function isValidEmail(email) {
        // Basic email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
