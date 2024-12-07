let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartCount.innerText = cart.length;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {
    const cartSection = document.getElementById("cart");
    cartSection.style.display = (cartSection.style.display === "block") ? "none" : "block";
}

function checkout() {
    alert("Proceeding to checkout!");
}
