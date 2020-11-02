function collatzNext(n)
{
  if (n % 2 == 0)
  {
    return n / 2;
  }
  else
  {
    return 3*n + 1;
  }
}

function collatzChain(n)
{
  if (n == 1)
  {
    return [1];
  }
  else
  {
    let seq = [n];
    seq = seq.concat(collatz(collatzNext(n)));
    return seq;
  }
}

function collatzLength(n)
{
  if (n == 1)
  {
    return 1;
  }
  else
  {
    let length = 1;
    length = length + collatzLength(collatzNext(n));
    // console.log(`${n} ${length}`)
    return length;
  }
}

function longestCollatzSequence(n)
{
  let max = 0;
  let num = 1;
  for (let i = 1; i < n; i++)
  {
    let current = collatzLength(i);
    if (current > max)
    {
      max = current;
      num = i;
    }
  }
  return num;
}

console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5487));
console.log(longestCollatzSequence(46500));
console.log(longestCollatzSequence(54512));
console.log(longestCollatzSequence(100000));
console.log(longestCollatzSequence(1000000));