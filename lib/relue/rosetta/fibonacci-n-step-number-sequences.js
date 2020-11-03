function fibo(n) {
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 1];
  } else {
    let arr = [1, 1];
    let i = 2;
    while (i < n) {
      arr.push(arr[i - 2] + arr[i - 1]);
      i++;
    }
    return arr;
  }
}

function lucas(n) {
  if (n == 1) {
    return [2];
  } else if (n == 2) {
    return [2, 1];
  } else {
    let arr = [2, 1];
    let i = 2;
    while (i < n) {
      arr.push(arr[i - 2] + arr[i - 1]);
      i++;
    }
    return arr;
  }
}

function fibon(n, l) {
  let arr;
  
  if (n == 2) {
    arr = fibo(n);
  } else {
    arr = fibon(n - 1, n);
  }

  for (let i = n; i < l; i++) {
    let next = 0;
    for (let j = i - n; j < i; j++) {
      next += arr[j];
    }
    arr.push(next);
  }
  return arr;
}

function lucasn(n, l) {
  let arr;
  
  if (n == 2) {
    arr = lucas(n);
  } else {
    arr = lucasn(n - 1, n);
  }

  for (let i = n; i < l; i++) {
    let next = 0;
    for (let j = i - n; j < i; j++) {
      next += arr[j];
    }
    arr.push(next);
  }
  return arr;
}

function fib_luc(n, len, w) {
  let arr = [];

  if (w == 'f') {
    arr = fibon(n, len);
  } else if (w == 'l') {
    arr = lucasn(n, len);
  }

  return arr;
}

// console.log(fib_luc(2, 10, "f"));
// console.log(fib_luc(3, 15, "f"));
// console.log(fib_luc(4, 15, "f"));
// console.log(lucas(10));
console.log(fib_luc(2, 10, 'l'));
console.log(fib_luc(3, 15, 'l'));
console.log(fib_luc(4, 15, 'l'));
console.log(fib_luc(5, 15, 'l'));
