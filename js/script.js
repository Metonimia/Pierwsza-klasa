function Phone(brand, color, price) {
	this.brand = brand;
	this.color = color;
	this.price = price;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', the color is ' + this.color + ' and the price is ' + this.price + '.' );
}

var iPhone6s = new Phone('Apple', 'white', 1700);

iPhone6s.printInfo();

var samsungGalaxyS6 = new Phone('Samsung', 'black', 1500);

samsungGalaxyS6.printInfo();

var onePlusOne = new Phone('OnePlus', 'white', 1300);

onePlusOne.printInfo();