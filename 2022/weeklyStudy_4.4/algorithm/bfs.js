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

const tree = {
    root: {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4,
                left: null,
                right: 5
            }
        },
        right: {
            value: 3,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 7,
                left: null,
                right: null
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let checked = [];



console.log(queue);