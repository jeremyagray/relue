function luhnTest(str)
{
  const rev = str.split('').reverse().join('');
  // console.log(rev);
  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < rev.length; i++)
  {
    if ((i + 1) % 2 == 0)
    {
      // Even sum (s2).
      let vals = (2 * parseInt(rev[i])).toString().split('');
      // console.log(vals);
      let sum = 0;
      for (let j = 0; j < vals.length; j++)
      {
        sum += parseInt(vals[j]);
      }
      s2 += sum;
    }
    else
    {
      // Odd sum (s1).
      s1 += parseInt(rev[i]);
    }
  }

  // console.log(`s1:  ${s1} s2:  ${s2}`);

  if ((s1 + s2) % 10 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(luhnTest("4111111111111111"));
console.log(luhnTest("4111111111111112"));
console.log(luhnTest("49927398716"));
console.log(luhnTest("49927398717"));
console.log(luhnTest("1234567812345678"));
console.log(luhnTest("1234567812345670"));
