function fibo(n) {
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 2];
  } else {
    let arr = [1, 2];
    let i = 2;
    while (arr[i - 2] + arr[i - 1] <= n) {
      arr.push(arr[i - 2] + arr[i - 1]);
      i++;
    }
    return arr;
  }
}

function fiboEvenSum(n) {
  const arr = fibo(n);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
// console.log(fibo(10));
console.log(fiboEvenSum(8));
console.log(fiboEvenSum(10));
console.log(fiboEvenSum(34));
console.log(fiboEvenSum(60));
console.log(fiboEvenSum(1000));
console.log(fiboEvenSum(100000));
console.log(fiboEvenSum(4000000));