const sign_in_button = document.querySelector("#sign-in-button");
const sign_up_button = document.querySelector("#sign-up-button");
const conteiners = document.querySelector(".conteiners");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");
const togglePassword3 = document.querySelector("#togglePassword3");
const password3 = document.querySelector("#password3");


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
togglePassword3.addEventListener('click', function (e) {
    const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
    password3.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});



function validatePassword() {
    var password2 = document.getElementById("password2").value;
    var password3 = document.getElementById("password3").value;

    if(password2 != password3) {
        alert("Password does not match");
        return false;
    }
    return true;
}