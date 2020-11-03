function getPower(n) {
  let p = 0;
  while (Math.pow(10, p) < n) {
    p++;
  }

  return Math.pow(10, p);
}

function babbage(babbageNum, endDigits) {
  const start = Math.floor(Math.sqrt(endDigits));
  const div = getPower(endDigits);
  // console.log(start);
  console.log(div);

  for (let i = start; i < babbageNum; i++) {
    // console.log(i % div);
    if ((i * i) % div == endDigits) {
      return i;
    }
  }
  return babbageNum;
}

console.log(babbage(99736, 269696));