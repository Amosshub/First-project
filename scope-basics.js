let a = 'first';
function scopeTest() { 
    console.log(a);
    a = 'changed'


    let b = 'second';

    if (a != '') {
        console.log(a);
      console.log('Inside if:' + b)

let c = 'third';
}

//console.log(c);
scopeTest();
//console.log(b);
console.log(a);
}