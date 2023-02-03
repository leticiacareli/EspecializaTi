var n1 = 1;
var n2 = 5;
var tipo = '5';

igual = n1 == n2;
igual_tipo = n1 === tipo;
diferente = n1 != n2;
diferente_tipo = n1 !== n2;
maior = n1 > n2;
maior_igual = n1 >= n2;
menor = n1 < n2;
menor_igual = n1 <= n2;

console.log(n1 + ' igual ao ' + n2 + ' -> ' + igual);
console.log(n1 + ' igual e do mesmo tipo que ' + tipo + ' -> ' + igual_tipo);//compara também se os tipos (int, string ...) são iguais
console.log(n1 + ' é diferente de ' + n2 + ' -> ' + diferente);
console.log(n1 + ' é diferente de ' + tipo + ' -> ' + diferente_tipo); //compara também se os tipos (int, string ...) são diferentes
console.log(n1 + ' é maior que ' + n2 + ' -> ' + maior);
console.log(n1 + ' é maior ou igual que ' + n2 + ' -> ' + maior_igual);
console.log(n1 + ' é menor' + n2 + ' -> ' + menor);
console.log(n1 + ' é menor ou igual ' + n2 + ' -> ' + menor_igual);

