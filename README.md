## Create the Product Base Class:

### Inside src/models/Product.ts, create a Product base class with the following:

Properties: sku (string), name (string), price (number).
Methods:
-displayDetails() - a method that returns a formatted string with the product’s details.<br>
-getPriceWithTax() - a method that calculates the final price of the product with tax.<br>

## Create the PhysicalProduct Subclass:

### Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.

-Add a weight property (number) for physical products.<br>
-Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.<br>
-Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).<br>

## Create the DigitalProduct Subclass:

### Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.

-Add a fileSize property (number) for digital products.<br>
-Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.<br>
-Use a getter method to return the formatted file size in megabytes.<br>

## Create a Tax Calculator Utility:

### Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.

-Add a function calculateTax() that accepts a Product object and returns the price including tax.

## Implement the Main Program:

### Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.

-Use a loop to display the details of each product, calculate prices with tax, and display the final prices.<br>
-Hint: Utilize polymorphism to your advantage here.<br>

## Compile and Run the Program:

### Compile the TypeScript code:

`npx tsc`

### Run the compiled JavaScript:

`node dist/main.js`

## Challenge

-Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes.<br>
-Implement a module to handle sorting products by price or by name.<br>
-Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.

## Critical Thinking

### After completing the lab, consider the following questions:

### How does TypeScript enforce type safety in this object-oriented program?

### How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

### What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

### If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

### By completing this lab, you will demonstrate your understanding of TypeScript, type annotations, interfaces, and key object-oriented programming concepts such as inheritance, encapsulation, and polymorphism.
