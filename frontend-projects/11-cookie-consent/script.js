document.addEventListener('DOMContentLoaded', () => {
  const cookieConsentEl = document.getElementById('cookieConsent');
  const showConsent = !localStorage.getItem('cookieConsent');

  if (showConsent) {
    cookieConsentEl.style.display = 'block';
  }

  const hideConsent = () => {
    cookieConsentEl.style.display = 'none';
  };

  document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    hideConsent();
  });

  document.getElementById('closeCookie').addEventListener('click', hideConsent);
});
