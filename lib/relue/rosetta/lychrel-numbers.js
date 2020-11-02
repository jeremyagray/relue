function reverse(n)
{
  let res = 0;
  let dig = 0;

  while (n > 0)
  {
    dig = n % 10;
    res = res * 10 + dig;
    n = Math.floor(n / 10);
  }
  return res;
}

function isPalindrome(n)
{
  const str = n.toString();

  for (let i = 0; i < Math.floor(str.length / 2); i++)
  {
    if (str[i] != str[str.length - 1 - i])
    {
      return false;
    }
  }

  return true;
}

function isLychrel(n)
{
  const limit = 500;
  let test = n;

  for (let i = 0; i <= limit; i++)
  {
    test = test + reverse(test);
    if (isPalindrome(test))
    {
      return false;
    }
  }

  return true;
}

console.log(isLychrel(12));
console.log(isLychrel(55));
console.log(isLychrel(196));
console.log(isLychrel(879));
console.log(isLychrel(44987));
console.log(isLychrel(7059));
