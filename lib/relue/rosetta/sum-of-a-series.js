function sum(a, b)
{
  let sum = 0;
  for (let i = a; i <= b; i++)
  {
    sum += 1 / Math.pow(i, 2);
  }
  return sum;
}
