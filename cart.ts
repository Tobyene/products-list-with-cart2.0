// main.ts (or cart.ts)
import { Product } from './src/entities/product';
import { ShoppingCart } from "./shoppingCartinteraction";

const cart = new ShoppingCart();

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button: Element) => {
    button.addEventListener('click', (event: Event) => {
        const productElement = (event.target as HTMLElement).closest('.menu-item');
        if (productElement) {
            const productName = productElement.querySelector('h3')?.innerText ?? '';
            const productPrice = parseFloat(productElement.querySelector('p')?.innerText.replace('$', '') ?? '0');
            const productImage = productElement.querySelector('img')?.src ?? '';

            // Create a new product object
            const newProduct = new Product(productImage, 'Dessert', productName, productPrice);
            
            // Add the product to the shopping cart
            cart.addToCart(newProduct);
            updateCartUI();
        }
    });
});

// Function to update the cart UI
function updateCartUI(): void {
    const cartItemsContainer = document.getElementById('cart-items') as HTMLElement;
    const cartCount = document.getElementById('cart-count') as HTMLElement;
    const cartTotal = document.getElementById('cart-total') as HTMLElement;

    // Clear cart for update
    cartItemsContainer.innerHTML = '';

    // Populate cart with current items
    cart.getCartItems().forEach((item: Product) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `<p>${item.getProductName()}</p><p>$${item.getPrice().toFixed(2)}</p>`;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Update cart count and total
    cartCount.innerText = cart.getCartItems().length.toString();
    cartTotal.innerText = cart.getTotal().toFixed(2);
}

// Function to show the order confirmation modal
function confirmOrder(): void {
    const modal = document.getElementById('order-confirmation-modal') as HTMLElement;
    modal.style.display = 'flex';
}

// Function to close the order confirmation modal
function closeModal(): void {
    const modal = document.getElementById('order-confirmation-modal') as HTMLElement;
    modal.style.display = 'none';
}

// Attach event listener to confirm order button
document.querySelector('.confirm-order')?.addEventListener('click', confirmOrder);
document.querySelector('#order-confirmation-modal button')?.addEventListener('click', closeModal);
