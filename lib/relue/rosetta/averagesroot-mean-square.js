function rms(vals) {
  let sum = 0;
  for (let i = 0; i < vals.length; i++) {
    sum += Math.pow(vals[i], 2);
  }

  return Math.sqrt(sum / vals.length);
}
