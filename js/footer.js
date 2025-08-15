/**
 * Footer Component for Σύλλογος Φίλων Μουσικής Ραφήνας
 * This file creates and injects the footer content into the page
 */

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <h3>Σύλλογος Φίλων Μουσικής Ραφήνας</h3>
                        <p>Προωθούμε τη μουσική κουλτούρα στην Ραφήνα από το 1995</p>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-section">
                            <h4>Γρήγορες Συνδέσεις</h4>
                            <ul>
                                <li><a href="#about">Σχετικά με εμάς</a></li>
                                <li><a href="#events">Εκδηλώσεις</a></li>
                                <li><a href="#contact">Επικοινωνία</a></li>
                                <li><a href="#membership">Εγγραφή Μελών</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Επικοινωνία</h4>
                            <ul>
                                <li>📍 Κεντρική Πλατεία Ραφήνας</li>
                                <li>📞 +30 229 40 XXXXX</li>
                                <li>✉️ info@sfmrafinas.gr</li>
                                <li>🌐 www.sfmrafinas.gr</li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Ακολουθήστε μας</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/sfmRafinas" target="_blank" rel="noopener" aria-label="Facebook">
                                    <span class="social-icon">📘</span> Facebook
                                </a>
                                <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
                                    <span class="social-icon">📷</span> Instagram
                                </a>
                                <a href="#" target="_blank" rel="noopener" aria-label="YouTube">
                                    <span class="social-icon">📺</span> YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <hr>
                    <div class="footer-bottom-content">
                        <p>&copy; ${currentYear} Σύλλογος Φίλων Μουσικής Ραφήνας. Όλα τα δικαιώματα διατηρούνται.</p>
                        <p class="footer-credits">
                            Ραφήνα, Αττική | 
                            <a href="mailto:info@sfmrafinas.gr">info@sfmrafinas.gr</a> | 
                            <a href="tel:+302294000000">+30 229 40 XXXXX</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Insert footer into the page
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
    
    // Add footer-specific CSS styles
    const footerStyles = `
        <style>
        /* Footer Specific Styles */
        footer {
            background: var(--text-dark);
            color: var(--text-light);
            padding: 3rem 0 1rem 0;
            margin-top: 2rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-info h3 {
            color: var(--accent-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .footer-info p {
            opacity: 0.9;
            line-height: 1.6;
        }
        
        .footer-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        
        .footer-section h4 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
            font-size: 1.1rem;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 0.5rem;
        }
        
        .footer-section ul {
            list-style: none;
            padding: 0;
        }
        
        .footer-section ul li {
            margin-bottom: 0.5rem;
            opacity: 0.9;
        }
        
        .footer-section ul li a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-section ul li a:hover {
            color: var(--accent-color);
        }
        
        .social-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .social-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s ease, transform 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .social-links a:hover {
            color: var(--accent-color);
            transform: translateX(5px);
        }
        
        .social-icon {
            font-size: 1.2rem;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 1.5rem;
        }
        
        .footer-bottom hr {
            border: none;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin-bottom: 1.5rem;
        }
        
        .footer-bottom-content {
            text-align: center;
        }
        
        .footer-bottom-content p {
            margin-bottom: 0.5rem;
            opacity: 0.8;
        }
        
        .footer-credits {
            font-size: 0.9rem;
        }
        
        .footer-credits a {
            color: var(--secondary-color);
            text-decoration: none;
        }
        
        .footer-credits a:hover {
            color: var(--accent-color);
        }
        
        /* Mobile Footer Styles */
        @media (max-width: 768px) {
            footer {
                padding: 2rem 0 1rem 0;
            }
            
            .footer-links {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .social-links {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .footer-bottom-content {
                font-size: 0.9rem;
            }
        }
        </style>
    `;
    
    // Add footer styles to the document head
    document.head.insertAdjacentHTML('beforeend', footerStyles);
    
    // Add scroll to top functionality
    const footerLogo = document.querySelector('footer h3');
    if (footerLogo) {
        footerLogo.style.cursor = 'pointer';
        footerLogo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add current year update functionality
    function updateYear() {
        const yearElement = document.querySelector('.footer-bottom-content p');
        if (yearElement) {
            const newYear = new Date().getFullYear();
            yearElement.innerHTML = yearElement.innerHTML.replace(/\d{4}/, newYear);
        }
    }
    
    // Update year on New Year (if page is kept open)
    setInterval(updateYear, 60000); // Check every minute
    
    // Form submission handling for contact form (if it exists)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple form validation
            if (!name || !email) {
                alert('Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.');
                return;
            }
            
            // Simulate form submission
            alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα μαζί σας.');
            this.reset();
        });
    }
});
