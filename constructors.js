/* /* let car = {
    make: 'bmw',
    model: '745li',
    year: '2010',
}; */

/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new Car('bmw', '745li', 2010);
console.log(myCar); */ 

function myFunction() {
    console.log('I am as a simple function');

}
let myFunction = new myFunction();
console.log(typeof myFunction);

// Can't really do anything with this particular object ... I'ts certainly NOT a function
// reference anymoer!
// myFunction();