function renderCheckoutSummary() {
    const container = document.getElementById('checkout-summary');
    let total = 0;
    let html = '<ul style="list-style:none; padding:0;">';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `<li style="padding:12px 0; border-bottom:1px solid #eee;">
                    ${item.name} × ${item.quantity} 
                    <span style="float:right; font-weight:bold;">₦${itemTotal.toLocaleString()}</span>
                 </li>`;
    });

    html += '</ul>';
    html += `<h3 style="margin-top:20px; color:#e74c3c;">Grand Total: ₦${total.toLocaleString()}</h3>`;
    container.innerHTML = html;
}

function completeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("🎉 Order placed successfully!\nThank you for shopping with us.");
    localStorage.removeItem('cart');
    cart = [];
    window.location.href = "index.html";
}

// Initialize
document.addEventListener('DOMContentLoaded', renderCheckoutSummary);