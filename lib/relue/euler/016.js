function sumOfDigits(n)
{
  let sum = 0;
  const nStr = n.toString();
  for (let i = 0; i < nStr.length; i++)
  {
    sum += parseInt(nStr[i]);
  }
  return sum;
}

function myPow(n)
{
  // Problems here (intentional?) with BigInt exponentiation.
  // Split into 2**40's, convert to BigInt and multiply.
  const splits = Math.floor(n / 40);
  const rem = n % 40;
  let prod = BigInt(1);

  for (let i = 1; i <= splits; i++)
  {
    prod = prod * BigInt(Math.pow(2, 40));
  }

  return prod * BigInt(Math.pow(2, rem));
}

function powerDigitSum(exponent)
{
  // return sumOfDigits(2n ** BigInt(exponent));
  if (exponent > 40)
  {
    return sumOfDigits(myPow(exponent));
  }
  else
  {
    return sumOfDigits(2 ** exponent);
  }
}

// console.log(Math.pow(2, 15));
// console.log(2 ** 15);
console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));
// console.log(Math.pow(2, 20));
// console.log(2 ** 20);
// console.log(powerDigitSum(20));
// console.log(2n.toString());
// console.log(BigInt(2).toString());
// console.log(20n.toString());
// console.log(BigInt(20).toString());
// let num = 2n ** 20n;
// let num = BigInt(2) ** BigInt(20);
// console.log(num.toString());
