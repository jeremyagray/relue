function aMean(vals) {
  let sum = 0;
  for (let i = 0; i < vals.length; i++) {
    sum += vals[i];
  }

  return sum / vals.length;
}

function gMean(vals) {
  let prod = 1;
  for (let i = 0; i < vals.length; i++) {
    prod *= vals[i];
  }

  return Math.pow(prod, (1/vals.length));
}

function hMean(vals) {
  let hSum = 0;
  for (let i = 0; i < vals.length; i++) {
    hSum += (1 / vals[i]);
  }

  return vals.length / hSum;
}

function pythagoreanMeans(vals) {
  const am = aMean(vals);
  const gm = gMean(vals);
  const hm = hMean(vals);
  let testMeans = '';
  if (am >= gm && gm >= hm) {
    testMeans = 'yes';
  } else {
    testMeans = 'no';
  }

  // return `{\n  values: {\n    Arithmetic: ${am},\n    Geometric: ${gm},\n    Harmonic: ${hm}\n  },\n  test: 'is A >= G >= H ? ${testMeans}'\n}`;
  return {
    values: {
      Arithmetic: am,
      Geometric: gm,
      Harmonic: hm
    },
    test: 'is A >= G >= H ? ' + testMeans
  };
}

console.log(pythagoreanMeans([1,2,3,4,5,6,7,8,9,10]));