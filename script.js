function applyRandomColors() {
    const colors = ['blue', 'red', 'green'];
    const h3Elements = document.querySelectorAll('h3');
  
    h3Elements.forEach(h3 => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      h3.style.color = randomColor;
    });
  }
  
  document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', applyRandomColors);
  });
  