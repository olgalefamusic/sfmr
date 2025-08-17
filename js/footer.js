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
                                <li><a href="about.html">Σχετικά με εμάς</a></li>
                                <li><a href="events-news.html">Εκδηλώσεις</a></li>
                                <li><a href="contact.html">Επικοινωνία</a></li>
                                <li><a href="register.html">Εγγραφή Μελών</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Επικοινωνία</h4>
                            <ul>
                                <li>📍 Ωδείο McGeorge</li>
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
                        <div class="footer-legal-links">
                            <a href="privacy-policy.html">Πολιτική Απορρήτου</a> | 
                            <a href="terms-of-service.html">Όροι Χρήσης</a>
                        </div>
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
