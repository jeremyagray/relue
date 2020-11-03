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
