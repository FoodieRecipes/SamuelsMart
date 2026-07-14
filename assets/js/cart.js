function renderCart() {
    const container = document.getElementById('cart-items');
    let total = 0;
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:4rem; font-size:1.2rem;">Your cart is empty. <a href="products.html">Shop Now</a></p>`;
        document.getElementById('cart-total').textContent = 'Total: ₦0';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>₦${item.price.toLocaleString()} × ${item.quantity}</p>
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <span style="font-weight:bold; margin:0 10px;">${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <div style="margin-left:auto; text-align:right;">
                    <strong>₦${itemTotal.toLocaleString()}</strong><br>
                    <button onclick="removeFromCart(${index})" style="color:#e74c3c; margin-top:10px;">Remove</button>
                </div>
            </div>`;
    });

    document.getElementById('cart-total').textContent = `Total: ₦${total.toLocaleString()}`;
}

function changeQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}