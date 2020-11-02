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

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
