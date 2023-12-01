/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a shopping cart feature for an e-commerce website, including product listing, adding/removing items from the cart, and calculating the total price.
*/

// Product class representing individual products
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}$`;
  }
}

// ShoppingCart class representing the cart functionality
class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }

  removeItem(productId, quantity = 1) {
    const existingItemIndex = this.cartItems.findIndex((item) => item.product.id === productId);

    if (existingItemIndex >= 0) {
      const existingItem = this.cartItems[existingItemIndex];

      if (existingItem.quantity <= quantity) {
        this.cartItems.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity -= quantity;
      }
    }
  }

  getItems() {
    return this.cartItems.map((item) => item.product);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);
  }
}

// Creating some sample products
const product1 = new Product(1, 'Laptop', 1200);
const product2 = new Product(2, 'Smartphone', 800);
const product3 = new Product(3, 'Headphones', 100);

// Creating a shopping cart instance
const cart = new ShoppingCart();

// Adding some items to the cart
cart.addItem(product1, 2);
cart.addItem(product2);
cart.addItem(product3, 3);

// Displaying the cart items and total price
console.log("Cart Items:");
cart.getItems().forEach((product) => {
  console.log(product.getInfo());
});

console.log("Total Price:", cart.getTotalPrice().toFixed(2), "$");

// Removing an item from the cart
console.log("\nRemoving an item from the cart...");
cart.removeItem(2);

console.log("Cart Items:");
cart.getItems().forEach((product) => {
  console.log(product.getInfo());
});

console.log("Total Price:", cart.getTotalPrice().toFixed(2), "$");