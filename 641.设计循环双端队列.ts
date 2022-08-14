/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
  arr: any[];
  n: number;
  constructor(k: number) {
    this.arr = [];
    this.n = k;
  }

  insertFront(value: number): boolean {
    if (this.arr.length === this.n) return false;
    this.arr.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.arr.length === this.n) return false;
    this.arr.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.arr.length === 0) return false;
    this.arr.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.arr.length === 0) return false;
    this.arr.pop();
    return true;
  }

  getFront(): number {
    if (this.arr.length === 0) return -1;
    return this.arr[0];
  }

  getRear(): number {
    if (this.arr.length === 0) return -1;
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  isFull(): boolean {
    return this.arr.length === this.n;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
