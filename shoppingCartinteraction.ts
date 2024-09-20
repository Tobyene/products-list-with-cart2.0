// ShoppingCart.ts
import { Product } from "./src/entities/product";

export class ShoppingCart {
    private items: Product[] = [];
    private total: number = 0;

    addToCart(product: Product): void {
        this.items.push(product);
        this.total += product.getPrice();
    }

    getCartItems(): Product[] {
        return this.items;
    }

    getTotal(): number {
        return this.total;
    }
}
