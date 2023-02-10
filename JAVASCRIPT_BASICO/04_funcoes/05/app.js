function aninhada(n1, n2, n3)
{
    function calc(n)
    {
        return n * n3;
    }

    return calc(n1) + calc(n2);
}

console.log(aninhada(2, 4, 4));