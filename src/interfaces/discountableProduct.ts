export interface DiscountableProduct {
    applyDiscount(discountPercent: number): void;
}