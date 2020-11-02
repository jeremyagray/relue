function counts(n)
{
  let count = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  const str = n.toString();

  for (let i = 0; i < str.length; i++)
  {
    count[str[i]] = count[str[i]] + 1;
  }

  return count;
}

function isSelfDescribing(n)
{
  const count = counts(n);
  const str = n.toString();

  for (let i = 0; i < str.length; i++)
  {
    if (parseInt(str[i]) != count[i.toString()])
    {
      return false;
    }
  }
  return true;
}

console.log(isSelfDescribing(1));
console.log(isSelfDescribing(11));
console.log(isSelfDescribing(2020));
console.log(isSelfDescribing(2020));
console.log(isSelfDescribing(3021));
console.log(isSelfDescribing(21200));
console.log(isSelfDescribing(3211000));
console.log(isSelfDescribing(42101000));
