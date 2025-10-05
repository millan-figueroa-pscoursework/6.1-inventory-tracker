export default class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;

    }

    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: ${this.price}`
    }

    getPriceWithTax(): number {
        return this.price * (.08 + 1);
    }
} 