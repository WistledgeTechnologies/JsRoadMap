const showModal = (message) => {
    const modal = document.querySelector('.modal-ctn');
    const modalText = document.querySelector('.modal-content');
    modalText.textContent = message;
    modalText.style.color = "green";
    modal.classList.add('active');
    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000)
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e){
    e.preventDefault()

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const loginError = document.querySelector("#login-error");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find((user) => user.email === email && user.password === password);
    if(currentUser){
        showModal("Login successful")
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "dashboard.html";
        form.reset()
    } else {
        loginError.textContent = "Invalid credentials";
    }

})

console.log(loginForm);


