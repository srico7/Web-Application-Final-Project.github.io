const sign_in_button = document.querySelector("#sign-in-button");
const sign_up_button = document.querySelector("#sign-up-button");
const conteiners = document.querySelector(".containers");

sign_up_button.addEventListener('click', () => {
    containers.classList.add("sign-up-mode");
});

sign_in_button.addEventListener('click', () => {
    containers.classList.remove("sign-up-mode");
});