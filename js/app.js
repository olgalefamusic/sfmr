// Music Association Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initMobileNav();
    initEventFilters();
    initForms();
    initSmoothScrolling();
    
    // Show home section by default
    showSection('home');
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const target = this.getAttribute('href').substring(1);
            
            // Show target section
            showSection(target);
            
            // Close mobile menu if open
            closeMobileNav();
        });
    });
}

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Mobile navigation
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
        
        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }
}

function closeMobileNav() {
    const navList = document.getElementById('navList');
    if (navList) {
        navList.classList.remove('active');
    }
}

// Event filtering functionality
function initEventFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const eventCards = document.querySelectorAll('.event-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            eventCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });
        });
    });
}

// Form handling
function initForms() {
    initMembershipForm();
    initContactForm();
}

// Membership form
function initMembershipForm() {
    const form = document.getElementById('membershipForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateMembershipForm()) {
                submitMembershipForm();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
}

function validateMembershipForm() {
    const form = document.getElementById('membershipForm');
    const fullName = form.querySelector('#fullName');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const agreeTerms = form.querySelector('#agreeTerms');
    
    let isValid = true;
    
    // Clear previous errors
    clearErrors(form);
    
    // Validate full name
    if (!fullName.value.trim()) {
        showError(fullName, 'Το ονοματεπώνυμο είναι υποχρεωτικό');
        isValid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Το email είναι υποχρεωτικό');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Παρακαλώ εισάγετε έγκυρο email');
        isValid = false;
    }
    
    // Validate phone
    if (!phone.value.trim()) {
        showError(phone, 'Το τηλέφωνο είναι υποχρεωτικό');
        isValid = false;
    }
    
    // Validate terms agreement
    if (!agreeTerms.checked) {
        showError(agreeTerms, 'Πρέπει να συμφωνήσετε με τους όρους');
        isValid = false;
    }
    
    return isValid;
}

function submitMembershipForm() {
    const form = document.getElementById('membershipForm');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Υποβολή...';
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = 'Υποβολή Αίτησης';
        
        // Show success message
        showSuccessMessage(form, 'Η αίτησή σας υποβλήθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.');
        
        // Reset form
        form.reset();
    }, 2000);
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                submitContactForm();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
}

function validateContactForm() {
    const form = document.getElementById('contactForm');
    const contactName = form.querySelector('#contactName');
    const contactEmail = form.querySelector('#contactEmail');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');
    
    let isValid = true;
    
    // Clear previous errors
    clearErrors(form);
    
    // Validate name
    if (!contactName.value.trim()) {
        showError(contactName, 'Το όνομα είναι υποχρεωτικό');
        isValid = false;
    }
    
    // Validate email
    if (!contactEmail.value.trim()) {
        showError(contactEmail, 'Το email είναι υποχρεωτικό');
        isValid = false;
    } else if (!isValidEmail(contactEmail.value)) {
        showError(contactEmail, 'Παρακαλώ εισάγετε έγκυρο email');
        isValid = false;
    }
    
    // Validate subject
    if (!subject.value.trim()) {
        showError(subject, 'Το θέμα είναι υποχρεωτικό');
        isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Το μήνυμα είναι υποχρεωτικό');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες');
        isValid = false;
    }
    
    return isValid;
}

function submitContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Αποστολή...';
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = 'Αποστολή Μηνύματος';
        
        // Show success message
        showSuccessMessage(form, 'Το μήνυμά σας στάλθηκε επιτυχώς! Θα σας απαντήσουμε σύντομα.');
        
        // Reset form
        form.reset();
    }, 2000);
}

// Validation helpers
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    // Clear previous error
    clearFieldError(field);
    
    if (required && !value) {
        showError(field, 'Αυτό το πεδίο είναι υποχρεωτικό');
        return false;
    }
    
    if (type === 'email' && value && !isValidEmail(value)) {
        showError(field, 'Παρακαλώ εισάγετε έγκυρο email');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    clearFieldError(field);
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    
    // Insert after the field
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function clearErrors(form) {
    const errorElements = form.querySelectorAll('.form-error');
    errorElements.forEach(element => element.remove());
    
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
}

function showSuccessMessage(form, message) {
    // Remove existing success message
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    // Create success message
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;
    
    // Insert at the top of the form
    form.insertBefore(successElement, form.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (successElement.parentNode) {
            successElement.remove();
        }
    }, 5000);
    
    // Scroll to success message
    successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Smooth scrolling
function initSmoothScrolling() {
    // Enable smooth scrolling for anchor links
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
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll effects for better UX
window.addEventListener('scroll', debounce(() => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(var(--color-surface), 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--color-surface)';
        header.style.backdropFilter = 'none';
    }
}, 10));

// Initialize intersection observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// Call after DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
        
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + hash) {
                link.classList.add('active');
            }
        });
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile nav
    if (e.key === 'Escape') {
        closeMobileNav();
    }
    
    // Enter key on nav toggle opens/closes mobile nav
    if (e.key === 'Enter' && e.target.id === 'navToggle') {
        e.preventDefault();
        const navList = document.getElementById('navList');
        navList.classList.toggle('active');
    }
});

// Performance optimization: lazy load content
function lazyLoadContent() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadContent);

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Close mobile nav on swipe
        if (diff > 0) {
            closeMobileNav();
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Could add user-friendly error messages here
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        validateMembershipForm,
        validateContactForm,
        isValidEmail
    };
}
