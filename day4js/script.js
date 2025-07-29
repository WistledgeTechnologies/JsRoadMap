//tabs switch
const lists = document.querySelectorAll("li");
const sections = document.querySelectorAll("section");

lists.forEach((list) => {
    list.addEventListener('click', () => {
        sections.forEach((section) => {
            section.classList.remove('active')
        })
        const sectionId = list.dataset.section;
        const sec = document.getElementById(sectionId);
        sec.classList.add('active')
    })
})

// toggle-switch
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', ()=> {
    document.body.classList.toggle('dark-mode');
})

class Product{
    constructor(id, name, price, category, description, location ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.location = location;
    }
}

const products = [
    new Product(1, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(2, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(3, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(4, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(5, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(6, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(7, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(8, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(9, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(10, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(11, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State"),
    new Product(12, "Wrist Watch", 36000, "accessories", "this is the best watch ever and it has a large storage capacity", "Rivers State")
]

function renderProducts(products){
    const accessoryList = document.getElementById('accessory-list');

    accessoryList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="productCard">
            <h1>${product.name}</h1>
            <p>${product.price}</p>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <p>${product.location}</p>
        </div>`

        accessoryList.appendChild(productCard)

    })
}

renderProducts(products)

// console.log(renderProducts(products))