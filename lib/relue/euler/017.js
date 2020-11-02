function spellNumber(n)
{
  let name = '';
  let num = n;
  
  if (num >= 1000)
  {
    let thousands = Math.floor(num / 1000);
    num = num % 1000;
    name += spellNumber(thousands) + ' thousand ';
  }
  
  if (num >= 100)
  {
    let hundreds = Math.floor(num / 100);
    num = num % 100;
    name += spellNumber(hundreds) + ' hundred' + (num ? ' and ' : '');
  }
  
  if (num > 19)
  {
    let tens = Math.floor(num / 10);
    num = num % 10;
    switch (tens)
    {
      case 9:
        name += num ? 'ninety-' : 'ninety ';
        break;
      case 8:
        name += num ? 'eighty-' : 'eighty ';
        break;
      case 7:
        name += num ? 'seventy-' : 'seventy ';
        break;
      case 6:
        name += num ? 'sixty-' : 'sixty ';
        break;
      case 5:
        name += num ? 'fifty-' : 'fifty ';
        break;
      case 4:
        name += num ? 'forty-' : 'forty ';
        break;
      case 3:
        name += num ? 'thirty-' : 'thirty ';
        break;
      case 2:
        name += num ? 'twenty-' : 'twenty ';
        break;
    }
    name += spellNumber(num);
    return name;
  }

  switch (num)
  {
    case 19:
      name += 'nineteen';
      break;
    case 18:
      name += 'eighteen';
      break;
    case 17:
      name += 'seventeen';
      break;
    case 16:
      name += 'sixteen';
      break;
    case 15:
      name += 'fifteen';
      break;
    case 14:
      name += 'fourteen';
      break;
    case 13:
      name += 'thirteen';
      break;
    case 12:
      name += 'twelve';
      break;
    case 11:
      name += 'eleven';
      break;
    case 10:
      name += 'ten';
      break;
    case 9:
      name += 'nine';
      break;
    case 8:
      name += 'eight';
      break;
    case 7:
      name += 'seven';
      break;
    case 6:
      name += 'six';
      break;
    case 5:
      name += 'five';
      break;
    case 4:
      name += 'four';
      break;
    case 3:
      name += 'three';
      break;
    case 2:
      name += 'two';
      break;
    case 1:
      name += 'one';
      break;
    case 0:
      name += '';
      break;
  }

  return name;
}

function countLetters(word)
{
  const clean = word.replace(/[^A-Za-z]/g, '');
  return clean.length;
}

function numberLetterCounts(n)
{
  let sum = 0;
  for (let i = 1; i <= n; i++)
  {
    sum += countLetters(spellNumber(i));
  }
  return sum;
}

// console.log(countLetters(spellNumber(5)));
// console.log(countLetters(spellNumber(150)));
// console.log(spellNumber(100));
// console.log(spellNumber(1000));
console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));
