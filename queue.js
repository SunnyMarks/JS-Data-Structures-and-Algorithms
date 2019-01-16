function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

const q = createQueue();
// add the queue
q.enqueue("Make an egghead lesson");
q.enqueue("Help others learn");
q.enqueue("Be Happy");

//remove oldest first from queue
q.dequeue();
console.log(q.peek());
