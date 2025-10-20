import './style.css'
import Product from './models/Product.ts'
import PhysicalProduct from './models/PhysicalProduct.ts'
import DigitalProduct from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';
import type { DiscountableProduct } from "./interfaces/discountableProduct";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Inventory Tracker</h1>
    <p class="read-the-docs">
      Nothing to see here yet.
    </p>
  </div>
`
const products = [];

const product1 = new PhysicalProduct('1', 'Karnivool: In Verses', 20, 3, 'cd')
const product2 = new PhysicalProduct('2', 'Rob Zombie: The Great Satan', 22, 3, 'cd')
const product3 = new DigitalProduct('3', 'Powerwolf: Wildlive', 22, 38, 'mp3')
const product4 = new PhysicalProduct('4', 'H-Blockx: Fillin_the_Blank', 22, 3, 'cd')
const product5 = new DigitalProduct('5', 'Decapitated: The Negation', 18, 35, 'mp3')
const product6 = new DigitalProduct('6', 'Shields: Death & Connection', 17, 30, 'mp3')
const product7 = new PhysicalProduct('7', 'Megadeth: Self-Titled', 24, 4, 'cd')
const product8 = new PhysicalProduct('8', 'Brujeria Make Amerika T-shirt', 25, 2, 'tshirt')
const product9 = new DigitalProduct('9', 'MØL: Dreamcrush', 22, 35, 'mp3')
const product10 = new DigitalProduct('10', 'Kreator: Krushers of the World', 17, 30, 'mp3')
const product11 = new PhysicalProduct('11', 'EDENBRIDGE T-shirt', 25, 4, 'tshirt')
const product12 = new PhysicalProduct('12', 'Ellende T-shirt', 22, 2, 'tshirt')

products.push(product1, product2, product3, product4, product5, product6, product6, product7, product8, product9, product10, product11, product12);

products.forEach((prod) => {
  let tax = calculateTax(prod.price);
  console.log(prod.displayDetails());
  console.log(`Total: $${prod.price + tax}`);
})


console.log(product2.applyDiscount(10))
// console.log(product6.displayDetails());
// console.log(product5.getPriceWithTax());
// console.log(product5.returnFormattedFileSize);
// console.log(product7.displayDetails());
// console.log(calculateTax(product7.price));
