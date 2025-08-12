function showModal(message){
    const modal = document.querySelector('.modal-ctn');
    const modalText = document.querySelector('.modal-content');
    modal.classList.add('active');
    modalText.textContent = message;
    modalText.style.color = "green";
    setTimeout(() => {
        modal.classList.remove('active')
    }, 3000);
}

const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const userphone = document.getElementById("userphone");

const userInfo = JSON.parse(localStorage.getItem("currentUser")) || [];

const updateUserInfo = (userInfo) => {
    username.textContent = userInfo.fullName;
    userphone.textContent = userInfo.phone;
    useremail.textContent = userInfo.email;

}

updateUserInfo(userInfo);

