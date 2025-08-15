/* Footer content injection script */

const footerHTML = `
<footer class="site-footer">
  <div class="container foot-grid">
    <div class="foot-brand">
      <div class="brand-inline">
        <img src="images/sfmr-logo.jpg" alt="ΣΦΜ Ραφήνας" class="footer-logo" />
        <strong>ΣΦΜ Ραφήνας</strong>
      </div>
      <p>Καλλιεργούμε τη μουσική παιδεία και φέρνουμε κοντά την κοινότητα μέσα από δράσεις, σεμινάρια και συναυλίες.</p>
    </div>
    <div class="foot-links">
      <h4>Μενού</h4>
      <ul>
        <li><a href="#">Αρχική σελίδα</a></li>
        <li><a href="#">Σχετικά με τον σύλλογο</a></li>
        <li><a href="#">Εκδηλώσεις & Νέα</a></li>
        <li><a href="#">Επικοινωνία</a></li>
        <li><a href="#">Εγγραφή μελών</a></li>
      </ul>
    </div>
    <div class="foot-news">
      <h4>Ενημερώσεις</h4>
      <p>Εγγράψου στο newsletter μας για να μαθαίνεις πρώτος τα νέα και τις εκδηλώσεις.</p>
      <form class="newsletter" action="#" method="post">
        <input type="email" name="email" placeholder="Το email σου" aria-label="Email">
        <button type="submit" class="btn btn-small">Εγγραφή</button>
      </form>
    </div>
  </div>
  <div class="footer-base">
    <div class="container base-wrap">
      <span>© <span id="year"></span> Σύλλογος Φίλων Μουσικής Ραφήνας</span>
      <span class="sep">•</span>
      <a href="#">Όροι χρήσης</a>
      <span class="sep">•</span>
      <a href="#">Πολιτική απορρήτου</a>
    </div>
  </div>
</footer>
`;

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const oldFooter = document.querySelector('.site-footer');
  if (oldFooter) oldFooter.remove();
  const wrapper = document.createElement('div');
  wrapper.innerHTML = footerHTML;
  body.appendChild(wrapper.firstChild);

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
