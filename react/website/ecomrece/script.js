document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    // Sample product data
    const products = [
        { name: "Banana", price: 10, image: "product1.jpg" },
        { name: "Mango", price: 20, image: "product2.jpg" },
        { name: "Sweet", price: 30, image: "product3.jpg" }
    ];

    // Render products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});
