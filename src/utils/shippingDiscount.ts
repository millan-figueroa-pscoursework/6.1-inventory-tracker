import PhysicalProduct from "../models/PhysicalProduct";
import DigitalProduct from "../models/DigitalProduct";

// Checks type and if weight is less than 3, marks discounted attribute as true, discounts product
export function discountByWt(product: PhysicalProduct | DigitalProduct) {
    if ("weight" in product && product.weight < 3 && !product.discounted) {
        product.discounted = true;
        product.price -= 2;
    }
}