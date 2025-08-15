/* Header content injection script */  

// HTML for header
const headerHTML = `
<header class="site-header">
  <div class="container nav-wrap">
    <a href="#" class="brand">
      <img src="images/sfmr-logo.jpg" alt="Λογότυπο Σύλλογος Φίλων Μουσικής Ραφήνας" class="brand-logo" />
      <span class="brand-text">Σύλλογος Φίλων Μουσικής Ραφήνας</span>
    </a>
    <nav class="main-nav" aria-label="Κύρια πλοήγηση">
      <button class="nav-toggle" aria-label="Άνοιγμα μενού" aria-expanded="false">&#9776;</button>
      <ul class="nav-list">
        <li><a class="active" href="#">Αρχική σελίδα</a></li>
        <li><a href="#">Σχετικά με τον σύλλογο</a></li>
        <li><a href="#">Εκδηλώσεις & Νέα</a></li>
        <li><a href="#">Επικοινωνία</a></li>
        <li><a class="btn btn-small" href="#">Εγγραφή μελών</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

// Insert at top of the body
window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const oldHeader = document.querySelector('.site-header');
  if (oldHeader) oldHeader.remove();
  const wrapper = document.createElement('div');
  wrapper.innerHTML = headerHTML;
  body.insertBefore(wrapper.firstChild, body.firstChild);

  // Enable mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  // Header scroll class toggle
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
});
