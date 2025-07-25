const lists = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

lists.forEach((list) => {
    list.addEventListener('click', () => {
        sections.forEach((section) => {
            section.classList.remove('active')
        })

        const sectionId = list.dataset.section;
        const sec = document.getElementById(sectionId);
        sec.classList.add('active');
    })
})

class Product{
    constructor(id, name, price, category, location){
        this.id = id;
        this.name = name;
        this.price = price;
        this.categorty = category;
        this.location = location;
    }
}

const products = [
    new Product(1, "Laptop", 350000, "Electronics", "Rivers State"),
    new Product(2, "Laptop", 300200, "Electronics", "Rivers State"),
    new Product(3, "Laptop", 350000, "Electronics", "Rivers State"),
    new Product(4, "Laptop", 350200, "Electronics", "Rivers State"),
    new Product(5, "Laptop", 353000, "Electronics", "Rivers State"),
    new Product(6, "Laptop", 850000, "Electronics", "Rivers State"),
    new Product(7, "Laptop", 950000, "Electronics", "Rivers State"),
    new Product(8, "Laptop", 350000, "Electronics", "Rivers State"),
    new Product(9, "Laptop", 350000, "Electronics", "Rivers State"),
    new Product(10, "Laptop", 200000, "Electronics", "Rivers State"),
    new Product(11, "Laptop", 500000, "Electronics", "Rivers State"),
    new Product(12, "Laptop", 100000000, "Electronics", "Rivers State"),
    new Product(13, "Laptop", 150000, "Electronics", "Rivers State"),
    new Product(14, "Laptop", 250000, "Electronics", "Rivers State"),
    new Product(15, "Laptop", 450000, "Electronics", "Rivers State"),
    new Product(16, "Laptop", 750000, "Electronics", "Rivers State"),
]

function renderProducts(products){
    const productList = document.getElementById('productList');

    productList.innerHTML = ""
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="productCard"> 
            <div>
                <h1>${product.name}</h1>
                <p>${product.price}</p>
                <p>${product.category}</p>
                <p>${product.location}</p>
                <button>Add to cart</button>
            </div>
        </div>
           `;
        const btn = productCard.querySelector('button');
        btn.style.cssText = "background-color: blue; padding: 10px 20px; border:none; border-radius: 10px; color: white;";
        btn.addEventListener('click', ()=>  addToCart(product.id))
        productList.appendChild(productCard);
    })
}

renderProducts(products)