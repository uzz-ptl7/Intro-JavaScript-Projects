function product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getTotalPrice = function() {
        return this.price * this.quantity;
    }
}

let product1 =  new product(1, 'Apple', 5, 10);
let product2 =  new product(2, 'Banana', 3, 5);
let product3 = new product(3, 'Orange', 4, 8);

let invoiceTotal = product1.getTotalPrice() + product2.getTotalPrice() + product3.getTotalPrice(); 

console.log("======================== Ecobazaar Invoice ========================");
console.log("+----------------------------------------------------------------+");
console.log("| ID \t  Name \t Unit Price \t Quantity \t Total Price \t |");
console.log("+----------------------------------------------------------------+");
console.log("| " + product1.id + "\t " + product1.name + "\t    " + product1.price + " USD \t   " + product1.quantity + "\t\t   " + product1.getTotalPrice() + " USD \t |");
console.log("+----------------------------------------------------------------+");
console.log("| " + product2.id + "\t " + product2.name + "\t    " + product2.price + " USD \t   " + product2.quantity + "\t\t   " + product2.getTotalPrice() + " USD \t |");
console.log("+----------------------------------------------------------------+");
console.log("| " + product3.id + "\t " + product3.name + "\t    " + product3.price + " USD \t   " + product3.quantity + "\t\t   " + product3.getTotalPrice() + " USD \t |");
console.log("+----------------------------------------------------------------+");
console.log("| \t \t \t \t \t \t" + "Total: " + invoiceTotal + " USD \t |")
console.log("===================================================================");