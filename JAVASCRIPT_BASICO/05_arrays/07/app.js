var numbers = [
    1, 2, 3, 4, 5, 6,
]

var result = numbers.every(function(value){
    return value >= 1;
});

console.log(result);

var result = numbers.some(function(value){
    return value >= 1;
});

console.log(result);