function scroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      element.(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth';
      });
    });
  });
}
