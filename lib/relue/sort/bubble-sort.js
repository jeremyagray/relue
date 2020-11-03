function bubbleSort(array, debug = false) {
  let sorted = 1;

  while (sorted != 0) {
    if (debug) console.log(array);

    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (debug) console.log(`checking ${array[i]} and ${array[i + 1]}`);
      if (array[i] > array[i + 1]) {
        if (debug) console.log(`swapping ${array[i]} and ${array[i + 1]}`);
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swaps++;
      }
      sorted = swaps;
      if (debug) console.log(`swaps:  ${swaps}`);
    }
  }
  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92], false));
