function letterFrequency(txt)
{
  let dict = {};
  let arr = [];

  for (let i = 0; i < txt.length; i++)
  {
    if (txt[i] in dict)
    {
      dict[txt[i]] = dict[txt[i]] + 1;
    }
    else
    {
      dict[txt[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(dict))
  {
    arr.push([key, value]);
  }

  arr.sort((a, b) =>
           {
             if (a[0] > b[0])
             {
               return 1;
             }
             else if (a[0] < b[0])
             {
               return -1;
             }
             else
             {
               return 0;
             }
           });

  return arr;
}

console.log(letterFrequency("Not all that Mrs. Bennet, however"));
console.log(letterFrequency("daughters, could ask on the "));
console.log(letterFrequency("husband any satisfactory description"));
console.log(letterFrequency("in various ways--with barefaced"));
console.log(letterFrequency("distant surmises; but he eluded"));
console.log(letterFrequency("last obliged to accept the second-hand,"));
