function factors(num)
{
  let facs = [];
  for (let i = 1; i <= num; i++)
  {
    if (num % i == 0)
    {
      facs.push(i);
    }
  }
  return facs;
}
