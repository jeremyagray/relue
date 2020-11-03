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

function modPow(base, exp, divisor) {
  // let binExp = parseInt(exp.toString(2));
  let binExp = exp.toString(2);
  // console.log(binExp);

  let square = 1;
  for (let i = 0; i < binExp.length; i++) {
    square *= square;
    if (binExp[i] == '1') {
      square *= base;
    }
    square = square % divisor;
  }

  return square;
}

function check_mersenne(p) {
  // 1.  p must be prime.
  // 2.  modPow(2, p, 47) can not equal 1.
  let primeP = true;
  // const limit = Math.floor(Math.sqrt(Math.pow(2n, BigInt(p)) - 1n));
  const limit = Math.floor(Math.sqrt(Math.pow(2, p) - 1));

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      if (modPow(2, p, i) == 1) {
        return `M${p} = 2^${p}-1 is composite with factor ${i}`;
      }
    }
  }
  
  return `M${p} = 2^${p}-1 is prime`;
}

console.log(check_mersenne(3));
console.log(check_mersenne(23));
// console.log(check_mersenne(929));
