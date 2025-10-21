## Create the Product Base Class:

### Inside src/models/Product.ts, create a Product base class with the following:

### Properties:

[x] sku (string), name (string), price (number).<br>

### Methods:

[x] displayDetails() - a method that returns a formatted string with the product’s details.<br>
[x] getPriceWithTax() - a method that calculates the final price of the product with tax.<br>

## Create the PhysicalProduct Subclass:

### Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.

[x] Add a weight property (number) for physical products.<br>
[x] Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.<br>
[x] Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).<br>

## Create the DigitalProduct Subclass:

### Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.

[x] Add a fileSize property (number) for digital products.<br>
[x] Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.<br>
[x] Use a getter method to return the formatted file size in megabytes.<br>

## Create a Tax Calculator Utility:

### Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.

[x] Add a function calculateTax() that accepts a Product object and returns the price including tax.

## Implement the Main Program:

### Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.

[x] Use a loop to display the details of each product, calculate prices with tax, and display the final prices.<br>
-Hint: Utilize polymorphism to your advantage here.<br>

## Compile and Run the Program:

### Compile the TypeScript code:

`npx tsc`

### Run the compiled JavaScript:

`node dist/main.js`

## Challenge

[x] Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes.<br>
[x] Implement a module to handle sorting products by price or by name.<br>
[x] Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.

## Critical Thinking

### How does TypeScript enforce type safety in this object-oriented program?

TS ensures that all objects, properties, and method matches the types defined in its class or interface. It checks that only valid data types are used at compile time, which prevents common runtime errors and makes it easier to debug.

### How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance allowed PhysicalProduct and DigitalProduct to share common properties and methods defined in the base Product class (sku, name, price, and shared logic) so they only need to be written once in the parent class making the code cleaner, easier to maintain, and more scalable.

### What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

Encapsulation and access modifiers help protect the data within each class by controlling how properties and methods can be accessed/ modified. It makes the code more secure and maintainable.

### If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

It would make it more straightforward because it allows different product types to share the same interface and behavior from the base Product class. The new subclass could override or extend specific methods without changing the existing code. So the rest of the program would automatically handle the new product type with minimal updates.
