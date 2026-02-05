let cart = [];

// Add product
function addToCart(productName) {
    cart.push(productName);
    alert(productName + " added to cart");
}

// Show cart
function showCart() {
    let cartSection = document.getElementById("cart");
    let cartItemsDiv = document.getElementById("cartItems");
    let productSection = document.getElementById("sec2");

    productSection.style.display = "none";
    cartSection.style.display = "block";

    cartItemsDiv.innerHTML = "";

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p>${item}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(div);
    });
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}

// Show products again
function showProducts() {
    document.getElementById("cart").style.display = "none";
    document.getElementById("sec2").style.display = "flex";
}
