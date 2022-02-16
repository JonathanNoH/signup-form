let password1box = document.querySelector(".div-password");
let password2box = document.querySelector(".div-confirm");

password2box.addEventListener('focusout', (e) => {
    let password1 = document.querySelector("#user-password").value;
    let password2 = document.querySelector("#confirm-password").value;
    if (password1 !== password2) {
        password1box.classList.add("error");
        password2box.classList.add("error");
    } else {
        password1box.classList.remove("error");
        password2box.classList.remove("error");
    }
})