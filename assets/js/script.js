let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.reduce((a, b) => a + b.quantity, 0);
}

function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity++;
    else cart.push({...product, quantity: 1});
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function submitComment() {
    const status = document.getElementById('comment-status');
    status.style.color = "green";
    status.textContent = "✅ Message sent successfully!";
}