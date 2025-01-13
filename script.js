
function adjustPageWidth() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
  
    if (width > 992 && width <= 1600) {
      container.style.transform = 'scale(0.9)';
      container.style.transformOrigin = 'top center';
    } else if (width > 700 && width <= 767) {
      container.style.transform = 'scale(0.8)';
      container.style.transformOrigin = 'top center';
    } else if (width > 600 && width <= 700) {
      container.style.transform = 'scale(0.75)';
      container.style.transformOrigin = 'top center';
    } else if (width <= 600) {
      container.style.transform = 'scale(0.5)';
      container.style.transformOrigin = 'top center';
    } else {
      container.style.transform = 'scale(1)';
      container.style.transformOrigin = 'top center';
    }
  }
  
  
  window.addEventListener('load', adjustPageWidth);
  window.addEventListener('resize', adjustPageWidth);
  
  document.getElementById('toggleMenu').addEventListener('click', () => {
    const leftMenu = document.querySelector('.left-menu');
    leftMenu.classList.toggle('collapsed');
  });
  
