var numbers = [
    1, 2, 3, 4, 5, 6,
]

var result = numbers.reduce(function(previousValue, currentValue, currentIndex, itmes){
    return previousValue + currentValue;
});

console.log(result);

var result = numbers.reduceRight(function(previousValue, currentValue, currentIndex, itmes){
    return previousValue + currentValue;
});

console.log(result);

