function multiples(num, lim) {
  let mults = [];
  for (let i = num; i < lim; i++) {
    if ((i % num) == 0) {
      mults.push(i);
    }
  }
  return mults;
}
