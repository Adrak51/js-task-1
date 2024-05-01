const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
    const value = validationInput.value;
    const expectedLength = parseInt(validationInput.getAttribute('data-length'));
    if (value.length === expectedLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});