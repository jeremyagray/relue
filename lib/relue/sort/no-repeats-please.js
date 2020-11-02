function permutations(str)
{
  if (str.length <= 1)
  {
    return [str];
  }
  else if (str.length == 2)
  {
    return [str[0] + str[1], str[1] + str[0]];
  }
  else
  {
    let perms = [];

    for (let i = 0; i < str.length; i++)
    {
      let char = str[i];
      let nstr = str.substring(0, i) + str.substring(i + 1);
      let nperms = permutations(nstr);
      for (let j = 0; j < nperms.length; j++)
      {
        perms.push(char + nperms[j]);
      }
    }
    return perms;
  }
}

function hasRepeats(str)
{
  for (let i = 0; i < str.length - 1; i++)
  {
    if (str[i] == str[i + 1]) return true;
  }

  return false;
}

function countRepeats(array)
{
  return array.reduce((count, item) =>
  {
    if (hasRepeats(item))
    {
      return count;
    }
    else
    {
      count += 1;
      return count;
    }
  }, 0);
}

function permAlone(str)
{
  return countRepeats(permutations(str));
}

// console.log(hasRepeats('aab'));
// console.log(hasRepeats('aba'));

// console.log(permutations('aab'))
// console.log(permutations('a'))

console.log(permAlone('aab'));
console.log(permAlone('aaa'));
console.log(permAlone('aabb'));
console.log(permAlone('abcdefa'));
console.log(permAlone('abfdefa'));
console.log(permAlone('zzzzzzzz'));
console.log(permAlone('a'));
console.log(permAlone('aaab'));
console.log(permAlone('aaabb'));
