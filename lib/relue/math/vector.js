'use strict';

class Vector {
  constructor(array) {
    this.elements = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined
          || array[i] === null
          || typeof array[i] === 'boolean'
          || typeof array[i] === 'string'
          || Number.isNaN(array[i])) {
        // Do not add element if it is not a number.
        continue;
      } else {
        this.elements.push(array[i]);
      }
    }

    this.length = this.elements.length;
    this._left = '<';
    this._right = '>';
    this._pairs = [
      '<>',
      '()',
      '[]',
      '{}',
      '<|',
      '|>'
    ];
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  set brackets(pair) {
    if (this._pairs.includes(pair)) {
      let symbols = pair.split('');
      this._left = symbols[0];
      this._right = symbols[1];
    }
  }

  equal(other, tol=1e-8) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    for (let i = 0; i < this.length; i++) {
      if (Math.abs(this.elements[i] - other.elements[i]) > tol) {
        return false;
      }
    }

    return true;
  }

  add(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    let sum = [];
    
    for (let i = 0; i < this.length; i++) {
      sum.push(this.elements[i] + other.elements[i]);
    }

    return new Vector(sum);
  }

  subtract(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    return this.add(other.negate(other));
  }

  dot(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    return this.elements.reduce((sum, item, ind) => {
      sum += item * other.elements[ind];
      return sum;
    }, 0);
  }

  isOrthogonal(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    if (this.dot(other) === 0) {
      return true;
    } else {
      return false;
    }
  }

  projection(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    let dot = this.dot(other);
    let mag = other.magnitude();

    if (mag === 0) {
      return new Vector(this.elements);
    } else {
      return new Vector(other.elements.map((item) => {
        return ((dot * item) / (mag * mag));
      }));
    }
  }

  magnitude() {
    if (! (this instanceof Vector)) {
      return null;
    }

    let size = 0;

    for (let i = 0; i < this.length; i++) {
      size += this.elements[i] * this.elements[i];
    }

    return Math.sqrt(size);
  }

  normalize() {
    if (! (this instanceof Vector)) {
      return null;
    }

    let mag = this.magnitude();
    let elements = [];

    for (let i = 0; i < this.length; i++) {
      elements.push(this.elements[i] / mag);
    }

    return new Vector(elements);
  }

  cross(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== 3)
        || (other.length !== 3)) {
      return null;
    }

    let elements = [
      (this.elements[1] * other.elements[2]
       - this.elements[2] * other.elements[1]),
      (this.elements[2] * other.elements[0]
       - this.elements[0] * other.elements[2]),
      (this.elements[0] * other.elements[1]
       - this.elements[1] * other.elements[0])
    ];

    return new Vector(elements);
  }

  // dot-cross
  scalarTriple(other, that) {
    if ((typeof this !== typeof other)
        || (typeof this !== typeof that)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (! (that instanceof Vector))
        || (this.length !== 3)
        || (other.length !== 3)
        || (that.length !== 3)) {
      return null;
    }

    return this.dot(other.cross(that));
  }

  // cross-cross
  vectorTriple(other, that) {
    if ((typeof this !== typeof other)
        || (typeof this !== typeof that)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (! (that instanceof Vector))
        || (this.length !== 3)
        || (other.length !== 3)
        || (that.length !== 3)) {
      return null;
    }

    return this.cross(other.cross(that));
  }

  negate() {
    if (! (this instanceof Vector)) {
      return null;
    }

    let elements = [];
    
    for (let i = 0; i < this.length; i++) {
      elements.push(-this.elements[i]);
    }

    return new Vector(elements);
  }

  toString() {
    if (! (this instanceof Vector)) {
      return null;
    }

    return `${this._left}${this.elements.join(', ')}${this._right}`;
  }
}

module.exports = {
  Vector
};
