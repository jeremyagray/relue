function idMatrix(n) {
  let id = [];
  
  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      if (i == j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    id.push(row);
  }

  return id;
}

console.log(idMatrix(1));
console.log(idMatrix(2));
console.log(idMatrix(3));
console.log(idMatrix(4));
