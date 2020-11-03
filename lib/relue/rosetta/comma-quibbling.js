function quibble(words) {
  let str = '';
  if (words.length == 0) {
    return '{}';
  } else if (words.length == 1) {
    return '{' + words[0] + '}';
  } else if (words.length == 2) {
    return '{' + words[0] + ' and ' + words[1] + '}';
  } else {
    const ult = words.length - 1;
    const penult = ult - 1;
    str = '{';
    for (let i = 0; i < words.length; i++) {
      if (i == penult) {
        str += words[i] + ' and ';
      } else if (i == ult) {
        str += words[i] + '}';
      } else {
        str += words[i] + ',';
      }
    }
  }
  return str;
}

console.log(quibble([]));
console.log(quibble(['abc']));
console.log(quibble(['abc', 'def']));
console.log(quibble(['abc', 'def', 'ghi']));
console.log(quibble(['abc', 'def', 'ghi', 'jkl']));