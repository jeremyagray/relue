function pairSort(a, b)
{
  if ((a[0] + a[1]) < (b[0] + b[1]))
  {
    return -1;
  }
  else if ((a[0] + a[1]) == (b[0] + b[1]))
  {
    if (a[0] < b[0])
    {
      return -1;
    }
    else if (a[0] == b[0])
    {
      return 0;
    }
    else if (a[0] > b[0])
    {
      return 1;
    }
  }
  else if ((a[0] + a[1]) > (b[0] + b[1]))
  {
    return 1;
  }
}

function pairwise(arr, arg)
{
  let sum = 0;
  let array = [...arr];
  let pairs = [];
  let used = [];

  // Find all the possible pairs.
  for (let i = 0; i < array.length; i++)
  {
    for (let j = i + 1; j < array.length; j++)
    {
      if (array[i] + array[j] == arg)
      {
        pairs.push([i, j]);
      }
    }
  }

  // Keep track of the used indices while summing.
  for (let i = 0; i < pairs.length; i++)
  {
    if (! (used.includes(pairs[i][0]) || used.includes(pairs[i][1])))
    {
      sum = sum + pairs[i][0] + pairs[i][1];
      used = used.concat(pairs[i]);
    }
  }

  return sum;
}

console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1,3,2,4], 4));
console.log(pairwise([1,1,1], 2));
console.log(pairwise([0,0,0,0,1,1], 1));
console.log(pairwise([], 100));
