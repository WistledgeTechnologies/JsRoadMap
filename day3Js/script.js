// What does the following means?
/*
push = Add to end
pop = Remove from end
unshift = Add to start
shift = Remove from start
map = Transform
filter = Create subset
find = first match
forEach = loop through
reduce = sum total
some = Check if at least none matches
every = Check if all match
includes = Check i value e exist
splice = Remove by index 
slice = Copy part of an array
sort = Sort an array
reverse = Reverse an array
*/
/*

create a products and render the products to the dom
from the list of products add the featured products to the featured ul element and add the
unfeatured products to the productList making the featured products to stay ahead of the unfeatured products.

remove products from cart;
make the featured products to be on scroll;
create a form that can be used to add products to productlist;
*/

/*
What is Local Storage?
Imagine you have a notebook where you write down important information you don’t want to forget, like your best friend’s phone number.
Local Storage is like that notebook, but for your web browser.

It’s a place where you can save data, and guess what? The data stays there even if you refresh the page or close the browser. Cool, right?

Why Do We Need It?
You want to save a user’s preferences (like dark mode vs. light mode).
You want to remember items in a shopping cart.
You want to save form data temporarily.


The Basics of Local Storage
Local Storage works with key-value pairs, like a dictionary.

4 Main Methods You’ll Use:
localStorage.setItem(key, value) – Save something.
localStorage.getItem(key) – Get something.
localStorage.removeItem(key) – Delete something.
localStorage.clear() – Wipe everything out (careful with this one!).

Example 1: Saving a Name
javascript
Copy
Edit
// Saving data
localStorage.setItem("name", "Victor");

// Getting data
const myName = localStorage.getItem("name");
console.log(myName); // Output: Victor

// Removing the data
localStorage.removeItem("name");
Example 2: Saving an Array or Object
Here’s where a lot of beginners get stuck: localStorage only stores strings.

So, if you try to save an array or object directly, it’ll break.
We solve this by using JSON.stringify() when saving and JSON.parse() when getting.

javascript
Copy
Edit
const fruits = ["apple", "banana", "cherry"];

// Save the array
localStorage.setItem("fruits", JSON.stringify(fruits));


// Get the array back
const storedFruits = JSON.parse(localStorage.getItem("fruits"));
console.log(storedFruits); // ["apple", "banana", "cherry"]
Example 3: Shopping Cart Simulation
Let’s simulate adding products to a cart.

function addToCart(product) {
    // Step 1: Get existing cart (if any)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Step 2: Add new product
    cart.push(product);

    // Step 3: Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add some products
addToCart({ name: "Laptop", price: 1200 });
addToCart({ name: "Mouse", price: 25 });

// View cart
console.log(JSON.parse(localStorage.getItem("cart")));
Example 4: Clearing the Cart
javascript
Copy
Edit
function clearCart() {
    localStorage.removeItem("cart");
}
Real-Life Practice Task for You
Create a simple to-do app:
When you add a task, save it to localStorage.
On page reload, load all tasks from localStorage.
Allow tasks to be removed and update localStorage accordingly.

Use sessionStorage if you only need to save data until the browser tab closes.
Use localStorage for persistent data that should stick around.*/

/*
create a navbar with buttons
// get all the sections and get all the buutons

*/
