// For Dark Mode and Light Mode
// 1. Get the element with the class of "toggle-theme"
const theme = document.querySelector('.toggle-theme');

// 2. Listen for a click event on the element
theme.addEventListener('click', () => {
  // 3. Toggle the class of the body
  document.body.classList.toggle('dark-theme');
});

