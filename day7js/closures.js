
function  composition(name, origin, bestFood, color){
    function greet(){
        console.log(`Hi everyone, my name is ${name}, how are we all doing today`)
    }

    function stateOfOrigin(){
        console.log(`I'm from ${origin}`)
    }

    function MyBestFood(){
        console.log(`i love eating ${bestFood}`)
    }

    function MyBestColor(){
        console.log(`My favourite color is ${color}`)
    }

    greet();
    stateOfOrigin()
    MyBestFood()
    MyBestColor()

}

const daniel = composition("Daniel", "Akwa Ibom State", "Beans", "Blue");
const victor = composition("Victor", "Rivers State", "Beans", "Blue");


const amountInput = document.getElementById("amount");
const balanceCtn = document.getElementById("balance");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");


// closure
function createAccount(initialBalance){
    let balance = initialBalance;

    function deposit(amount){
        balance += amount
        return balance;
    }

    function withdraw(amount){
        if(balance >= amount){
            balance -= amount;
            return balance;
        } else {
            alert("Insufficient funds");
            return balance;
        }
    }

    function getBalance(){
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    }
}

const initialBalance = 0;
const account = createAccount(initialBalance)


function updateBalance(){
        balanceCtn.textContent = JSON.parse(localStorage.getItem("balance")) || account.getBalance()
}
window.addEventListener('DOMContentLoaded', updateBalance)


depositBtn.addEventListener('click', function(e){
    e.preventDefault()
    const amount = parseFloat(amountInput.value);
    if(!isNaN(amount) && amount > 0){
        balance = account.deposit(amount);
        localStorage.setItem("balance", JSON.stringify(balance))
        updateBalance()
        amountInput.value = ""
    }
})

withdrawBtn.addEventListener('click', function(e){
    e.preventDefault()
    const amount = parseFloat(amountInput.value);
    if(!isNaN(amount) && amount > 0){
        balance = account.withdraw(amount);
        localStorage.setItem("balance", JSON.stringify(balance))
        updateBalance()
        amountInput.value = ""
    }
})