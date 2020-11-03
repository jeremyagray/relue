function isBalanced(str) {
  let open = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '[') {
      open++;
    } else if (str[i] == ']') {
      if (open == 0) {
        return false;
      } else {
        open--;
      }
    }
  }
  if (open == 0) {
    return true;
  } else {
    return false;
  }
}
