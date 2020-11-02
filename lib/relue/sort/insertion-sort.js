function insertionSort(array)
{
  for (let i = 1; i < array.length; i++)
  {
    console.log(array);
    let j = i;
    while (array[j] < array[j - 1])
    {
      // Swap elements.
      let tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j--;
    }
  }

  return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
