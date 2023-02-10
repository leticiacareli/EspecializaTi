var family = [
    'Lucia',
    'Márcio',
    'Letícia',
    'Jefferson',
    'Jakson',
    'Mia',
]

console.log(family);

// add item no final do array
family.push('Luan', 'Paulo');
console.log(family);

// add item no início do array
family.unshift('Luzia', 'Manoel', 'Cida', 'Nilton');
console.log(family);

// remove 1 item do fim do array
family.pop();
family.pop();
console.log(family);

// remove 1 item do início do array
family.shift(); 
family.shift(); 
family.shift(); 
family.shift(); 
console.log(family);