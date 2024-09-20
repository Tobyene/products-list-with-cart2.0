import { v4 as randomUUID } from "uuid";

// Product.ts
export class Product {
    private imageUrl: string;
    private category: string;
    private productName: string;
    private price: number;

    constructor(imageUrl: string, category: string, productName: string, price: number) {
        this.imageUrl = imageUrl;
        this.category = category;
        this.productName = productName;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    getProductName(): string {
        return this.productName;
    }
}
