function factorial(n)
{
  if (n < 0)
  {
    return null;
  }
  else if (n <= 1)
  {
    return 1;
  }
  else
  {
    let prod = 1;
    for (let i = 1; i <= n; i++)
    {
      prod *= i;
    }

    return prod;
  }
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
