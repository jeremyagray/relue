function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function factors(n) {
  if (n <= 1) {
    return [];
  } else if (isPrime(n)) {
    return [n];
  }

  const limit = Math.floor(Math.sqrt(n));
  let facs = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i) && (n % i == 0)) {
      facs.push(i);
      facs = facs.concat(factors(n/i));
      return facs;
    }
  }
}

function dictify(factors) {
  let dict = {};
  for (let i = 0; i < factors.length; i++) {
    if (dict[factors[i]] === undefined) {
      // console.log(factors[i] + ' was not in dictionary');
      dict[factors[i]] = 1;
    } else {
      // console.log(factors[i] + ' was in dictionary ' + dict[factors[i]] + ' times');
      dict[factors[i]] = dict[factors[i]] + 1;
    }
  }
  return dict;
}

function smallestMult(n) {
  // LCM:
  // 1.  Factor the numbers, 2 to n.
  // 2.  Find the highest power of each prime factor in all the factors.
  // 3.  Find the product of the factors.
  let lcm = {};
  for (let i = 2; i <= n; i++) {
    let factDict = dictify(factors(i));
    let facts = Object.keys(factDict);
    for (let j = 0; j < facts.length; j++) {
      if (lcm[facts[j]] === undefined || factDict[facts[j]] > lcm[facts[j]]) {
        lcm[facts[j]] = factDict[facts[j]];
      }
    }
  }

  let product = 1;
  let myKeys = Object.keys(lcm);
  for (let i = 0; i < myKeys.length; i++) {
    product *= Math.pow(myKeys[i], lcm[myKeys[i]]);
  }

  return product;
}

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(12));
// console.log(isPrime(13));
// console.log(factors(1));
// console.log(factors(2));
// console.log(factors(3));
// console.log(factors(4));
// console.log(factors(5));
// console.log(factors(6));
// console.log(factors(7));
// console.log(factors(8));
// console.log(factors(12));
console.log(smallestMult(20));
