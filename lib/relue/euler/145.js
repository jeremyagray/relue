const {performance} = require('perf_hooks');

// function reverse(n)
// {
//   return parseInt(n.toString().split('').reverse().join(''));
// }

function reverse(n) {
  let res = 0;
  let dig = 0;

  while (n > 0) {
    dig = n % 10;
    res = res * 10 + dig;
    n = Math.floor(n / 10);
  }
  return res;
}

function lastDigitZero(n) {
  return (n % 10 == 0);
}

// function allDigitsOdd(n)
// {
//   let nStr = n.toString();
//   for (let i = 0; i < nStr.length; i++)
//   {
//     if (parseInt(nStr[i]) % 2 == 0)
//     {
//       return false;
//     }
//   }
//   return true;
// }

function allDigitsOdd(n) {
  while (n > 0) {
    if (n % 2 == 0) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
}

function allDigitsEven(n) {
  while (n > 0) {
    if (n % 2 != 0) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
}

function findReversibles(n) {
  let num = 0;
  let base = 1;
  let digits = 1;
  for (let i = 1; i < n; i++) {
    // Keep up with the magnitude for calculating the first digit.
    if (i == base * 10) {
      base *= 10;
      digits++;
      continue;
    }

    // Eliminate numbers with a final zero.
    // if (lastDigitZero(i))
    if (i % 10 == 0) {
      continue;
    }

    // If first and last are equal, their sum must be even.  Reject.
    let first = Math.floor(i / base);
    let last = i % 10;

    if (first == last) {
      continue;
    }

    // If the sum of the first and last is even, reject.
    if ((first + last) % 2 == 0) {
      continue;
    }
          
    // Expensive check for remaining candidates.
    if (allDigitsOdd(i + reverse(i))) {
      console.log(i);
      num++;
    }
  }
  return num;
}

function euler145() {
  return findReversibles(1000000000);
}

// euler145();
// console.log(reverse2(314));
// let t0 = performance.now();
// console.log(findReversibles(1000));
// console.log(findReversibles(10000));
// console.log(findReversibles(99000));
// console.log(findReversibles(100000));
// console.log(findReversibles(1000000));
// console.log(findReversibles(10000000));
console.log(findReversibles(100000000));
// console.log(findReversibles(1000000000));
// let t1 = performance.now();
// console.log((t1-t0) + ' ms elapsed');
