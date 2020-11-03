function findMin(array) {
  let min = array[0];
  let index = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }

  return index;
}

function selectionSort(array, debug = false) {
  for (let i = 0; i < array.length; i++) {
    if (debug) console.log(array);
    let index = findMin(array.slice(i)) + i;
    if (debug) console.log(index);

    if (i != index) {
      let tmp = array[i];
      array[i] = array[index];
      array[index] = tmp;
    }
  }
  return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92], false));
