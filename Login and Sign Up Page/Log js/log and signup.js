const sign_in_button = document.querySelector("#sign-in-button");
const sign_up_button = document.querySelector("#sign-up-button");
const conteiners = document.querySelector(".conteiners");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");

sign_up_button.addEventListener('click', function () {
    conteiners.classList.add("sign-up-mode");
});

sign_in_button.addEventListener('click',function () {
    conteiners.classList.remove("sign-up-mode");
});

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});