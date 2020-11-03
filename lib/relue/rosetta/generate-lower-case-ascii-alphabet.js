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

function lascii(a, b) {
  let ans = [];
  for (let i = letters.indexOf(a); i <= letters.indexOf(b); i++) {
    ans.push(letters[i]);
  }
  return ans;
}
