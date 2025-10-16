import Product from './Product';

export default class PhysicalProduct extends Product {

    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return this.price * (0.10 + 1);
    }

    getWeightInKilos(): number {
        return this.weight / 2.5
    }

    get returnFormattedWeightInKg(): string {
        return `${this.weight}kg`
    }
}

// const product2 = new PhysicalProduct('234', 'android', 500, 8);

// console.log(product2.displayDetails());
// console.log(product2.getPriceWithTax());
// console.log(product2.getWeightInKilos());
// console.log(product2.returnFormattedWeightInKg);