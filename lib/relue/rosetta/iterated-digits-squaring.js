function sumSqDigits(m) {
  let n = m;
  let sum = 0;
  while (n > 0) {
    let dig = n % 10;
    sum += dig * dig;
    n = Math.floor(n / 10);
  }

  return sum;
}

function iteratedSquare(m) {
  let n = m;
  while (n !== 89 && n !== 1) {
    n = sumSqDigits(n);
    // console.log(n);
  }
  return n;
}

console.log(`n: 4 ${iteratedSquare(4)}`);
console.log(`n: 7 ${iteratedSquare(7)}`);
console.log(`n: 15 ${iteratedSquare(15)}`);
console.log(`n: 20 ${iteratedSquare(20)}`);
console.log(`n: 70 ${iteratedSquare(70)}`);
console.log(`n: 100 ${iteratedSquare(100)}`);
