# Lesson 03 — The DOM, Events and Browser Storage

## Lesson purpose

JavaScript becomes interactive when it can read and update a web page. This lesson introduces the Document Object Model (DOM), event listeners, rendering data and saving a simple cart in browser storage.

## Learning outcomes

Learners should be able to select DOM elements, update text and classes, create elements from data, respond to clicks and form events, and save/retrieve JSON data with `localStorage`.

## 1. What is the DOM?

The browser converts an HTML document into a tree of objects called the Document Object Model. JavaScript can use the DOM API to find, create, update and remove elements.

Example HTML:

```html
<h1 id="page-title">Products</h1>
<p class="description">Browse the catalogue.</p>
```

JavaScript:

```js
const title = document.getElementById("page-title");
const description = document.querySelector(".description");

title.textContent = "Available products";
description.textContent = "Choose an item to add to your cart.";
```

Common selectors:

- `getElementById("id")` selects one element by its ID.
- `querySelector("selector")` returns the first matching element.
- `querySelectorAll("selector")` returns a static NodeList of all matches.

An ID should be unique in a document. A class can be shared by many elements.

## 2. Respond to events

An event is something that happens in the browser, such as a click, input change, key press or form submission. Use `addEventListener` to respond.

```html
<button id="greet-button">Greet me</button>
<p id="message"></p>
<script src="./script.js" defer></script>
```

```js
const button = document.getElementById("greet-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Welcome to JavaScript!";
});
```

The callback runs when the event occurs. Do not call it while registering the listener: pass the function itself.

For a form, the `submit` event is usually the right event to handle. Use `event.preventDefault()` when the browser's default submission/navigation must be stopped so JavaScript can process the form.

## 3. Render a list from data

Keep data separate from the code that displays it. This makes it easier to update the catalogue without rewriting the rendering logic.

```html
<ul id="product-list"></ul>
<script src="./script.js" defer></script>
```

```js
const products = [
  { id: 1, name: "Keyboard", price: 18000 },
  { id: 2, name: "Mouse", price: 9000 }
];

const productList = document.getElementById("product-list");

function renderProducts(items) {
  productList.replaceChildren();

  items.forEach(product => {
    const item = document.createElement("li");
    item.textContent = `${product.name} — ₦${product.price.toLocaleString()}`;
    productList.appendChild(item);
  });
}

renderProducts(products);
```

The function clears the previous list, creates one `li` for each product, sets its plain text and appends it. `textContent` is appropriate for untrusted text. Avoid building HTML with `innerHTML` when the inserted content may come from users or an API.

## 4. Add to cart and remove from cart

```js
const cart = [];

function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) {
    console.warn("Product was not found.");
    return;
  }

  cart.push(product);
  renderCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);

  if (index === -1) return;

  cart.splice(index, 1);
  renderCart();
}
```

Notice the difference between `find` and `findIndex`: one returns the matching item, the other returns its position. `splice(index, 1)` removes one item at that position.

A common bug is using a condition such as `product.id !== id` inside `findIndex`. That finds the first product that does *not* match. To remove a product, find the item whose ID **is equal** to the requested ID.

## 5. Persist data with localStorage

`localStorage` stores string values in the browser for an origin. Data usually remains after a refresh and after the browser is closed. It is not a database shared with your server.

The API is based on key-value pairs:

- `setItem(key, value)` stores a string.
- `getItem(key)` reads a string or returns `null`.
- `removeItem(key)` removes one key.
- `clear()` removes every key for that origin; use carefully.

Objects and arrays must be converted to JSON strings.

```js
const cart = [
  { id: 1, name: "Keyboard", price: 18000 }
];

localStorage.setItem("cart", JSON.stringify(cart));

const savedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
console.log(savedCart);
```

A reusable safe starting point:

```js
function readCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") ?? "[]");
  } catch (error) {
    console.error("Saved cart data is invalid.", error);
    return [];
  }
}

function saveCart(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
```

JSON parsing can fail if the stored string is malformed. Storage can also be unavailable or full, so production code should handle storage errors.

### localStorage vs sessionStorage

- `localStorage` persists until the data is removed.
- `sessionStorage` is scoped to a browser tab session and is cleared when that tab's page session ends.

Neither storage mechanism is suitable for passwords, private tokens or sensitive personal data. Users and scripts running on the same origin can access stored values.

## Guided practice

Build a product list with an Add to cart button. Render the cart separately. Add a Remove button for each cart item. Save the cart after every change and load it when the page starts.

## Independent exercises

1. Add a cart item count next to the Cart heading.
2. Display an empty-cart message when there are no items.
3. Add a Clear cart button that removes only the cart key.
4. Add a category filter using `filter()`.
5. Refresh the page and confirm the cart is restored.
6. Explain why you should not store a password in localStorage.

## Review questions

- What does the DOM represent?
- Why should you use `addEventListener`?
- What is the difference between `textContent` and `innerHTML`?
- Why do we use `JSON.stringify` before storing an array?
- What does `getItem` return when a key does not exist?

## Lesson recap

The DOM is the browser's object representation of the page. JavaScript selects elements, changes content, creates elements and reacts to events. Browser storage can preserve non-sensitive UI data, but it stores strings and must not be treated as a secure database.
