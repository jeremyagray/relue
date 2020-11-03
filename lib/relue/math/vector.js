'use strict';

class Vector {
  constructor(array) {
    this.elements = [...array];
    this.length = array.length;
  }

  add(self, other)
  {
    if ((typeof self !== typeof other)
        || (self.length !== other.length)) {
      return null;
    }

    let sum = [];
    
    for (let i = 0; i < self.length; i++) {
      sum.push(self.elements[i] + other.elements[i]);
    }

    return new Vector(sum);
  }

  subtract(self, other) {
    if ((typeof self !== typeof other)
        || (self.length !== other.length)) {
      return null;
    }

    return self.add(self, other.negate(other));
  }

  dot(self, other) {
    let sum = null;

    if ((typeof self !== typeof other)
        || (self.length !== other.length)) {
      return null;
    }

    for (let i = 0; i < self.length; i++) {
      if (sum) {
        sum += self.elements[i] * other.elements[i];
      } else {
        sum = self.elements[i] * other.elements[i];
      }
    }

    return sum;
  }

  cross(self, other) {
    return;
  }

  scalarTriple(self, other) {
    return;
  }

  vectorTriple(self, other) {
    return;
  }

  negate(self)
  {
    let elements = [];
    
    for (let i = 0; i < self.length; i++) {
      elements.push(-self.elements[i]);
    }

    return new Vector(elements);
  }

  print() {
    console.log(`<${this.elements.join(', ')}>`);

    return;
  }

  toString() {
    return `<${this.elements.join(', ')}>`;
  }
}
