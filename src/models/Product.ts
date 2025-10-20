import type { DiscountableProduct } from "../interfaces/discountableProduct";

export default class Product implements DiscountableProduct {
    sku: string;
    name: string;
    price: number;
    cat: string;

    constructor(sku: string, name: string, price: number, cat: string) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.cat = cat;

    }

    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}, Category: ${this.cat}`
    }

    getPriceWithTax(): number {
        return this.price * (0.08 + 1);
    }

    applyDiscount(discountPercent: number): number {
        return this.price - (this.price * (discountPercent / 100));
    }
}

// const product1 = new Product('233', 'iphone', 800);
// const product3 = new Product('236', 'Jetpack', 8000);

// // console.log(product1);
// // console.log(product3);
// console.log(product1.price)
// console.log(product1.getPriceWithTax())
// console.log(product3.price)
// console.log(product3.getPriceWithTax())