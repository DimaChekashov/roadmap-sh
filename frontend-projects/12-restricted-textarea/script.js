const textarea = document.getElementById('userInput');
const charCountDisplay = document.getElementById('charCount');
const maxChars = 250;

function updateCharCount() {
  const currentLength = textarea.value.length;
  charCountDisplay.textContent = `${currentLength} / ${maxChars}`;
  textarea.classList.toggle('limit-reached', currentLength >= maxChars);
}

textarea.addEventListener('input', updateCharCount);
