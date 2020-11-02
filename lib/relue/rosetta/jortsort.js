function insertionSort(array)
{
  for (let i = 1; i < array.length; i++)
  {
    // console.log(array);
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

function arrayEqual(a, b)
{
    if (a === b)
    {
        // console.log('same object');
        return true;
    }
    else if (a.length !== b.length)
    {
        // console.log('different lengths');
        return false;
    }
    else
    {
        for (let i = 0; i < a.length; i++)
        {
            if (a[i] !== b[i])
            {
                // console.log('different element');
                return false;
            }
        }
        // console.log('all equal');
        return true;
    }
}

function jortsort(array)
{
    const mine = [...array];
    const sorted = insertionSort([...mine]);
    // console.log(`mine:  ${mine}`);
    // console.log(`sorted:  ${sorted}`);

    if (arrayEqual(mine, sorted))
    {
        return true;
    }
    else
    {
        return false;
    }
}
