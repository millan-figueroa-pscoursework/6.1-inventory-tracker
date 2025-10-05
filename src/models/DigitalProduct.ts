import Product from './Product';


export default class DigitalProduct extends Product {
    fileSize: number = 0;

    constructor(sku: string, name: string, price: number, size: number) {
        super(sku, name, price);
        this.fileSize = size;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    get returnFormattedFileSize() {
        return `${this.fileSize}MB`
    }

}

const product3 = new DigitalProduct('235', 'Premium Subscription', 10, 15)
console.log(product3.getPriceWithTax());
console.log(product3.returnFormattedFileSize);
console.log(product3.displayDetails());