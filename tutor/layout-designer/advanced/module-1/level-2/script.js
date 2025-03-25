document.getElementById('toggle-switch').addEventListener('change', function() {
  this.setAttribute('aria-checked', this.checked);
});

document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    
    button.setAttribute('aria-expanded', !expanded);
    panel.hidden = expanded;
    
    if (expanded) {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});