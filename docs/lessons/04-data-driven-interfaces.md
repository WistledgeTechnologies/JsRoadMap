# Lesson 04 — Building a Data-Driven Interface

## Lesson purpose

A product page should not require a separate block of hard-coded HTML for every product. A data-driven interface stores records in arrays and objects, then uses reusable functions to render the correct view. This lesson builds on the product-store work in `day4js/`.

## Learning outcomes

Learners should be able to model product data, render cards from an array, filter by category, switch sections using data attributes, and explain why data and presentation logic should be separated.

## 1. Model the data first

A product is a record with properties. Use one object per product and one array to hold the catalogue.

```js
const products = [
  { id: 1, name: "Wrist watch", price: 36000, category: "Accessories" },
  { id: 2, name: "Laptop", price: 420000, category: "Electronics" },
  { id: 3, name: "Backpack", price: 18000, category: "Fashion" }
];
```

Each product has the same shape. Consistent data makes rendering, filtering and calculations easier.

## 2. Render reusable product cards

HTML:

```html
<section>
  <h1 id="section-title">All products</h1>
  <div id="product-list"></div>
</section>
<script src="./script.js" defer></script>
```

JavaScript:

```js
const productList = document.getElementById("product-list");

function createProductCard(product) {
  const card = document.createElement("article");
  const name = document.createElement("h2");
  const price = document.createElement("p");

  name.textContent = product.name;
  price.textContent = `₦${product.price.toLocaleString()}`;

  card.append(name, price);
  return card;
}

function renderProducts(items) {
  productList.replaceChildren();

  if (items.length === 0) {
    productList.textContent = "No products found.";
    return;
  }

  items.forEach(product => {
    productList.appendChild(createProductCard(product));
  });
}

renderProducts(products);
```

The card function creates one reusable unit. The rendering function decides which records to display. Keeping these responsibilities separate makes changes easier.

## 3. Filter by category

```js
function getProductsByCategory(category) {
  if (category === "all") return products;

  return products.filter(product => product.category === category);
}

renderProducts(getProductsByCategory("Electronics"));
```

Filtering does not require changing the original product array. The `filter` method returns a new array containing only matching items.

## 4. Use data attributes to switch sections

HTML:

```html
<nav>
  <button data-section="fashion">Fashion</button>
  <button data-section="electronics">Electronics</button>
  <button data-section="accessories">Accessories</button>
</nav>

<section id="fashion">Fashion products</section>
<section id="electronics" hidden>Electronics products</section>
<section id="accessories" hidden>Accessories products</section>
```

JavaScript:

```js
const navigationButtons = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll("main section");

navigationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.section;

    sections.forEach(section => {
      section.hidden = section.id !== targetId;
    });
  });
});
```

A data attribute stores custom information in HTML. The `dataset` property reads it in JavaScript. This example uses the button's `data-section` value to find the section to show.

For a production interface, also communicate the active navigation state accessibly (for example, with `aria-current` or an appropriate tab pattern). Do not use a clickable `li` as a substitute for a real button.

## 5. Calculate catalogue values

```js
const totalInventoryValue = products.reduce(
  (total, product) => total + product.price,
  0
);

console.log(totalInventoryValue);
```

The accumulator starts at zero. Each iteration adds the current product's price. The final value is the sum of all prices.

## 6. Practical improvements to the original project

The original `day4js/script.js` is mostly commented-out code, so treat it as a starting point rather than a finished implementation. A useful classroom extension is to implement the interface in small steps:

1. Render all products.
2. Render each category into its own section.
3. Add category navigation.
4. Add a search field.
5. Add sorting by price.
6. Add a cart action and show the cart count.

Avoid copying the same markup into many sections. Reuse a rendering function and pass it different data.

## Guided practice

Add a search input that filters by product name:

```js
function searchProducts(query) {
  const normalizedQuery = query.trim().toLowerCase();

  return products.filter(product =>
    product.name.toLowerCase().includes(normalizedQuery)
  );
}
```

Connect it to the input event and render the returned array.

## Independent exercises

1. Add a `description` field to every product and display it on the card.
2. Add a search input that filters by name.
3. Add a sort control for lowest price and highest price. Do not mutate the source array.
4. Show a message when a category has no products.
5. Add a featured flag and render featured products separately.
6. Explain why one reusable card function is better than repeating card markup.

## Review questions

- Why represent products as an array of objects?
- What does `filter` return?
- What is the purpose of `data-section`?
- Why should rendering and data selection be separate functions?
- Why is a button preferable to a clickable list item for navigation?

## Lesson recap

A data-driven interface uses structured records as its source of truth. Reusable rendering functions turn records into DOM elements, while array methods choose which records to show. Data attributes connect controls to interface sections without hard-coding a separate event handler for every control.
