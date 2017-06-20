function Phone(brand, price, color, ram) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.ram = ram;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", amount of RAM is " + this.ram + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "2GB");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black", "2GB");
var OnePlusOne = new Phone("OnePlus", 1500, "white", "2GB");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
