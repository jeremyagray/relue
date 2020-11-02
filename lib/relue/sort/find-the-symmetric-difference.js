function mergeSort(array)
{
  // console.log(array);
  // Get length.
  const len = array.length;

  if (len <= 1)
  {
    return array;
  }
  else if (len == 2)
  {
    if (array[0] <= array[1])
    {
      return array;
    }
    else
    {
      return [array[1], array[0]];
    }
  }
  else
  {
    const split = Math.floor((len - 1) / 2);
    const left = mergeSort(array.slice(0, split));
    const right = mergeSort(array.slice(split));
    let sorted = [];

    while (left.length > 0 || right.length > 0)
    {
      if (left.length != 0 && right.length != 0 && left[0] <= right[0])
      {
        sorted.push(left.shift());
      }
      else if (left.length != 0 && right.length != 0 && left[0] > right[0])
      {
        sorted.push(right.shift());
      }
      else if (left.length != 0 && right.length == 0)
      {
        sorted.push(left.shift());
      }
      else if (left.length == 0 && right.length != 0)
      {
        sorted.push(right.shift());
      }
      // console.log(`left: ${left}`);
      // console.log(`right: ${right}`);
      // console.log(`sorted: ${sorted}`);
    }
    return sorted;
  }
}

function unique(array)
{
  let uniq = [];

  for (let i = 0; i < array.length; i++)
  {
    if (! uniq.includes(array[i]))
    {
      uniq.push(array[i]);
    }
  }

  return uniq;
}

function arrayToDict(array)
{
  let dict = {};
  
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] in dict)
    {
      dict[array[i]] = dict[array[i]]++;
    }
    else
    {
      dict[array[i]] = 1;
    }
  }

  return dict;
}

function symmetricDifference(one, two)
{
  let diff = [];

  const uniqOne = unique(one);
  const uniqTwo = unique(two);

  // console.log(`unique one:  ${uniqOne}`);
  // console.log(`unique two:  ${uniqTwo}`);

  for (let i = 0; i < uniqOne.length; i++)
  {
    if (! uniqTwo.includes(uniqOne[i]))
    {
      diff.push(uniqOne[i]);
    }
  }

  for (let i = 0; i < uniqTwo.length; i++)
  {
    if (! uniqOne.includes(uniqTwo[i]))
    {
      diff.push(uniqTwo[i]);
    }
  }

  // const oneDict = arrayToDict(one);
  // const twoDict = arrayToDict(two);

  // console.log(oneDict);
  // console.log(twoDict);

  // for (const [k, v] of Object.entries(oneDict))
  // {
  //   if (! (k in twoDict))
  //   {
  //     diff.push(parseInt(k));
  //     delete twoDict[k];
  //   }
  // }

  // for (const [k, v] of Object.entries(twoDict))
  // {
  //   if (! (k in oneDict))
  //   {
  //     diff.push(parseInt(k));
  //     delete oneDict[k];
  //   }
  // }

  return diff;
}

function sym(args)
{
  // console.log(arguments.length);
  let one = arguments[0];
  for (let i = 1; i < arguments.length; i++)
  {
    // console.log(`i:  ${i} arg:  ${arguments[i]}`);
    one = symmetricDifference(one, arguments[i]);
  }

  // Return sorted list.
  // Not mentioned in spec, but present in tests.
  return mergeSort(one);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
