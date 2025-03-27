document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownList = document.getElementById('dropdownList');
  const dropdownItems = dropdownList.children;
  let selectedItem = null;

  dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('open');
    dropdownBtn.classList.toggle('selected');
  });

  dropdownList.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown-item')) {
      dropdownBtn.textContent = event.target.textContent;

      Array.from(dropdownItems).forEach(i => i.classList.remove('selected'));

      event.target.classList.add('selected');
      selectedItem = event.target;

      dropdownList.classList.remove('open');
      dropdownBtn.classList.remove('selected');
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.classList.remove('open');
      dropdownBtn.classList.remove('selected');
    }
  });
});
