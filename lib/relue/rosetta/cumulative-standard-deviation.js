function mean(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum / items.length;
}

function standardDeviation(items) {
  let sum = 0;
  const avg = mean(items);
  for (let i = 0; i < items.length; i++) {
    sum += Math.pow((avg - items[i]), 2);
  }
  const ans = Math.sqrt(sum / items.length).toFixed(3);
  return ans == parseInt(ans) ? parseInt(ans) : ans;
}

console.log(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]));
console.log(standardDeviation([600, 470, 170, 430, 300]));
console.log(standardDeviation([75, 83, 96, 100, 121, 125]));
console.log(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]));
console.log(standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314]));
console.log(parseInt('2.000'));
