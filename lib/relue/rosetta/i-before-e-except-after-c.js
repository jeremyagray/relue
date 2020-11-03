function indexesOf(char, str) {
  let locs = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      locs.push(i);
    }
  }

  return locs;
}

function IBeforeExceptC(word) {
  const locs = indexesOf('c', word);

  for (let i = 0; i < word.length; i++) {
    if (locs[i] <= word.length - 1 - 2) {
      if (word.substring(locs[i], locs[i] + 3) == 'cie') {
        return false;
      }
    }
  }
  return true;
}

console.log(IBeforeExceptC('receive'));
console.log(IBeforeExceptC('science'));
console.log(IBeforeExceptC('imperceivable'));
console.log(IBeforeExceptC('inconceivable'));
console.log(IBeforeExceptC('insufficient'));
console.log(IBeforeExceptC('omniscient'));
