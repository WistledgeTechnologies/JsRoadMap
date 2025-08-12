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

const validate = (form) => {
    const errors = {}

    const fullName = form.querySelector("#fullName").value.trim();
    const email = form.querySelector("#email").value.trim();
    const phone = form.querySelector("#phone").value.trim();
    const password = form.querySelector("#password").value.trim();
    const confirmPassword = form.querySelector("#confirmPassword").value.trim();
    const terms = form.querySelector("#terms");

    if(!fullName) errors.fullName = "Full name is required";
    if(fullName.split("").length < 2 || fullName.length > 30) errors.fullName = "Surname is required";

    if(!email) errors.email = "Email is required";
    if(!email.includes("@") && !email.includes('.')) errors.email = "Invalid email address";

    if(!phone) errors.phone = "Enter your phone number";
    if(phone.length !== 10 || isNaN(phone)) errors.phone = "Phone number must be up to 10 digits";

    if(!password) errors.password = "Enter your password";
    if(password.length < 6) errors.password = "Password must be up to 6 digits";

    if(!confirmPassword) errors.confirmPassword = "Confirm password";
    if(password !== confirmPassword) errors.confirmPassword = "Not corresponding";

    if(!terms.checked) errors.terms = "Agree to terms";

    return errors;

    console.log(errors);
    
}

const displayErrors = (errors) => {
    const spans = document.querySelectorAll(`span[id$="-error"]`)
    spans.forEach((span) => {
        span.textContent = '';
    });

    for(const error in errors){
        const spanErrors = document.getElementById(`${error}-error`);

        if(spanErrors){
            spanErrors.textContent = errors[error];
            console.log(spanErrors)
        }
    }
}


const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', function(event){
event.preventDefault();

    const form = this;
    const errors = validate(form);
    displayErrors(errors)

    if(Object.keys(errors).length === 0){

        const fullName = form.querySelector("#fullName").value.trim();
        const email = form.querySelector("#email").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const password = form.querySelector("#password").value.trim();

        const users = JSON.parse(localStorage.getItem("users")) ||  [];
        const existingUser = users.find((user) => user.email === email);
        if(existingUser){
            showModal("User already exist, please login");
        } else {
            const newUser = {
                fullName: fullName,
                email: email,
                phone: phone,
                password : password
            }

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            showModal("Sign Up successful")
            window.location.href = "login.html"
            form.reset()
        }
    }
})

