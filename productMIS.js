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

let product1 = new Product('T-Shirt', 1000, 'Clothing');
let product2 = new Product('Shirt', 500, 'Clothing');

product1.getInfo();
product1.applyDiscount(10);
product2.getInfo();
product2.applyDiscount(20);

class Electronics extends Product {
    constructor(name, price, brand, warranty) {
        super(name, price, 'Electronics');
        this.brand = brand;
        this.warranty = warranty;
    }

    getInfo() {
        console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t Category: ${this.category}`);
        console.log(`\t Brand: ${this.brand} \n\t Warranty: ${this.warranty}`);
    }
}

let product3 = new Electronics('Laptop', 50000, 'Hp', '1 year');
let product4 = new Electronics('Mobile', 20000, 'Samsung', '2 years');

product3.getInfo();
// product3.getElectronicsInfo();
product3.applyDiscount(10);
product4.getInfo();
// product4.getElectronicsInfo();
product4.applyDiscount(20);