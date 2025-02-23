export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    const newNode: Node<T> = { data: item, priority };

    if (this.nodes.length === 0) {
      this.nodes.push(newNode);
      return;
    }

    let inserted = false;
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].priority <= priority) {
        this.nodes.splice(i, 0, newNode);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.nodes.push(newNode);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    }
    const node = this.nodes.shift();
    return node ? node.data : undefined;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    }
    return this.nodes[0].data;
  }
}
