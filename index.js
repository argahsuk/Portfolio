let containers = document.querySelectorAll('.project-item');
let timeout;

containers.forEach(container => {   
  let box = container.querySelectorAll('p');
  
  container.addEventListener('mouseenter', () => {
    timeout = setTimeout(() => {
      box.forEach(p => {
        p.style.display = 'block';
      });
    }, 600);
  });

  container.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
    box.forEach(p => {
      p.style.display = 'none';
    });
  });
});
