function genFizzBuzz(rules, num)
{
    let str = '';

    for (let i = 0; i < rules.length; i++)
    {
        if (num % rules[i][0] == 0)
        {
            str += rules[i][1];
        }
    }

    return str || num;
}

console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6));
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10));
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12));
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13));
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15));
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15));
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105));
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 35));
