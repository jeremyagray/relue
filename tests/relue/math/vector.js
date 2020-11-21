'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('class relue.math.Vector', function() {
  test('relue.math.Vector() is a class', function(done) {
    assert.equal(typeof relue.math.Vector,
                 'function',
                 'relue.math.Vector should be a function.');

    done();
  });

  test('class relue.math.Vector() returns an object', function(done) {
    const actual = new relue.math.Vector([1, 0]);
    assert.equal(typeof actual,
                 'object',
                 'relue.math.Vector([1, 0]) should be an object.');

    done();
  });

  test('class relue.math.Vector() returns a Vector', function(done) {
    const actual = new relue.math.Vector([1, 0]);
    assert.isTrue(actual instanceof relue.math.Vector,
                  'relue.math.Vector([1, 0]) should be an instance of Vector.');

    done();
  });

  test('class relue.math.Vector() input type checks', function(done) {
    const actual = new relue.math.Vector(
      [null, undefined, true, false, '', 'a', 'prime', 0, 1, Math.PI, Math.E]);
    const expected = 4;
    assert.equal(actual.length,
                 expected,
                 'Invalid inputs should not be in this.elements.');

    done();
  });

  test('class relue.math.Vector, bracket checks', function(done) {
    const actual = new relue.math.Vector([0, 1]);
    const left = 'Left brackets should match.';
    const right = 'Right brackets should match.';

    assert.equal(actual.left, '<', left);
    assert.equal(actual.right, '>', right);

    actual.brackets = '[]';
    assert.equal(actual.left, '[', left);
    assert.equal(actual.right, ']', right);

    actual.brackets = '{}';
    assert.equal(actual.left, '{', left);
    assert.equal(actual.right, '}', right);

    actual.brackets = '<|';
    assert.equal(actual.left, '<', left);
    assert.equal(actual.right, '|', right);

    actual.brackets = '|>';
    assert.equal(actual.left, '|', left);
    assert.equal(actual.right, '>', right);

    actual.brackets = '<>';
    actual.brackets = 'xx';
    assert.equal(actual.left, '<', left);
    assert.equal(actual.right, '>', right);

    done();
  });

  test('class relue.math.Vector.equal() length checks', function(done) {
    let one = new relue.math.Vector([0, 1]);
    let two = new relue.math.Vector([0, 0, 1]);
    let msg = 'Vector lengths should match for equality.';
    
    assert.isNull(one.equal(two), msg);
    assert.isNull(two.equal(one), msg);

    done();
  });

  test('class relue.math.Vector.equal()', function(done) {
    const good = 'Vectors should be equal.';
    const bad = 'Vectors should not be equal.';
    
    // Integers.
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);

      assert.isTrue(oneV.equal(oneV), good);
      assert.isTrue(twoV.equal(twoV), good);
      assert.isFalse(oneV.equal(twoV), bad);
      assert.isFalse(twoV.equal(oneV), bad);
    }

    // Floats.
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);

      assert.isTrue(oneV.equal(oneV), good);
      assert.isTrue(twoV.equal(twoV), good);
      assert.isFalse(oneV.equal(twoV), bad);
      assert.isFalse(twoV.equal(oneV), bad);
    }

    done();
  });

  test('class relue.math.Vector.addition() length checks', function(done) {
    let one = new relue.math.Vector([0, 1]);
    let two = new relue.math.Vector([0, 0, 1]);
    let msg = 'Vector lengths should match for addition.';
    
    assert.isNull(one.add(two), msg);
    assert.isNull(two.add(one), msg);

    done();
  });

  test('class relue.math.Vector.add(), integers', function(done) {
    const msg = 'Elements should be equal.';

    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];
      let sum = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
        sum.push(a + b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let sumOne = oneV.add(twoV);
      let sumTwo = twoV.add(oneV);

      for (let j = 0; j < length; j++) {
        assert.equal(sumOne.elements[j], sum[j], msg);
        assert.equal(sumTwo.elements[j], sum[j], msg);
      }
    }

    done();
  });

  test('class relue.math.Vector.add(), floats', function(done) {
    const msg = 'Elements should be equal.';

    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];
      let sum = [];
    
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
        sum.push(a + b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let sumOne = oneV.add(twoV);
      let sumTwo = twoV.add(oneV);

      for (let j = 0; j < length; j++) {
        assert.equal(sumOne.elements[j], sum[j], msg);
        assert.equal(sumTwo.elements[j], sum[j], msg);
      }
    }

    done();
  });

  test('class relue.math.Vector.subtraction() length checks',
       function(done) {
         let one = new relue.math.Vector([0, 1]);
         let two = new relue.math.Vector([0, 0, 1]);
         let msg = 'Vector lengths should match for subtraction.';
         
         assert.isNull(one.subtract(two), msg);
         assert.isNull(two.subtract(one), msg);

         done();
       });

  test('class relue.math.Vector.subtraction() integers', function(done) {
    const msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];
      let diff = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
        diff.push(a - b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let diffOne = oneV.subtract(twoV);
      let diffTwo = twoV.subtract(oneV);

      for (let j = 0; j < length; j++) {
        assert.equal(diffOne.elements[j], diff[j], msg);
        assert.equal(diffTwo.elements[j], -diff[j], msg);
      }
    }

    done();
  });

  test('class relue.math.Vector, float subtraction', function(done) {
    const msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];
      let diff = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
        diff.push(a - b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let diffOne = oneV.subtract(twoV);
      let diffTwo = twoV.subtract(oneV);

      for (let j = 0; j < length; j++) {
        assert.equal(diffOne.elements[j], diff[j], msg);
        assert.equal(diffTwo.elements[j], -diff[j], msg);
      }
    }

    done();
  });

  test('class relue.math.Vector.dot() length checks',
       function(done) {
         let one = new relue.math.Vector([0, 1]);
         let two = new relue.math.Vector([0, 0, 1]);
         let msg = 'Vector lengths should match for dot product.';
         
         assert.isNull(one.dot(two), msg);
         assert.isNull(two.dot(one), msg);

         done();
       });

  test('class relue.math.Vector, unit vector dot products',
       function(done) {
         let one = new relue.math.Vector([1, 0]);
         let two = new relue.math.Vector([0, 1]);
         let actual = one.dot(two);
         let expected = 0;
         let msg = 'Expected dot products should equal.';
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = two.dot(one);

         assert.equal(actual,
                      expected,
                      msg);

         one = new relue.math.Vector([1, 0, 0]);
         two = new relue.math.Vector([0, 1, 0]);
         let three = new relue.math.Vector([0, 0, 1]);
         actual = one.dot(two);
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = two.dot(three);
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = one.dot(three);
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = three.dot(one);
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = two.dot(three);
         
         assert.equal(actual,
                      expected,
                      msg);

         actual = three.dot(two);
         
         assert.equal(actual,
                      expected,
                      msg);

         done();
       });

  test('class relue.math.Vector, integer dot products', function(done) {
    let one = [];
    let two = [];
    let dot = 0;
    let msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      one = [];
      two = [];
      dot = 0;
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
        dot += a * b;
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let dotOne = oneV.dot(twoV);
      let dotTwo = twoV.dot(oneV);

      assert.equal(dotOne,
                   dot,
                   msg);
      assert.equal(dotTwo,
                   dot,
                   msg);
    }

    done();
  });

  test('class relue.math.Vector, float dot products', function(done) {
    let one = [];
    let two = [];
    let dot = 0;
    let msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      one = [];
      two = [];
      dot = 0;
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
        dot += a * b;
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let dotOne = oneV.dot(twoV);
      let dotTwo = twoV.dot(oneV);

      assert.equal(dotOne,
                   dot,
                   msg);
      assert.equal(dotTwo,
                   dot,
                   msg);
    }

    done();
  });

  test('class relue.math.Vector, mis-matched length orthogonality',
       function(done) {
         let one = new relue.math.Vector([0, 1]);
         let two = new relue.math.Vector([0, 0, 1]);
         let msg = 'Vector lengths should match for orthogonality.';
         
         assert.isNull(one.isOrthogonal(two),
                       msg);
         assert.isNull(two.isOrthogonal(one),
                       msg);

         done();
       });

  test('class relue.math.Vector, unit vector orthogonality',
       function(done) {
         let one = new relue.math.Vector([1, 0]);
         let two = new relue.math.Vector([0, 1]);
         let actual = one.isOrthogonal(two);
         let msg = 'Unit vectors should be orthogonal.';
         let msgFalse = 'A vector should not be orthogonal to itself.';
         
         assert.isTrue(actual,
                       msg);

         actual = two.isOrthogonal(one);

         assert.isTrue(actual,
                       msg);

         actual = one.isOrthogonal(one);

         assert.isFalse(actual,
                        msgFalse);

         actual = two.isOrthogonal(two);

         assert.isFalse(actual,
                        msgFalse);

         one = new relue.math.Vector([1, 0, 0]);
         two = new relue.math.Vector([0, 1, 0]);
         let three = new relue.math.Vector([0, 0, 1]);

         actual = one.isOrthogonal(two);
         assert.isTrue(actual,
                       msg);

         actual = two.isOrthogonal(three);
         assert.isTrue(actual,
                       msg);

         actual = one.isOrthogonal(three);
         assert.isTrue(actual,
                       msg);

         actual = three.isOrthogonal(one);
         assert.isTrue(actual,
                       msg);

         actual = two.isOrthogonal(three);
         assert.isTrue(actual,
                       msg);

         actual = three.isOrthogonal(two);
         assert.isTrue(actual,
                       msg);

         actual = one.isOrthogonal(one);
         assert.isFalse(actual,
                        msgFalse);

         actual = two.isOrthogonal(two);
         assert.isFalse(actual,
                        msgFalse);

         actual = three.isOrthogonal(three);
         assert.isFalse(actual,
                        msgFalse);

         done();
       });

  test('class relue.math.Vector.projection(), length checks', function(done) {
    let one = new relue.math.Vector([0, 1]);
    let two = new relue.math.Vector([0, 0, 1]);
    let msg = 'Vector lengths should match for dot product.';
    
    assert.isNull(one.projection(two),
                  msg);
    assert.isNull(two.projection(one),
                  msg);

    done();
  });

  test('class relue.math.Vector.projection(), zero vectors', function(done) {
    const msg = 'Zero vector projections should equal the zero vector.';
    let one, three, zero;
    let actual;

    one = new relue.math.Vector([1, 0]);
    zero = new relue.math.Vector([0, 0]);

    actual = one.projection(zero);
    assert.isTrue(actual.equal(one), msg);

    actual = zero.projection(one);
    assert.isTrue(actual.equal(zero), msg);

    three = new relue.math.Vector([0, 0, 1]);
    zero = new relue.math.Vector([0, 0, 0]);

    actual = three.projection(zero);
    assert.isTrue(actual.equal(three), msg);

    actual = zero.projection(three);
    assert.isTrue(actual.equal(zero), msg);

    done();
  });

  test('class relue.math.Vector.projection(), unit vectors', function(done) {
    const msg = 'Projections should be equal.';
    let one, two, three;
    let actual, expected;

    one = new relue.math.Vector([1, 0]);
    two = new relue.math.Vector([0, 1]);

    actual = one.projection(two);
    expected = new relue.math.Vector([0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = two.projection(one);
    expected = new relue.math.Vector([0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = one.projection(one);
    expected = one;
    assert.isTrue(actual.equal(expected), msg);

    actual = two.projection(two);
    expected = two;
    assert.isTrue(actual.equal(expected), msg);

    one = new relue.math.Vector([1, 0, 0]);
    two = new relue.math.Vector([0, 1, 0]);
    three = new relue.math.Vector([0, 0, 1]);

    actual = one.projection(two);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = two.projection(one);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = one.projection(three);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = three.projection(one);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = two.projection(three);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = three.projection(two);
    expected = new relue.math.Vector([0, 0, 0]);
    assert.isTrue(actual.equal(expected), msg);

    actual = one.projection(one);
    expected = one;
    assert.isTrue(actual.equal(expected), msg);

    actual = two.projection(two);
    expected = two;
    assert.isTrue(actual.equal(expected), msg);

    actual = three.projection(three);
    expected = three;
    assert.isTrue(actual.equal(expected), msg);

    done();
  });

  test('class relue.math.Vector.projection(), integers', function(done) {
    let msg = 'Projections should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let projOne = oneV.projection(twoV);
      let projTwo = twoV.projection(oneV);
      let coef = oneV.dot(twoV) / twoV.dot(twoV);
      let projOneExpected = new relue.math.Vector(twoV.elements.map((item) => {
        return coef * item;
      }));
      coef = twoV.dot(oneV) / oneV.dot(oneV);
      let projTwoExpected = new relue.math.Vector(oneV.elements.map((item) => {
        return coef * item;
      }));

      assert.isTrue(projOne.equal(projOneExpected), msg);
      assert.isTrue(projTwo.equal(projTwoExpected), msg);
    }

    done();
  });

  test('class relue.math.Vector.projection(), floats', function(done) {
    let msg = 'Projections should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = relue.math.randomInteger(2, 10);
      let one = [];
      let two = [];

      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let projOne = oneV.projection(twoV);
      let projTwo = twoV.projection(oneV);
      let coef = oneV.dot(twoV) / twoV.dot(twoV);
      let projOneExpected = new relue.math.Vector(twoV.elements.map((item) => {
        return coef * item;
      }));
      coef = twoV.dot(oneV) / oneV.dot(oneV);
      let projTwoExpected = new relue.math.Vector(oneV.elements.map((item) => {
        return coef * item;
      }));

      assert.isTrue(projOne.equal(projOneExpected), msg);
      assert.isTrue(projTwo.equal(projTwoExpected), msg);
    }

    done();
  });

  test('class relue.math.Vector, magnitude', function(done) {
    const msg = 'Magnitudes values should equal.';
    let actual, expected;

    let one = new relue.math.Vector([3, 4]);
    actual = one.magnitude();
    expected = 5;
    assert.equal(actual, expected, msg);
    
    one = new relue.math.Vector([6, 8]);
    actual = one.magnitude();
    expected = 10;
    assert.equal(actual, expected, msg);
    
    one = new relue.math.Vector([5, 12]);
    actual = one.magnitude();
    expected = 13;
    assert.equal(actual, expected, msg);
    
    one = new relue.math.Vector([3, 4, 12]);
    actual = one.magnitude();
    expected = 13;
    assert.equal(actual, expected, msg);
    
    done();
  });

  test('class relue.math.Vector, normalize', function(done) {
    const msg = 'Normalized vector elements should be equal.';
    let actual, expected;

    let one = new relue.math.Vector([1, 0]);
    actual = one.normalize();
    expected = new relue.math.Vector([1, 0]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([0, 1]);
    actual = one.normalize();
    expected = new relue.math.Vector([0, 1]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([1, 0, 0]);
    actual = one.normalize();
    expected = new relue.math.Vector([1, 0, 0]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([0, 1, 0]);
    actual = one.normalize();
    expected = new relue.math.Vector([0, 1, 0]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([0, 0, 1]);
    actual = one.normalize();
    expected = new relue.math.Vector([0, 0, 1]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([3, 0, 0]);
    actual = one.normalize();
    expected = new relue.math.Vector([1, 0, 0]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([0, 4, 0]);
    actual = one.normalize();
    expected = new relue.math.Vector([0, 1, 0]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    one = new relue.math.Vector([0, 0, 5]);
    actual = one.normalize();
    expected = new relue.math.Vector([0, 0, 1]);
    for (let i = 0; i < one.length; i++) {
      assert.equal(actual.elements[i], expected.elements[i], msg);
    }
    
    done();
  });

  test('class relue.math.Vector, cross product length checks', function(done) {
    let two = new relue.math.Vector([0, 1]);
    let three = new relue.math.Vector([0, 0, 1]);
    let four = new relue.math.Vector([0, 0, 0, 1]);
    const msg = 'Vector lengths should be three for cross products.';
    
    assert.isNull(two.cross(two),
                  msg);
    assert.isNull(two.cross(three),
                  msg);
    assert.isNull(two.cross(four),
                  msg);
    assert.isNull(three.cross(two),
                  msg);
    assert.isNotNull(three.cross(three),
                     msg);
    assert.isNull(three.cross(four),
                  msg);
    assert.isNull(four.cross(two),
                  msg);
    assert.isNull(four.cross(three),
                  msg);
    assert.isNull(four.cross(four),
                  msg);
    
    done();
  });

  test('class relue.math.Vector, integer cross products', function(done) {
    let msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = 3;
      let one = [];
      let two = [];
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        let b = relue.math.randomInteger(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let crossOne = oneV.cross(twoV);
      let crossTwo = twoV.cross(oneV);
      let crossOneExpected = new relue.math.Vector([
        (one[1] * two[2] - one[2] * two[1]),
        (one[2] * two[0] - one[0] * two[2]),
        (one[0] * two[1] - one[1] * two[0])
      ]);
      let crossTwoExpected = new relue.math.Vector([
        (two[1] * one[2] - two[2] * one[1]),
        (two[2] * one[0] - two[0] * one[2]),
        (two[0] * one[1] - two[1] * one[0])
      ]);

      for (let j = 0; j < length; j++) {
        assert.equal(crossOne.elements[j],
                     crossOneExpected.elements[j],
                     msg);
        assert.equal(crossTwo.elements[j],
                     crossTwoExpected.elements[j],
                     msg);
      }
    }

    done();
  });

  test('class relue.math.Vector, float cross products', function(done) {
    let msg = 'Elements should be equal.';
    
    for (let i = 0; i < 100; i++) {
      const length = 3;
      let one = [];
      let two = [];
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        let b = relue.math.randomBetween(-100, 100);
        one.push(a);
        two.push(b);
      }

      let oneV = new relue.math.Vector(one);
      let twoV = new relue.math.Vector(two);
      let crossOne = oneV.cross(twoV);
      let crossTwo = twoV.cross(oneV);
      let crossOneExpected = new relue.math.Vector([
        (one[1] * two[2] - one[2] * two[1]),
        (one[2] * two[0] - one[0] * two[2]),
        (one[0] * two[1] - one[1] * two[0])
      ]);
      let crossTwoExpected = new relue.math.Vector([
        (two[1] * one[2] - two[2] * one[1]),
        (two[2] * one[0] - two[0] * one[2]),
        (two[0] * one[1] - two[1] * one[0])
      ]);

      for (let j = 0; j < length; j++) {
        assert.equal(crossOne.elements[j],
                     crossOneExpected.elements[j],
                     msg);
        assert.equal(crossTwo.elements[j],
                     crossTwoExpected.elements[j],
                     msg);
      }
    }

    done();
  });

  test('class relue.math.Vector, scalar triple product length checks',
       function(done) {
         let two = new relue.math.Vector([0, 1]);
         let three = new relue.math.Vector([0, 0, 1]);
         let four = new relue.math.Vector([0, 0, 0, 1]);
         const msg =
               'Vector lengths should be three for scalar triple products.';
         
         assert.isNull(two.scalarTriple(three, four),
                       msg);
         assert.isNull(two.scalarTriple(four, three),
                       msg);
         assert.isNull(three.scalarTriple(two, four),
                       msg);
         assert.isNull(three.scalarTriple(four, two),
                       msg);
         assert.isNull(four.scalarTriple(two, three),
                       msg);
         assert.isNull(four.scalarTriple(three, two),
                       msg);
         
         done();
       });

  test('class relue.math.Vector, integer scalar triple products',
       function(done) {
         let msg = 'Scalar triple products should be equal.';
         
         for (let i = 0; i < 100; i++) {
           const length = 3;
           let one = [];
           let two = [];
           let three = [];
           for (let j = 0; j < length; j++) {
             let a = relue.math.randomInteger(-100, 100);
             let b = relue.math.randomInteger(-100, 100);
             let c = relue.math.randomInteger(-100, 100);
             one.push(a);
             two.push(b);
             three.push(c);
           }

           let oneV = new relue.math.Vector(one);
           let twoV = new relue.math.Vector(two);
           let threeV = new relue.math.Vector(three);

           let actual, expected;

           actual = oneV.scalarTriple(twoV, threeV);
           expected = oneV.dot(twoV.cross(threeV));
           assert.equal(actual, expected, msg);

           actual = oneV.scalarTriple(threeV, twoV);
           expected = oneV.dot(threeV.cross(twoV));
           assert.equal(actual, expected, msg);

           actual = twoV.scalarTriple(oneV, threeV);
           expected = twoV.dot(oneV.cross(threeV));
           assert.equal(actual, expected, msg);

           actual = twoV.scalarTriple(threeV, oneV);
           expected = twoV.dot(threeV.cross(oneV));
           assert.equal(actual, expected, msg);

           actual = threeV.scalarTriple(oneV, twoV);
           expected = threeV.dot(oneV.cross(twoV));
           assert.equal(actual, expected, msg);

           actual = threeV.scalarTriple(twoV, oneV);
           expected = threeV.dot(twoV.cross(oneV));
           assert.equal(actual, expected, msg);

         }

         done();
       });

  test('class relue.math.Vector.scalarTriple(), floats',
       function(done) {
         let msg = 'Scalar triple products should be equal.';
         
         for (let i = 0; i < 100; i++) {
           const length = 3;
           let one = [];
           let two = [];
           let three = [];
           for (let j = 0; j < length; j++) {
             let a = relue.math.randomBetween(-100, 100);
             let b = relue.math.randomBetween(-100, 100);
             let c = relue.math.randomBetween(-100, 100);
             one.push(a);
             two.push(b);
             three.push(c);
           }

           let oneV = new relue.math.Vector(one);
           let twoV = new relue.math.Vector(two);
           let threeV = new relue.math.Vector(three);

           let actual, expected;

           actual = oneV.scalarTriple(twoV, threeV);
           expected = oneV.dot(twoV.cross(threeV));
           assert.equal(actual, expected, msg);

           actual = oneV.scalarTriple(threeV, twoV);
           expected = oneV.dot(threeV.cross(twoV));
           assert.equal(actual, expected, msg);

           actual = twoV.scalarTriple(oneV, threeV);
           expected = twoV.dot(oneV.cross(threeV));
           assert.equal(actual, expected, msg);

           actual = twoV.scalarTriple(threeV, oneV);
           expected = twoV.dot(threeV.cross(oneV));
           assert.equal(actual, expected, msg);

           actual = threeV.scalarTriple(oneV, twoV);
           expected = threeV.dot(oneV.cross(twoV));
           assert.equal(actual, expected, msg);

           actual = threeV.scalarTriple(twoV, oneV);
           expected = threeV.dot(twoV.cross(oneV));
           assert.equal(actual, expected, msg);

         }

         done();
       });

  test('class relue.math.Vector.vectorTriple(), length checks',
       function(done) {
         let two = new relue.math.Vector([0, 1]);
         let three = new relue.math.Vector([0, 0, 1]);
         let four = new relue.math.Vector([0, 0, 0, 1]);
         const msg =
               'Vector lengths should be three for vector triple products.';
         
         assert.isNull(two.vectorTriple(three, four),
                       msg);
         assert.isNull(two.vectorTriple(four, three),
                       msg);
         assert.isNull(three.vectorTriple(two, four),
                       msg);
         assert.isNull(three.vectorTriple(four, two),
                       msg);
         assert.isNull(four.vectorTriple(two, three),
                       msg);
         assert.isNull(four.vectorTriple(three, two),
                       msg);
         
         done();
       });

  test('class relue.math.Vector.vectorTriple(), integers',
       function(done) {
         let msg = 'Vector triple products should be equal.';
         
         for (let i = 0; i < 100; i++) {
           const length = 3;
           let one = [];
           let two = [];
           let three = [];
           for (let j = 0; j < length; j++) {
             let a = relue.math.randomInteger(-100, 100);
             let b = relue.math.randomInteger(-100, 100);
             let c = relue.math.randomInteger(-100, 100);
             one.push(a);
             two.push(b);
             three.push(c);
           }

           let oneV = new relue.math.Vector(one);
           let twoV = new relue.math.Vector(two);
           let threeV = new relue.math.Vector(three);

           let actual, expected;

           actual = oneV.vectorTriple(twoV, threeV);
           expected = oneV.cross(twoV.cross(threeV));
           assert.isTrue(actual.equal(expected), msg);

           actual = oneV.vectorTriple(threeV, twoV);
           expected = oneV.cross(threeV.cross(twoV));
           assert.isTrue(actual.equal(expected), msg);

           actual = twoV.vectorTriple(oneV, threeV);
           expected = twoV.cross(oneV.cross(threeV));
           assert.isTrue(actual.equal(expected), msg);

           actual = twoV.vectorTriple(threeV, oneV);
           expected = twoV.cross(threeV.cross(oneV));
           assert.isTrue(actual.equal(expected), msg);

           actual = threeV.vectorTriple(oneV, twoV);
           expected = threeV.cross(oneV.cross(twoV));
           assert.isTrue(actual.equal(expected), msg);

           actual = threeV.vectorTriple(twoV, oneV);
           expected = threeV.cross(twoV.cross(oneV));
           assert.isTrue(actual.equal(expected), msg);

         }

         done();
       });

  test('class relue.math.Vector.vectorTriple(), floats',
       function(done) {
         let msg = 'Vector triple products should be equal.';
         
         for (let i = 0; i < 100; i++) {
           const length = 3;
           let one = [];
           let two = [];
           let three = [];
           for (let j = 0; j < length; j++) {
             let a = relue.math.randomBetween(-100, 100);
             let b = relue.math.randomBetween(-100, 100);
             let c = relue.math.randomBetween(-100, 100);
             one.push(a);
             two.push(b);
             three.push(c);
           }

           let oneV = new relue.math.Vector(one);
           let twoV = new relue.math.Vector(two);
           let threeV = new relue.math.Vector(three);

           let actual, expected;

           actual = oneV.vectorTriple(twoV, threeV);
           expected = oneV.cross(twoV.cross(threeV));
           assert.isTrue(actual.equal(expected), msg);

           actual = oneV.vectorTriple(threeV, twoV);
           expected = oneV.cross(threeV.cross(twoV));
           assert.isTrue(actual.equal(expected), msg);

           actual = twoV.vectorTriple(oneV, threeV);
           expected = twoV.cross(oneV.cross(threeV));
           assert.isTrue(actual.equal(expected), msg);

           actual = twoV.vectorTriple(threeV, oneV);
           expected = twoV.cross(threeV.cross(oneV));
           assert.isTrue(actual.equal(expected), msg);

           actual = threeV.vectorTriple(oneV, twoV);
           expected = threeV.cross(oneV.cross(twoV));
           assert.isTrue(actual.equal(expected), msg);

           actual = threeV.vectorTriple(twoV, oneV);
           expected = threeV.cross(twoV.cross(oneV));
           assert.isTrue(actual.equal(expected), msg);

         }

         done();
       });

  test('class relue.math.Vector, negation', function(done) {
    const msg = 'Elements should be opposites.';
    
    // Integers.
    for (let i = 0; i < 100; i++) {
      let one = [];
      const length = relue.math.randomInteger(2, 10);
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomInteger(-100, 100);
        one.push(a);
      }

      let oneV = new relue.math.Vector(one);
      let oneN = oneV.negate();

      for (let j = 0; j < length; j++) {
        assert.equal(oneV.elements[j],
                     -oneN.elements[j],
                     msg);
      }
    }

    // Floats.
    for (let i = 0; i < 100; i++) {
      let one = [];
      const length = relue.math.randomInteger(2, 10);
      for (let j = 0; j < length; j++) {
        let a = relue.math.randomBetween(-100, 100);
        one.push(a);
      }

      let oneV = new relue.math.Vector(one);
      let oneN = oneV.negate();

      for (let j = 0; j < length; j++) {
        assert.equal(oneV.elements[j],
                     -oneN.elements[j],
                     msg);
      }
    }

    done();
  });

  test('class relue.math.Vector.toString()', function(done) {
    let two = new relue.math.Vector([0, 1]);
    let three = new relue.math.Vector([0, 0, 1]);
    let msg = 'Vector string representations should match.';
    
    assert.equal(two.toString(),
                 '<0, 1>',
                 msg);
    two.brackets = '()';
    assert.equal(two.toString(),
                 '(0, 1)',
                 msg);
    two.brackets = '[]';
    assert.equal(two.toString(),
                 '[0, 1]',
                 msg);
    two.brackets = '{}';
    assert.equal(two.toString(),
                 '{0, 1}',
                 msg);
    two.brackets = '<|';
    assert.equal(two.toString(),
                 '<0, 1|',
                 msg);
    two.brackets = '|>';
    assert.equal(two.toString(),
                 '|0, 1>',
                 msg);

    assert.equal(three.toString(),
                 '<0, 0, 1>',
                 msg);
    three.brackets = '()';
    assert.equal(three.toString(),
                 '(0, 0, 1)',
                 msg);
    three.brackets = '[]';
    assert.equal(three.toString(),
                 '[0, 0, 1]',
                 msg);
    three.brackets = '{}';
    assert.equal(three.toString(),
                 '{0, 0, 1}',
                 msg);
    three.brackets = '<|';
    assert.equal(three.toString(),
                 '<0, 0, 1|',
                 msg);
    three.brackets = '|>';
    assert.equal(three.toString(),
                 '|0, 0, 1>',
                 msg);

    done();
  });
});
