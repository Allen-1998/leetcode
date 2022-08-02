/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
  arr: any[];
  len: number;
  constructor(k: number) {
    this.arr = [];
    this.len = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.arr.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.arr.shift();
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.arr[0];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  isFull(): boolean {
    return this.arr.length === this.len;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

const k = 3,
  value = 1;
var obj = new MyCircularQueue(k);
var param_1 = obj.enQueue(value);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
