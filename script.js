document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    function updateCartUI() {
        const cartContainer = document.getElementById("cart-items");
        if (!cartContainer) return;
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
            cartContainer.appendChild(itemElement);
        });
    }

    window.addToCart = function (name, price) {
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
        updateCartUI();
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    };

    function loadCart() {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
        updateCartUI();
    }

    loadCart();
});
