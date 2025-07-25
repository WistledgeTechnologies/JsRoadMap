const lists = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

//switching tabs
    lists.forEach((list) => {
        list.addEventListener('click', () => {
        sections.forEach((section) => {
            section.classList.remove('active')
        })
        const sectionId = list.dataset.section;
        const sec = document.getElementById(sectionId)
        sec.classList.add('active');
    })
})

//theme toggle
const toggle = document.getElementById("toggle")
toggle.addEventListener('change', () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    sections.forEach((section) => {
        if(document.body.classList.contains('dark-mode')){
            section.classList.add('dark-mode')
        } else{
            section.classList.remove('dark-mode')
        }
    })
})

//modal
function showModal(){
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    modal.classList.add('active')
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active')
    })
}

class Product {
    constructor(id, image, name, price, category, location, isFeatured){
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.category = category;
        this.location = location;
        this.isFeatured = isFeatured;
    }
}

const products = [
    new Product(1, "", "Laptop", 205000, "Electronics", "Lagos", true),
    new Product(2, "", "Laptop", 260000, "Electronics", "Uyo", true),
    new Product(3, "", "Laptop", 300000, "Electronics", "Rivers", true),
    new Product(4, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(5, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(6, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(7, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(8, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(9, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(10, "", "Laptop", 200000, "Electronics", "Anambra", true),
    new Product(11, "", "Laptop", 200100, "Electronics", "Akwaibom", false),
    new Product(12, "", "Laptop", 200100, "Electronics", "Akwaibom", false),
    new Product(13, "", "Laptop", 200100, "Electronics", "Akwaibom", false),
    new Product(14, "", "Laptop", 200100, "Electronics", "Akwaibom", false),
    new Product(15, "", "Laptop", 250000, "Electronics", "Adamawa", false),
    new Product(16, "", "Laptop", 270000, "Electronics", "Imo", false),
    new Product(17, "", "Laptop", 280000, "Electronics", "Kanu", false),
]

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let bal = 5000

function renderProducts(products){
    const productList = document.getElementById('productList');
    const featuredList = document.getElementById('featuredList');

    localStorage.setItem('products', JSON.stringify(products))

    productList.innerHTML = "";
    featuredList.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="product-card" id="productCard">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.category}</p>
            <p>${product.location}</p>
            <button>Add to Cart</button>
        </div>`
        const btn = productCard.querySelector('button')
        btn.addEventListener('click', () => showModal(addToCart(product.id)))
        btn.style.cssText = "padding: 10px 20px; background-color:blue; border-radius: 10px; border: none; outline: none; color:white;"

        if(product.isFeatured){
            featuredList.appendChild(productCard)
        } else{
            productList.appendChild(productCard)
        }
    })
}

function renderCart(){
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ""
    cart.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="product-card" id="productCard">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.category}</p>
            <p>${product.location}</p>
            <button>Remove from cart</button>
        </div>`
        const btn = productCard.querySelector('button')
        btn.addEventListener('click', () => showModal(removeFromCart(product.id)))
        btn.style.cssText = "padding: 10px 20px; background-color:blue; border-radius: 10px; border: none; outline: none; color:white;"
        cartList.appendChild(productCard)
    })
}

function addToCart(id){
    const product = products.find((product) => product.id === id)
    if(product && !cart.some((p) => p.id === id)){
        cart.push(product)
        saveCart()
    }
    renderCart()
}

function removeFromCart(id){
    const index = cart.findIndex((product) => product.id === id);
    if(index !== -1){
        cart.splice(index, 1)
        saveCart()
    }
    renderCart()
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart))
}
renderProducts(products)

document.addEventListener('DOMContentLoaded', renderCart);


