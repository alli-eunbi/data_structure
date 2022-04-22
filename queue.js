class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    this._arr.shift();
  }
}
const ex = new Queue();

ex.enqueue(2);
ex.enqueue(3);
console.log(ex);

ex.dequeue();
console.log(ex);
