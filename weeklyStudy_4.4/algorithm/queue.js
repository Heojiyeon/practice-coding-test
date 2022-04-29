// 먼저 들어온 값을 먼저 처리해주는 자료구조

class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue(item) {
        this._arr.shift(item);
    }
}

const queue = new Queue();
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);