import './style.css'
import Product from './models/Product.ts'
import PhysicalProduct from './models/PhysicalProduct.ts'
import DigitalProduct from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';
import { discountByWt } from './utils/shippingDiscount.ts';
import { sortByAttribute } from './utils/sortUtils.ts';


const products: Product[] = [

  new PhysicalProduct('1', 'cd', 'Karnivool: In Verses', 20, 3),
  new PhysicalProduct('2', 'cd', 'Rob Zombie: The Great Satan', 22, 3),
  new DigitalProduct('3', 'mp3', 'Powerwolf: Wildlive', 22, 38),
  new PhysicalProduct('4', 'cd', 'H-Blockx: Fillin_the_Blank', 22, 2,),
  new DigitalProduct('5', 'mp3', 'Decapitated: The Negation', 18, 35),
  new DigitalProduct('6', 'mp3', 'Shields: Death & Connection', 17, 30),
  new PhysicalProduct('7', 'cd', 'Megadeth: Self-Titled', 24, 4),
  new PhysicalProduct('8', 'tshirt', 'Brujeria Make Amerika T-shirt', 25, 2),
  new DigitalProduct('9', 'mp3', 'MØL: Dreamcrush', 22, 35),
  new DigitalProduct('10', 'mp3', 'Kreator: Krushers of the World', 17, 30),
  new PhysicalProduct('11', 'tshirt', 'EDENBRIDGE T-shirt', 25, 4),
  new PhysicalProduct('12', 'tshirt', 'Ellende T-shirt', 22, 1),
];


// grabs html elements for rendering
const container = document.querySelector<HTMLDivElement>('#app')!;
const sortKey = document.querySelector<HTMLSelectElement>('#sort-key')!;
const sortOrder = document.querySelector<HTMLSelectElement>('#sort-order')!;
const wtDiscount = document.querySelector<HTMLSelectElement>('#weight-discount')!;

// Loops through array and renders products on page
function render(products: Product[]): void {
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
}

// Uses sortByAttribute module to sort products list, then re-renders it
function updateSort() {
  const key = sortKey.value as keyof Product;
  const ascending = sortOrder.value === 'asc';
  const sorted = sortByAttribute(products, key, ascending);
  render(sorted);
}

// Function loops through products array, checks if physical product, if wt is less than 3, then applies discount function and re-renders list
function updateWtDiscount() {
  products.forEach((prod) => {
    if (prod instanceof PhysicalProduct && prod.weight < 3) {
      prod.price = discountByWt(prod);
    }
  });
  render(products);
}

updateSort()

// Event listeners 
sortKey.addEventListener('change', updateSort);
sortOrder.addEventListener('change', updateSort);
wtDiscount.addEventListener('click', updateWtDiscount);

// console.log(product2.getWeightInKilos())
// console.log(product2.returnFormattedWeightInKg)
// console.log(product6.displayDetails());
// console.log(product5.getPriceWithTax());
// console.log(product5.returnFormattedFileSize);
// console.log(product7.displayDetails());
// console.log(calculateTax(product7.price));
