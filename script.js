document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const carousel = document.querySelector('.carousel');
document.querySelector('.carousel-button.left').addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});
document.querySelector('.carousel-button.right').addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});
