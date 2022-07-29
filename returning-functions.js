// DON'T DO 2 AND 3
// var myVariable = 'I am at the global scope';
// var myFunction = function() {crossOriginIsolated.log('me too!');}


/*
//function one(); {
 //   return 'one';
//}

//let value = one();
//console.log(value);

console.log(typeof one)
console.log(value ());



function two() {
    return function () {
    console.log('two');
}
}

let myfunction = two();
myfunction();
*/

function three() {
    return function() {
        return 'three';
    }
}

console.log(three()());