const hamburger = document.querySelector('.hamburger');
const dropDownMenu = document.querySelector('.dropdown-menu');

function activateHamburger() {
  hamburger.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

export default activateHamburger;