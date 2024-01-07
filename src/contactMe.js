
const contactLink = document.querySelector('.contact-me');
const button = document.querySelector('.btn');

function displayContactLinks() {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (button.innerHTML === 'CONTACT ME') {
      button.innerHTML = 'CLOSE';
    } else {
      button.innerHTML = 'CONTACT ME';
    }
  });
}

export default displayContactLinks;