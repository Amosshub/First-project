//declaration
class Car {
    constructor(make,mode,year) {
        this.make = make;
        this.model = mode;
        this.year = year;
    }
 print() {
    console.log('${this.make} ${this.mode} (${this.year})');
 }
}

let myCar = new Car('bmw', '745li', 2010);
myCar.print();
// expression
//let car = class {

//}

class SporstsCar extends Car {
    revEngine() {
        console.log('Vrrroom goes the ' + this.model);
    }

}

let mySportsCar = new SporstsCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();