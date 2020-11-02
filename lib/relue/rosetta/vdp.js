const assert = require('assert').strict;

function dotProduct(...vectors) {
  if (!vectors || !vectors.length) {
    return null;
  }
  if (!vectors[0] || !vectors[0].length) {
    return null;
  }
  if (vectors.length % 2 !== 0) {
    return null;
  }

  const vectorLen = vectors[0].length;
  const numVectors = vectors.length;

  let dot = null;

  for (let i = 1; i < numVectors; i++) {
    if (vectors[i].length !== vectorLen) {
      return null;
    }
  }

  for (let i = 0; i < numVectors / 2; i++) {
    let sum = 0;

    for (let j = 0; j < vectorLen; j++) {
      sum += vectors[2 * i][j] * vectors[2 * i + 1][j];
    }

    if (dot === null) {
      dot = sum;
    } else {
      dot *= sum;
    }
  }
  return dot;
}

assert.equal(typeof dotProduct, 'function');
assert.equal(dotProduct(), null);
assert.equal(dotProduct([1], [1]), 1);
assert.equal(dotProduct([1], [1, 2]), null);
assert.equal(dotProduct([1, 2], [1]), null);
assert.equal(dotProduct([1, 2], [3, 4]), 11);
assert.equal(dotProduct([1, 2], [3, 4, 5]), null);
assert.equal(dotProduct([1, 2, 3], [4, 5]), null);
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
assert.equal(dotProduct([1, 0, 0], [0, 1, 0]), 0);
assert.equal(dotProduct([1, 0, 0], [0, 0, 1]), 0);
assert.equal(dotProduct([0, 1, 0], [0, 0, 1]), 0);
assert.equal(dotProduct([1, 0, 0], [0, 1, 0], [0, 0, 1]), null);
assert.equal(dotProduct([0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16], [0, 5, 10, 15, 20]), null);
assert.equal(dotProduct([0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]), 21600);
