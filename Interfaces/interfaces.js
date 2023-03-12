var FULL_NAME = {
    id: 1,
    first: "Fred",
    last: "Solis",
    sayHi: function () {
        return "Hello!";
    }
};
var shirt = {
    name: "Palm Angels T",
    price: 440,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shirt.applyDiscount(0.2));
