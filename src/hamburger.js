const hamburger = document.querySelector('.hamburger');
const dropDownMenu = document.querySelector('.dropdown-menu');
const navLink = document.querySelector('.nav-link');

function activateHamburger() {
  hamburger.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

function closeDropDown() {
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLink.contains(e.target)) {
      dropDownMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}

export { activateHamburger, closeDropDown };