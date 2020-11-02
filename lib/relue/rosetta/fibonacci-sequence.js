function fibonacci(n)
{
  let one = 0;
  let two = 1;
  let num = 0;

  if (n == 0)
  {
    return 0;
  }
  else if (n == 1)
  {
    return 1;
  }
  else
  {
    let i = 1;

    while (i < n)
    {
      num = one + two;
      i++;
      one = two;
      two = num;
    }

    return num;
  }
}

console.log(fibonacci(10));
