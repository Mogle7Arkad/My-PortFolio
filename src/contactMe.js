
const contactLink = document.querySelector('.contact-me');
const button = document.querySelector('.btn');

function displayContactLinks() {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (button.innerHTML === 'CONTACT ME') {
      button.innerHTML = 'CLOSE';
      contactLink.style.display = 'block';
    } else {
      button.innerHTML = 'CONTACT ME';
      contactLink.style.display = 'none';
    }
  });
}

export default displayContactLinks;