// Select all inputs and textareas inside your form
const formElements = document.querySelectorAll('input, textarea');

formElements.forEach(element => {
  element.addEventListener('blur', () => {
    // checkValidity() is a built-in browser check for 'required' or 'type="email"'
    if (!element.checkValidity()) {
      element.classList.add('error');
    } else {
      element.classList.remove('error');
    }
  });
});
