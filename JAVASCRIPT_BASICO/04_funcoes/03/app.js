function calc(n1, n2, n3)
{
    n3 = (n3 == undefined) ? 2 : n3;

    return ((n1 + n2) * 6) / n3;
}

console.log(calc(2, 4, 10));
