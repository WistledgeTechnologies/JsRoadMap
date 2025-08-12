





// Day 5 of Javascript - Basic Authentication

const formTabs = document.querySelectorAll('li');
const tabSection = document.querySelectorAll('form');

formTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabSection.forEach((section) => {
            section.classList.remove('active');
        });
        const tabSectionId = tab.dataset.section;
        const formId = document.getElementById(tabSectionId);
        formId.classList.add('active');
    })
})

function showModal(message){
    const modal = document.querySelector(".modal-ctn");
    const modalText = document.querySelector(".modal-txt");
    modalText.textContent = message;
    modalText.style.color = "#green";
    modal.classList.add('active')
    setTimeout(() => {
        modal.classList.remove('active')
    }, 3000)
}

function displayErrors(errors){
    const spans = document.querySelectorAll(`span[id$="-error"]`);
    spans.forEach((span) => {
        span.textContent = '';
    })

    for(const error in errors){
        const spanErrors = document.getElementById(`${error}-error`);
        if(spanErrors){
            spanErrors.textContent = errors[error]
        }
    }
}

function validateForm(form){
    const errors = {}
    const fullName = form.querySelector("#fullName").value.trim();
    const email = form.querySelector("#email").value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const password = form.querySelector("#password").value.trim();
    const confirmPassword = form.querySelector('#confirmPassword').value.trim();
    const terms = form.querySelector("#terms");

    if(!fullName){
        errors.fullName = "Full name is required";
    } else if(fullName.split('').length < 2 ){
        errors.fullName = " full name must be up to two words";
    }

    if(!email){
        errors.email = " Email is required"
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1){
        errors.email = "Invalid email address";
    }

    if(!phone){
        errors.phone = "Phone number is required";
    } else if(phone.length !== 10){
        errors.phone = "Digits must be up to ten";
    }

    if(!password){
        errors.password = "password is required";
    } else if(password.length < 6){
        errors.password = "Password must be up to six digits";
    }

    if(!confirmPassword){
        errors.confirmPassword = "password is required";
    } else if(password !== confirmPassword){
        errors.confirmPassword = "Password doesnt match";
    }

    if(!terms){
        errors.terms = "Terms is required";
    } else if(!terms.checked){
        errors.terms = "You must agree to the terms and conditions";
    }

    return errors;
}

const signUpForm = document.getElementById('signup-form');
signUpForm.addEventListener('submit', function(e){
    e.preventDefault()

    const form = this;
    const errors = validateForm(form)
    displayErrors(errors);

    if(Object.keys(errors).length === 0){
        showModal("Signed up successfully")
        form.reset();
    }
})

console.log(signUpForm);





