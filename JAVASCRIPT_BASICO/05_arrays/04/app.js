var family = [
    'Lucia',
    'Márcio',
    'Letícia',
    'Jefferson',
    'Jakson',
    'Mia',
    'Márcio',
]

/*
mostra a posição do item procurado, iniciando a procura pela posição 0, parando na primeira ocorrência, ou seja, como no exemplo acima, temos 2 Márcio, um na posição 1 e outro na posição 6, indexOf, assim que achar o primeiro item 'Márcio', ele para de procurar, então ele não mostrará o 'Márcio' da posição 6.
*/
console.log(family.indexOf('Márcio'));

// o mesmo ocorre com o lastIndexOf, a diferença é que começa a procurar na última posição o array.
console.log(family.lastIndexOf('Márcio'));

// é um método mais elaborado para encontrar item dentro de um array, sendo necessário ter uma função de callback
var result = family.findIndex(
    function(item)
    {
        return item == 'Mia';
    }
);

console.log(result);