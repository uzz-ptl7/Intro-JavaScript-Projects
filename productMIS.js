class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo() {
        console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t Category: ${this.category}`);
    }

    applyDiscount(discountRate) {
        let discount = (this.price * discountRate) / 100;
        this.price -= discount;
        console.log(`\t The new price after ${discountRate}% discount: ${this.price}`);
    }
}

let product1 = new Product('Laptop', 50000, 'Electronics');
let product2 = new Product('Shirt', 500, 'Clothing');

product1.getInfo();
product1.applyDiscount(10);
product2.getInfo();
product2.applyDiscount(20);