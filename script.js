// Clickable arrow to make the dropdown menu appear
const drops = document.querySelectorAll('.drop-down');

drops.forEach((drop) => {
  drop.addEventListener('click', () => {
    drop.classList.toggle('active');
  });
});

// Changing the whole app Dark Mode
const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const sideBar = document.querySelector('.side-bar');
const main = document.querySelector('main');
const card = document.querySelectorAll('.card');
const dropDown = document.querySelectorAll('.drop-down');

darkMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  header.classList.toggle('dark');
  footer.classList.toggle('dark');
  sideBar.classList.toggle('dark');
  main.classList.toggle('dark');
  card.forEach((card) => {
    card.classList.toggle('dark');
  });
  dropDown.forEach((drop) => {
    drop.classList.toggle('dark');
  });
});

