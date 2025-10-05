

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
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`
    }

    getPriceWithTax(): number {
        return this.price * (0.08 + 1);
    }
}

// const product1 = new Product('233', 'iphone', 800);
// const product3 = new Product('236', 'Jetpack', 8000);

// console.log(product3);
// console.log(product3.calculateTax())
// console.log(product1.getPriceWithTax())