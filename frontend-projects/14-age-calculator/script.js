const {DateTime} = luxon;

document.getElementById('calculate-btn').addEventListener('click', () => {
  const inputDate = document.getElementById('datepicker').value;
  if (!inputDate) {
    alert("Please enter a valid date.");
    return;
  }

  const jsDate = new Date(inputDate).toISOString().split('T')[0];
  const birthDate = DateTime.fromISO(jsDate);
  const now = DateTime.now();

  if (birthDate > now) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  const {years, months, days} = now.diff(birthDate, ['years', 'months', 'days']).toObject();

  document.getElementById('result').innerText =
    `You are ${Math.floor(years)} years, ${Math.floor(months)} months, and ${Math.floor(days)} days old.`;
});
