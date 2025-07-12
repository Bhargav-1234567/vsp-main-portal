/**
 * Visa Express Consultants - JavaScript Functionality
 * Professional visa consultation website scripts
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDropdowns();
    initializeForms();
    initializeAnimations();
    initializeScrollEffects();
    initializeNewsletterForm();
    initializeVideoPlaceholders();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }
        });
    });

    // Highlight active navigation item based on current page
    highlightActiveNavItem();
}

/**
 * Dropdown menu functionality
 */
function initializeDropdowns() {
    const dropdownItems = document.querySelectorAll('.dropdown');
    
    dropdownItems.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop hover behavior
        if (window.innerWidth >= 992) {
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.classList.add('show');
                dropdownToggle.setAttribute('aria-expanded', 'true');
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.classList.remove('show');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            });
        }
        
        // Click behavior for mobile and accessibility
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const isOpen = dropdownMenu.classList.contains('show');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('show');
                    }
                });
                
                if (isOpen) {
                    dropdownMenu.classList.remove('show');
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                } else {
                    dropdownMenu.classList.add('show');
                    dropdownToggle.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                const toggle = menu.parentElement.querySelector('.dropdown-toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
}

/**
 * Form validation and submission
 */
function initializeForms() {
    const consultationForm = document.getElementById('consultationForm');
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', handleConsultationSubmission);
        
        // Real-time validation
        const requiredFields = consultationForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', validateField);
            field.addEventListener('input', clearFieldError);
        });
        
        // Phone number formatting
        const phoneField = document.getElementById('phone');
        if (phoneField) {
            phoneField.addEventListener('input', formatPhoneNumber);
        }
    }
    
    // Newsletter form handlers
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmission);
    });
}

/**
 * Handle consultation form submission
 */
function handleConsultationSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    
    // Validate all fields
    if (!validateForm(form)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        setButtonLoading(submitButton, false);
        
        // Show success message
        showNotification('Thank you! We\'ll contact you within 24 hours.', 'success');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, 2000);
}

/**
 * Handle newsletter form submission
 */
function handleNewsletterSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!validateEmail(emailInput.value)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    setButtonLoading(submitButton, true);
    
    // Simulate subscription (replace with actual API call)
    setTimeout(() => {
        form.reset();
        setButtonLoading(submitButton, false);
        showNotification('Successfully subscribed to our newsletter!', 'success');
    }, 1500);
}

/**
 * Form validation functions
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Remove existing error styling
    clearFieldError({ target: field });
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required.');
        return false;
    }
    
    // Email validation
    if (fieldType === 'email' && value && !validateEmail(value)) {
        showFieldError(field, 'Please enter a valid email address.');
        return false;
    }
    
    // Phone validation
    if (fieldName === 'phone' && value && !validatePhone(value)) {
        showFieldError(field, 'Please enter a valid phone number.');
        return false;
    }
    
    // Name validation (no numbers)
    if ((fieldName === 'firstName' || fieldName === 'lastName') && value && !/^[a-zA-Z\s'-]+$/.test(value)) {
        showFieldError(field, 'Please enter a valid name (letters only).');
        return false;
    }
    
    return true;
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('is-invalid');
    const errorMessage = field.parentElement.querySelector('.invalid-feedback');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Remove all non-digit characters
    const phoneDigits = phone.replace(/\D/g, '');
    // Check if it's a valid length (10-15 digits)
    return phoneDigits.length >= 10 && phoneDigits.length <= 15;
}

function formatPhoneNumber(e) {
    const input = e.target;
    let value = input.value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX for US numbers
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    
    input.value = value;
}

/**
 * Button loading state management
 */
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = 'Processing...';
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Submit';
    }
}

/**
 * Notification system
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification alert alert-${type === 'error' ? 'danger' : type} alert-dismissible`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-radius: 8px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${getNotificationIcon(type)} me-2"></i>
            <span>${message}</span>
            <button type="button" class="btn-close ms-auto" aria-label="Close"></button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-triangle';
        case 'warning': return 'exclamation-circle';
        default: return 'info-circle';
    }
}

/**
 * Scroll animations and effects
 */
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .blog-card, .team-card, .value-card, .feature-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/**
 * Smooth scroll effects
 */
function initializeScrollEffects() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize newsletter form in sidebar
 */
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        // Email validation on blur
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                if (this.value && !validateEmail(this.value)) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                }
            });
        }
    }
}

/**
 * Video placeholder functionality
 */
function initializeVideoPlaceholders() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // Simulate video modal (replace with actual video implementation)
            showNotification('Video player would open here in a real implementation.', 'info');
        });
        
        placeholder.style.cursor = 'pointer';
    });
}

/**
 * Highlight active navigation item
 */
function highlightActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Accordion functionality for FAQ
 */
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            const targetCollapse = document.querySelector(target);
            
            if (targetCollapse) {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other accordion items
                const allCollapses = document.querySelectorAll('.accordion-collapse');
                allCollapses.forEach(collapse => {
                    if (collapse !== targetCollapse && collapse.classList.contains('show')) {
                        collapse.classList.remove('show');
                        const button = document.querySelector(`[data-bs-target="#${collapse.id}"]`);
                        if (button) {
                            button.classList.add('collapsed');
                            button.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle current item
                if (isExpanded) {
                    targetCollapse.classList.remove('show');
                    this.classList.add('collapsed');
                    this.setAttribute('aria-expanded', 'false');
                } else {
                    targetCollapse.classList.add('show');
                    this.classList.remove('collapsed');
                    this.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });
});

/**
 * CSS animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
    }
    
    .is-invalid {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
    }
    
    .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875em;
        color: #dc3545;
    }
`;
document.head.appendChild(style);

// Utility functions for external use
window.VisaExpress = {
    showNotification,
    validateEmail,
    validatePhone,
    setButtonLoading
};
