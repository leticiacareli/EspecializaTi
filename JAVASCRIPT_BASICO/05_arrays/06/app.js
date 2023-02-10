var humans = [
    'Lucia',
    'Márcio',
    'Letícia',
    'Jefferson',
    'Jakson',
    'Luan',
    'Paulo',
]

console.log(humans.sort());

var result = humans.map(
    function(item){
        return item.toUpperCase();
    }
);

console.log(result);


result = humans.filter(
    function(item){
        return item == 'Lucia';
    }
);

console.log(result);