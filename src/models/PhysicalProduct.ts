import Product from './Product';

export default class PhysicalProduct extends Product {

    weight: number;

    constructor(cat: string, sku: string, name: string, price: number, weight: number) {
        super(cat, sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return this.price * (0.10 + 1);
    }

    getWeightInKilos(): number {
        return this.weight / 2.5
    }

    get returnFormattedWeightInKg(): string {
        let kilos = this.getWeightInKilos();
        return `${kilos}kg`
    }
}

// const product2 = new PhysicalProduct('cd', '234', 'android', 500, 8);

// console.log(product2.displayDetails());
// console.log(product2.getPriceWithTax());
// console.log(product2.getWeightInKilos());
// console.log(product2.returnFormattedWeightInKg);