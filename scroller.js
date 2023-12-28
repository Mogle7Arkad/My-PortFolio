function scroll() {
  document.querySelectorAll('a[href^="#"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const targetHref = event.currentTarget.getAttribute('href');

      if (targetHref) {
        const targetElement = document.querySelector(targetHref);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    });
  });
}

export default scroll;