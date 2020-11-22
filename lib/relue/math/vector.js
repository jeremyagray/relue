'use strict';

/**
 * A class to represent n-dimensional vectors.
 *
 * @name Vector
 * @memberof math
 * @api public
 *
 * @property {number[]} elements - The elements of the vector.
 * @property {number} length - The number of elements of the vector.
 * @property {string} _left - The left bracket symbol (hidden).
 * @property {string} _right - The right bracket sybmol (hidden).
 * @property {string[]} _pairs - The allowed bracket pairs (hidden).
 */
class Vector {
  /**
   * Create a new vector.
   *
   * @constructs
   * @api public
   *
   * @param {number[]} elements - an array of n numbers
   * @returns {Vector} an n-dimensional vector
   *
   * @example
   * new relue.math.Vector([0, 0, 1]);
   */
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

  /**
   * Determine if this vector is equal to the other vector.  Vectors
   * must have the same length.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @param {number} [tol=1e-8] - the tolerance for comparing floats
   * @returns {(boolean|null)} true if equal, false if not equal, null
   * for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns true.
   * u.equal(u);
   * v.equal(v);
   *
   * // Returns false.
   * v.equal(u);
   * u.equal(v);
   */
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

  /**
   * Add this vector to the other vector.  Vectors must have the same length.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @returns {(Vector|null)} - A new vector that is the sum of the
   * two vectors or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns new relue.math.Vector([1, 1, 0]).
   * u.add(v);
   */
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

  /**
   * Subtract the other vector from this vector.  Vectors must have
   * the same length.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @returns {(Vector|null)} - A new vector that is the difference of
   * the two vectors or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns new relue.math.Vector([1, -1, 0]).
   * u.subtract(v);
   */
  subtract(other) {
    if ((typeof this !== typeof other)
        || (! (this instanceof Vector))
        || (! (other instanceof Vector))
        || (this.length !== other.length)) {
      return null;
    }

    return this.add(other.negate(other));
  }

  /**
   * Calculate the dot product of this vector and the other vector.
   * Vectors must have the same length.
   *
   * @param {Vector} other - a vector
   *
   * @returns {(number|null)} - The dot product of the two vectors or
   * null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns 0.
   * u.dot(v);
   */
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

  /**
   * Determines if this vector and the other vector are orthogonal.
   * Vectors must have the same length.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @returns {(boolean|null)} - true for orthogonal, false for not
   * orthogonal, null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns true.
   * u.isOrthogonal(v);
   *
   * // Returns true.
   * u.isOrthogonal(u);
   */
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

  /**
   * Calculates the projection of this vector onto the other vector.
   * Vectors must have the same length.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @returns {(Vector|null)} - A new vector for the projection or
   * null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns new relue.math.Vector([0, 0, 0]).
   * u.projection(v);
   */
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

  /**
   * Calculates the magnitude of this vector.  Vectors must have the
   * same length.
   *
   * @api public
   *
   * @returns {(number|null)} - The magnitude or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns 1.
   * u.magnitude();
   *
   * // Returns 1.
   * v.magnitude();
   */
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

  /**
   * Normalizes this vector.
   *
   * @api public
   *
   * @returns {(Vector|null)} - A new normalized vector or null for error.
   *
   * @example
   * let u = new relue.math.Vector([3, 4]);
   * let v = new relue.math.Vector([3, 4, 12]);
   *
   * // Returns new relue.math.Vector([(3/5), (4/5)]).
   * u.normalize();
   *
   * // Returns new relue.math.Vector([(3/13), (4/13), (12/13)]).
   * v.normalize();
   */
  normalize() {
    if ((! (this instanceof Vector))
        || (this.magnitude() === 0)) {
      return null;
    }

    let mag = this.magnitude();
    let elements = [];

    for (let i = 0; i < this.length; i++) {
      elements.push(this.elements[i] / mag);
    }

    return new Vector(elements);
  }

  /**
   * Returns the cross product of this vector and the other vector.
   * Vectors must both have a length of three.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @returns {(Vector|null)} - Returns a new cross product vector or
   * null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   *
   * // Returns the cross products.
   * u.cross(v);
   * v.cross(u);
   */
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

  /**
   * Returns the scalar triple product (A . (B x C)) of this vector,
   * other vector, and that vector.  Vectors must all have a length of
   * three.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @param {Vector} that - a vector
   * @returns {(number|null)} - Returns the scalar triple product or
   * null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   * let w = new relue.math.Vector([0, 0, 1]);
   *
   * // Returns the scalar triple products.
   * u.scalarTriple(v, w);
   * v.scalarTriple(w, u);
   * w.scalarTriple(u, v);
   */
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

  /**
   * Returns the scalar triple product (A x (B x C)) of this vector,
   * other vector, and that vector.  Vectors must all have a length of
   * three.
   *
   * @api public
   *
   * @param {Vector} other - a vector
   * @param {Vector} that - a vector
   * @returns {(Vector|null)} - Returns a new vector as the vector
   * triple product or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   * let v = new relue.math.Vector([0, 1, 0]);
   * let w = new relue.math.Vector([0, 0, 1]);
   *
   * // Returns the vector triple products.
   * u.vectorTriple(v, w);
   * v.vectorTriple(w, u);
   * w.vectorTriple(u, v);
   */
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

  /**
   * Returns the opposite of this vector.
   *
   * @api public
   *
   * @returns {(Vector|null)} - A new vector that is opposite of this
   * vector or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   *
   * // Returns new relue.math.Vector([-1, 0, 0]).
   * u.negate();
   */
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

  /**
   * Returns the string representation of this vector.
   *
   * @api public
   *
   * @returns {(string|null)} - The string represenation of the vector
   * or null for error.
   *
   * @example
   * let u = new relue.math.Vector([1, 0, 0]);
   *
   * // Returns '<1, 0, 0>'.
   * u.toString();
   */
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
