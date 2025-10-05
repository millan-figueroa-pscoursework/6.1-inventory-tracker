import './style.css'
import Product from './models/Product.ts'
import PhysicalProduct from './models/PhysicalProduct.ts'
import DigitalProduct from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Inventory Tracker</h1>
    <p class="read-the-docs">
      Nothing to see here yet.
    </p>
  </div>
`
const products = [];

const product5 = new DigitalProduct('238', 'Gold Subscription', 20, 25)
const product6 = new PhysicalProduct('239', 'iPhone', 600, 32)
const product7 = new Product('240', 'Old Shoe', 5);

products.push(product5, product6, product7);

products.forEach((prod) => {
  let tax = calculateTax(prod.price);
  console.log(prod.displayDetails());
  console.log(`Total: $${prod.price + tax}`);
})



// console.log(product6.displayDetails());
// console.log(product5.getPriceWithTax());
// console.log(product5.returnFormattedFileSize);
// console.log(product7.displayDetails());
// console.log(calculateTax(product7.price));
