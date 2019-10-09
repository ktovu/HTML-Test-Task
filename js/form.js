(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    const showPassButton = document.getElementById('show-password');
    const passInput = document.getElementById('password-input');

    showPassButton.addEventListener('click', (e) => {
      passInput.setAttribute('type', 'text');
      e.stopPropagation();
      body.addEventListener('click', () => {
        passInput.setAttribute('type', 'password');
      }, {once: true});
    });
  });
})();
