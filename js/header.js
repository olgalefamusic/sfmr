/**
 * Header Component for Σύλλογος Φίλων Μουσικής Ραφήνας
 * This file creates and injects the header navigation into the page 
 */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your headerHTML and header injection code remains the same) ...

    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a, .brand-title-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const sectionId = this.getAttribute('data-section');

            // Check if the link is an internal section link on the *current* page
            // This condition ensures smooth scroll only for "home" on index.html
            // and potentially other sections if they were on index.html
            if (href && href.startsWith('#')) {
                e.preventDefault(); // Prevent default only for internal hash links

                let targetElement;
                if (sectionId === 'home') {
                    targetElement = document.querySelector('.hero');
                }
                // Add more cases here if other sections are on the index.html and use #links

                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else if (sectionId && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                // This block handles the case where you want 'data-section' links
                // to smooth scroll *only if* you are on index.html.
                // If you remove the 'if' condition here, these links will always
                // smooth scroll even if they are meant for new pages.

                // For example, if you click "About" from index.html, it will smooth scroll
                // instead of going to about.html. This is what's currently happening.
                // To fix this, you need to be explicit.

                // If the link is for a different page, let the browser handle it.
                // Only prevent default and smooth scroll if it's the 'home' link
                // AND we are on the index page.

                if (sectionId === 'home') { // Only apply smooth scroll for 'home'
                     e.preventDefault();
                    let targetElement = document.querySelector('.hero');
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
                // For 'about', 'events', 'contact', the default behavior (navigating to the href) will happen
                // because e.preventDefault() is NOT called for them here.

            }
            // Update active nav item (only for nav links, not brand link)
            // This part might need adjustment if you want active states across different pages.
            if (this.closest('nav')) {
                const navigationLinks = document.querySelectorAll('nav a[data-section]');
                navigationLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Highlight active section on scroll (this is for *within* index.html)
    // This functionality will only work on the index.html page.
    window.addEventListener('scroll', function() {
        const sections = [
            { element: document.querySelector('.hero'), id: 'home' },
            { element: document.querySelector('.about'), id: 'about' },
            { element: document.querySelector('.events'), id: 'events' },
            { element: document.querySelector('.contact'), id: 'contact' }
        ];

        const scrollPos = window.scrollY + 100; // Offset for header
        const navLinks = document.querySelectorAll('nav a[data-section]');

        sections.forEach(section => {
            if (section.element) {
                const sectionTop = section.element.offsetTop;
                const sectionHeight = section.element.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`nav a[data-section="${section.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            }
        });
    });

    // Mobile menu toggle (if needed for future mobile improvements)
    let mobileMenuOpen = false;

    // Add mobile menu button for smaller screens
    function addMobileMenu() {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');

        mobileMenuBtn.addEventListener('click', function() {
            const navUl = nav.querySelector('ul');
            mobileMenuOpen = !mobileMenuOpen;

            if (mobileMenuOpen) {
                navUl.classList.add('mobile-menu-open');
                mobileMenuBtn.innerHTML = '✕';
            } else {
                navUl.classList.remove('mobile-menu-open');
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        nav.prepend(mobileMenuBtn);
    }

    // Check if mobile menu is needed
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                addMobileMenu();
            }
        }
    }

    // Initial check and window resize listener
    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
});
