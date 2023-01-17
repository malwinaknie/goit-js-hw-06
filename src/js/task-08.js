const input = document.querySelector('.login-form');
const emailInput = input.elements.email;
const passwordInput = input.elements.password;

input.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value === "" || passwordInput.value === "") {
        alert('All the fields are required!')
    }
    else {
        const inputData = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        console.log(inputData);
        input.reset();
    };
});