var n = 20;

function recursiva(n)
{
    console.log(n);

    if(n > 0)
    {
        return recursiva(n - 1);
    }
}

recursiva(n);