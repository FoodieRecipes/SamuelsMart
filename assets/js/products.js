const products = [
    { 
        id: 1, 
        name: "Samsung Galaxy A15", 
        price: 125000, 
        image: "assets/images/phone.jpg", 
        category: "Smartphones" 
    },
    { 
        id: 2, 
        name: "HP Laptop 15-inch", 
        price: 285000, 
        image: "assets/images/laptop.jpg", 
        category: "Laptops" 
    },
    { 
        id: 3, 
        name: "Sony Headphones", 
        price: 45000, 
        image: "assets/images/headphones.jpg", 
        category: "Audio" 
    },
    { 
        id: 4, 
        name: "Power Bank 20000mAh", 
        price: 18500, 
        image: "assets/images/powerbank.jpg", 
        category: "Accessories" 
    }
];

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.src='https://picsum.photos/id/1080/300/300'">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="price">₦${product.price.toLocaleString()}</div>
                
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="add-to-cart" 
                            onclick='addToCart(${JSON.stringify(product)})'>
                        Add to Cart
                    </button>
                    <a href="product_details.html?id=${product.id}" 
                       style="flex: 1; padding: 12px; background: #34495e; color: white; border-radius: 50px; 
                              text-decoration: none; text-align: center;">
                        View Details
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Auto render
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('featured-products')) {
        renderProducts('featured-products', products.slice(0, 4));
    }
    if (document.getElementById('all-products')) {
        renderProducts('all-products', products);
    }
});