class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE) return false;
    return true;

    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length > 0) return false;
    return true;

    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
    throw new Error('QUEUE_OVERFLOW');

    // ... your code goes here
  }

  dequeue() {
    if (this.queueControl.length === 0) throw new Error('QUEUE_UNDERFLOW');
    ;
    return this.queueControl.pop();

    // ... your code goes here
  }

  display() {
    return this.queueControl;

    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
