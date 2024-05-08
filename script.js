// Clickable arrow to make the dropdown menu appear
const drops = document.querySelectorAll('.drop-down');

drops.forEach((drop) => {
  drop.addEventListener('click', () => {
    drop.classList.toggle('active');
  });
});

// Changing the whole app Dark Mode
