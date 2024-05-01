const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(loginForm);

    const formValues = {};

    for (let [name, value] of formData.entries()) {
        formValues[name] = value;
    }

    const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');

    if (allFieldsFilled) {
        console.log(formValues);
        loginForm.reset();
    } else {
        alert('Wszystkie pola powinny zostać wypełnione.');
    }
});