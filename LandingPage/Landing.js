const navbar = document.getElementById('navbar');
const scrollThreshold = 100; // Adjust scroll distance for color change

window.addEventListener('scroll', () => {
  if (window.pageYOffset > scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
