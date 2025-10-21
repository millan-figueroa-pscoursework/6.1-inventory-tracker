import PhysicalProduct from "../models/PhysicalProduct";
import DigitalProduct from "../models/DigitalProduct";

export function discountByWt(product: PhysicalProduct | DigitalProduct) {
    if ("weight" in product && product.weight < 3) {
        return product.price - 2;
    }
    return product.price;
}