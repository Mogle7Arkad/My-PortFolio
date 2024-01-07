
const contactLink = document.querySelector('.contact-me');
const button = document.querySelector('.btn');

function displayContactLinks() {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });
}

export default displayContactLinks;