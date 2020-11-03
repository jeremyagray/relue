function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

function squareOfSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum * sum;
}

function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

console.log(sumSquareDifference(100));
