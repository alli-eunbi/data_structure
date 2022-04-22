class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  pop() {
    this._arr.pop();
  }
}

const ex = new Stack();

ex.push(1);
ex.push(2);
ex.push(3);

console.log(ex);

ex.pop();
console.log(ex);
ex.pop();
console.log(ex);
