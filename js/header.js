/**
 * Header Component for Σύλλογος Φίλων Μουσικής Ραφήνας
 * This file creates and injects the header navigation into the page
 */

document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header>
            <div class="container">
                <div class="header-content">
                    <div class="header-brand">
                        <img src="images/sfmr-logo.jpg" alt="ΣΦΜΡ" class="header-logo">
                        <div class="header-title">
                            <a href="index.html" class="brand-title-link" data-section="home">
                                <h1>Σύλλογος Φίλων Μουσικής Ραφήνας</h1>
                            </a>
                            <span class="header-subtitle">Ενώνουμε τους λάτρεις της μουσικής</span>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html" data-section="home">Αρχική</a></li> 
                            <li><a href="about.html" data-section="about">Σχετικά με εμάς</a></li>
                            <li><a href="events-news.html" data-section="events">Εκδηλώσεις & Νέα</a></li>
                            <li><a href="contact.html" data-section="contact">Επικοινωνία</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    `;

    // Insert header into the page
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a, .brand-title-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const sectionId = this.getAttribute('data-section');

            // Check if the link is an internal section link on the *current* page
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
            } else if (sectionId && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/')) {
                // This block is slightly problematic if you *also* have sections on other pages
                // that you want to scroll to using data-section.
                // However, based on previous conversation, 'home' is the primary one for smooth scroll.

                if (sectionId === 'home') { // Only apply smooth scroll for 'home' on the index page
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
                // For 'about', 'events', 'contact' (when on index.html), the default navigation will occur
                // because e.preventDefault() is NOT called in this 'else if' block for them.
            }
            // Update active nav item (only for nav links, not brand link)
            if (this.closest('nav')) {
                const navigationLinks = document.querySelectorAll('nav a[data-section]');
                navigationLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Highlight active section on scroll (this is for *within* index.html)
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

    // Mobile menu toggle
    let mobileMenuOpen = false;

    function addMobileMenu() {
        const nav = document.querySelector('nav');
        // Ensure nav exists before trying to prepend
        if (!nav) {
            console.warn("Navigation element (nav) not found. Mobile menu not added.");
            return;
        }
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');

        mobileMenuBtn.addEventListener('click', function() {
            const navUl = nav.querySelector('ul');
            if (navUl) { // Ensure ul exists before manipulating
                mobileMenuOpen = !mobileMenuOpen;

                if (mobileMenuOpen) {
                    navUl.classList.add('mobile-menu-open');
                    mobileMenuBtn.innerHTML = '✕';
                } else {
                    navUl.classList.remove('mobile-menu-open');
                    mobileMenuBtn.innerHTML = '☰';
                }
            }
        });

        nav.prepend(mobileMenuBtn);
    }

    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                addMobileMenu();
            }
        } else { // If screen size goes above 768px and mobile menu button exists, remove it
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.remove();
                // Also ensure the mobile-menu-open class is removed if the menu was open
                const navUl = document.querySelector('nav ul');
                if (navUl) {
                    navUl.classList.remove('mobile-menu-open');
                }
                mobileMenuOpen = false; // Reset state
            }
        }
    }

    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
});
