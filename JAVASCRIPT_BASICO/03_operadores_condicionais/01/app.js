var peso = prompt('Digite seu peso.');
var altura = prompt('Digite sua altura.');

altura /= 100;

console.log(peso);
console.log(altura);

var imc = peso / (altura * altura);

console.log(imc);

if (imc < 18.5)
{
    console.log('Abaixo do peso!');
}
else if((imc > 18.5) && (imc < 24.9))
{
    console.log('Peso ideal! Parabéns');
}
else if((imc > 25) && (imc < 29.9))
{
    console.log('Acima do peso!')
}
else if((imc > 30) && (imc < 34.9))
{
    console.log('Obesidade grau I!');
}
else if((imc > 35) && (imc < 39.9))
{
    console.log('Obesidade grau II! (Severa)');
}
else
{
    console.log('Obsidade grau III! (Mórbida');
}


