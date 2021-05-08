const sign_in_button = document.querySelector("#sign-in-button");
const sign_up_button = document.querySelector("#sign-up-button");
const conteiners = document.querySelector(".conteiners");

sign_up_button.addEventListener('click', function () {
    conteiners.classList.add("sign-up-mode");
});

sign_in_button.addEventListener('click',function () {
    conteiners.classList.remove("sign-up-mode");
});

document.write('hello');
