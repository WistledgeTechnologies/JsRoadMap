const showSuccessMessage = (message) => {
    const modal = document.querySelector(".modal-ctn");
    const modalContent = document.querySelector(".modal-content");
    modal.classList.add('active');
    modalContent.textContent = message;
    modalContent.style.cssText = "color:green;";
    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000)
}

function displayError(errors){
    const spans = document.querySelectorAll(`span[id$="-error"]`);
    spans.forEach((span) => {
        span.textContent = "";
    })

    for(const error in errors){
        const spanErrors = document.getElementById(`${error}-error`)
        if(spanErrors){
            spanErrors.textContent = errors[error];
        }
    }
}


const validateForm = (form) => {

    const errors = {}

    const fullName = form.querySelector("#fullName").value.trim();
    const email = form.querySelector("#email").value.trim();
    const phone = form.querySelector("#phone").value.trim();
    const password = form.querySelector("#password").value.trim();
    const confirmPassword = form.querySelector("#confirmPassword").value.trim();
    const terms = form.querySelector("#terms");

    if(!fullName){
        errors.fullName = "Full name is required";
    } else if(fullName.split(" ").length < 2 || fullName.length > 20){
        errors.fullName = "Surnanme is required";
    }

    if(!email){
        errors.email = "Email is required";
    } else if(!email.includes("@") && !email.includes(".")){
        errors.email = "Invalid email address";
    }

    if(!phone){
        errors.phone = "Phone number is required";
    } else if(phone.length !== 10){
        errors.phone = "Phone number must be up to 10 digits";
    }

    if(!password) {
        errors.password = "Password is required";
    } else if(password.length < 6){
        errors.password = "Password must be up to six characters por digits"
    }

    if(!confirmPassword){
        errors.confirmPassword = "Confirm password";
    } else if(password !== confirmPassword) {
        errors.confirmPassword = "Password doesnt match";
    }

    if(!terms.checked){
        errors.terms = " required"
    }

    return errors;
} 

const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener('submit', function(e){
    e.preventDefault()

    const form = this;
    const errors = validateForm(form);
    displayError(errors);

    if(Object.keys(errors).length === 0){
        showSuccessMessage("Sign Up Successful")
        form.reset();
        window.location.href = "login.html"
    }
})



