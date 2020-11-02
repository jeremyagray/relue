function fizzBuzz()
{
    let array = [];
    for (let i = 1; i <= 100; i++)
    {
        if (i % 15 == 0)
        {
            array.push('FizzBuzz');
            continue;
        }
        else if (i % 5 == 0)
        {
            array.push('Buzz');
            continue;
        }
        else if (i % 3 == 0)
        {
            array.push('Fizz');
            continue;
        }
        else
        {
            array.push(i);
        }
    }

    return array;
}

console.log(fizzBuzz());
