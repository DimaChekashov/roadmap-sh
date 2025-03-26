document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const parent = this.parentElement;
    if (!parent.classList.contains('active')) {
      document.querySelectorAll('.accordion-item.active').forEach(item => item.classList.remove('active'));
    }
    parent.classList.toggle('active');
  });
});
