const inputs = document.querySelectorAll(".inputs");

function focusChange() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blur() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusChange);
  input.addEventListener("blur", blur);
});