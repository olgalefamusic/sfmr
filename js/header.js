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
                            <h1>Σύλλογος Φίλων Μουσικής Ραφήνας</h1>
                            <span class="header-subtitle">Ενώνουμε τους λάτρεις της μουσικής</span>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html" data-section="home">Αρχική</a></li>
                            <li><a href="about.html" data-section="about">Σχετικά</a></li>
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
    
    // Add smooth scrolling functionality
    const navLinks = document.querySelectorAll('nav a[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            let targetElement;
            
            // Map sections to actual elements
            switch(sectionId) {
                case 'home':
                    targetElement = document.querySelector('.hero');
                    break;
                case 'about':
                    targetElement = document.querySelector('.about');
                    break;
                case 'events':
                    targetElement = document.querySelector('.events');
                    break;
                case 'contact':
                    targetElement = document.querySelector('.contact');
                    break;
                default:
                    targetElement = document.body;
            }
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav item
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        const sections = [
            { element: document.querySelector('.hero'), id: 'home' },
            { element: document.querySelector('.about'), id: 'about' },
            { element: document.querySelector('.events'), id: 'events' },
            { element: document.querySelector('.contact'), id: 'contact' }
        ];
        
        const scrollPos = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            if (section.element) {
                const sectionTop = section.element.offsetTop;
                const sectionHeight = section.element.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    // Remove active class from all nav links
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current section nav link
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
