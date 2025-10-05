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
        return this.price * (0.08 + 1);
    }
}

const product1 = new Product('233', 'iphone', 800);

// console.log(product1);
// console.log(product1.displayDetails())
// console.log(product1.getPriceWithTax())