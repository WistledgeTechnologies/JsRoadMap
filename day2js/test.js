
// a pregnant woman just gave birth to twins
// after the delivery the woman felt like a human again, she was now relieved of the stress, the doctorsthen took the children, clean up the children and dressed the children and then returned it back to their mom;

// then a baby bednet was given to them to make the children sleep inside;
// render the babynet
// function to add to cart
// function to remove from cart;



const products = [ 
 { id: 1, name:"Laptop", price: 250000, location: "Rivers", category: "Electronics"},
 { id: 2, name: "Phone", price: 150000, location: "Akwa_Ibom", category: "Fashion"},
 { id: 3, name: "Sneakers", price: 18000,location: "Abia", category: "Electronics"},
 { id: 4, name:"Watch", price: 250000, location: "Rivers", category: "Electronics"},
 { id: 5, name:"BackPack", price: 6000, location: "Mile One", category: "Fashion"},
]

cart = []

function displayProducts(products){
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    // map through the product for each and create an li element
    products.forEach(product => {
        const li = document.createElement("li");
        li.style.cssText = "background-color:blue; color: white; padding: 10px 20px; border-radius: 3px;";
        li.textContent = `${product.id} ${product.name} ${product.category} ${product.price} ${product.location}`;
        
        const btn = document.createElement("button");
        btn.style.cssText = "background-color:green; color: white; padding: 10px 20px; border-radius: 10px; border:none; outline: none;";
        btn.textContent = "Add to cart";

        btn.addEventListener('click', () => addToCart(product.id))

        li.appendChild(btn);
        productList.appendChild(li);
    });
}


// add to cart steps ,create a function, initialize a variable for eachProduct, find the product; push, render the cart()

function addToCart(id){
    const product = products.find((product) => product.id === id)
    if(product){
        cart.push(product);
        displayCart()
    }
}

function removeProduct(id){
        const product = products.findIndex((product) => product.id === id);
        if(product !== -1){
            cart.splice(product, 1);
            displayCart()
        }
    }


function displayCart(){
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""

    cart.forEach(product => {
        const li = document.createElement("li");
        li.style.cssText = "background-color:blue; color: white; padding: 10px 20px; border-radius: 3px;";
        li.textContent = `${product.id} ${product.name} ${product.category} ${product.price} ${product.location}`;
        
        const btn = document.createElement("button");
        btn.style.cssText = "background-color:red; color: white; padding: 10px 20px; border-radius: 10px; border:none; outline: none;";
        btn.textContent = "delete";

        btn.addEventListener('click', () => removeProduct(product.id))
        li.appendChild(btn)
        cartList.appendChild(li)
    })
}
    
displayProducts(products)

const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const id = parseInt(document.getElementById("id").value)
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const location = document.getElementById("location").value;
    const category = document.getElementById("category").value;

    const newProduct = {
        id, name, price, location, category
    }

    products.push(newProduct)
    displayProducts(products);
    form.reset()
})