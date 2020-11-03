function quickSort(array) {
  if (array.length <= 1) {
    return array;
  } else if (array.length == 2) {
    if (array[0] <= array[1]) {
      return array;
    } else {
      return [array[1], array[0]];
    }
  } else {
    // console.log(array);
    const pivot = array[Math.floor((array.length - 1) / 2)];
    // console.log(`pivot:  ${pivot}`);
    let low = [];
    let pivots = [];
    let high = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        low.push(array[i]);
      } else if (array[i] == pivot) {
        pivots.push(array[i]);
      } else if (array[i] > pivot) {
        high.push(array[i]);
      }
    }
    // console.log(`low:  ${low}`);
    // console.log(`pivots:  ${pivots}`);
    // console.log(`highs:  ${high}`);
    return quickSort(low).concat(pivots).concat(quickSort(high));
  }
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
