const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

function validate(s) {
  let sum = 0;
  let val = 0;
  const check = s[8];

  for (let i = 0; i < 8; i++) {
    if (/\d/.test(s[i])) {
      val = parseInt(s[i]);
    } else if (/[A-Z]/.test(s)) {
      val = letters.indexOf(s[i].toLowerCase()) + 10;
    } else if (/\*/.test(s)) {
      val = 36;
    } else if (/@/.test(s)) {
      val = 37;
    } else if (/#/.test(s)) {
      val = 38;
    }

    if ((i + 1) % 2 == 0) {
      val *= 2;
    }

    sum += Math.floor(val / 10) + (val % 10);
  }

  sum = (10 - (sum % 10)) % 10;
  // console.log(`id:  ${s} check:  ${check} sum:  ${sum}`);
  return sum == parseInt(check) ? true : false;

  // if (sum == parseInt(check))
  // {
  //   console.log(`good id:  ${s} check:  ${check} sum:  ${sum}`);
  //   return true;
  // }
  // else
  // {
  //   console.log(`bad id:  ${s} check:  ${check} sum:  ${sum}`);
  //   return false;
  // }
}

function isCusip(s) {
  const code = s.toUpperCase();

  if (code.length != 9) {
    // console.log('length');
    return false;
  } else if (/[^A-Z0-9\*@#]/.test(code)) {
    // console.log('invalid chars');
    return false;
  }
  // else if (/[^A-Z0-9\*@#]{8}\d/.test(code))
  // {
  //   console.log('terminal non-digit');
  //   return false;
  // }
  else if (validate(code)) {
    // console.log('validation');
    return true;
  }

  // console.log('default');
  return false;
}
