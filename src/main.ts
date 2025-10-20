import './style.css'
import Product from './models/Product.ts'
import PhysicalProduct from './models/PhysicalProduct.ts'
import DigitalProduct from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';
// import type { DiscountableProduct } from "./interfaces/discountableProduct";
import { sortByAttribute } from './utils/sortUtils.ts';



const app = document.querySelector('#app')!;
app.innerHTML = `<div class="container"></div>`;

const container = document.querySelector<HTMLDivElement>('.container')!;

const products: Product[] = [];

const product1 = new PhysicalProduct('1', 'cd', 'Karnivool: In Verses', 20, 3)
const product2 = new PhysicalProduct('2', 'cd', 'Rob Zombie: The Great Satan', 22, 3)
const product3 = new DigitalProduct('3', 'mp3', 'Powerwolf: Wildlive', 22, 38)
const product4 = new PhysicalProduct('4', 'cd', 'H-Blockx: Fillin_the_Blank', 22, 3,)
const product5 = new DigitalProduct('5', 'mp3', 'Decapitated: The Negation', 18, 35)
const product6 = new DigitalProduct('6', 'mp3', 'Shields: Death & Connection', 17, 30)
const product7 = new PhysicalProduct('7', 'cd', 'Megadeth: Self-Titled', 24, 4)
const product8 = new PhysicalProduct('8', 'tshirt', 'Brujeria Make Amerika T-shirt', 25, 2)
const product9 = new DigitalProduct('9', 'mp3', 'MØL: Dreamcrush', 22, 35)
const product10 = new DigitalProduct('10', 'mp3', 'Kreator: Krushers of the World', 17, 30)
const product11 = new PhysicalProduct('11', 'tshirt', 'EDENBRIDGE T-shirt', 25, 4)
const product12 = new PhysicalProduct('12', 'tshirt', 'Ellende T-shirt', 22, 2)

products.push(product1, product2, product3, product4, product5, product6, product6, product7, product8, product9, product10, product11, product12);

products.forEach((prod) => {
  const tax = calculateTax(prod.price);
  console.log(prod.displayDetails());
  console.log(`Total: $${prod.price + tax}`);
});

container.innerHTML = products
  .map((prod) => {
    const tax = calculateTax(prod.price);
    const total = (prod.price + tax).toFixed(2);
    return `
      <div class="product-card">
        <h2>${prod.name}</h2>
        <p><strong>SKU:</strong> ${prod.sku}</p>
        <p><strong>Category:</strong> ${prod.cat}</p>
        <p><strong>Price:</strong> $${prod.price.toFixed(2)}</p>
        <p><strong>Total (with tax):</strong> $${total}</p>
      </div>
    `;
  })
  .join('');



// console.log(product2.getWeightInKilos())
// console.log(product2.returnFormattedWeightInKg)
// console.log(product6.displayDetails());
// console.log(product5.getPriceWithTax());
// console.log(product5.returnFormattedFileSize);
// console.log(product7.displayDetails());
// console.log(calculateTax(product7.price));
