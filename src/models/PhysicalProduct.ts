import Product from './Product';

export default class PhysicalProduct extends Product {

    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax() {
        return this.price * (0.08 + 1);
    }

    getweightInKilos() {
        return this.weight / 2.5
    }
}

const product2 = new Product('234', 'android', 500);

console.log(product2.displayDetails());