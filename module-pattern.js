let counter = (function() {
    let count= 0;
    function print(message) {
        console.log(message + '----' + count);
    }
    
return {
    value: count,

    increment: function() {
        count += 1;
        print ('After increment: ');
    },
    
    reset: function() {
        print('Before reset: ');
        count = 0;
        print('After reset:')
    }
}
})();

counter.increment();
counter.increment();
counter.increment();

// console.log(counter.value);
counter.set(7);
console.log(counter.get());


counter.reset();