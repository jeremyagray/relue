function multiples(num, lim)
{
  let mults = [];
  for (let i = num; i < lim; i++)
  {
    if ((i % num) == 0)
    {
      mults.push(i);
    }
  }
  return mults;
}

function multiplesOf3and5(number)
{
  // Generate multiples.
  let threes = [...multiples(3, number)];
  let fives = [...multiples(5, number)];
  // Filter the multiples of 3 from the fives.
  fives = fives.filter((item) =>
  {
    if ((item % 3) == 0)
    {
      return false;
    }
    else
    {
      return true;
    }
  });
  let mults = [...threes, ...fives];
  return mults.reduce((sum, item) =>
  {
    return sum + item;
  }, 0);
}

console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(8456));
console.log(multiplesOf3and5(19564));