/*
 * @lc app=leetcode.cn id=731 lang=typescript
 *
 * [731] 我的日程安排表 II
 */

// TODO 内存不足，待重刷
// @lc code=start
class MyCalendarTwo {
  map: Map<number, number>;
  constructor() {
    this.map = new Map();
  }

  book(start: number, end: number): boolean {
    for (let i = start; i < end; i++) {
      if (this.map.has(i)) {
        if (this.map.get(i) === 2) {
          for (let j = start; j < i; j++) {
            this.map.set(j, this.map.get(j)! - 1);
          }
          return false;
        }
        this.map.set(i, this.map.get(i)! + 1);
      } else {
        this.map.set(i, 1);
      }
    }
    return true;
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

const obj = new MyCalendarTwo();
console.log(obj.book(10, 20));
console.log(obj.book(50, 60));
console.log(obj.book(10, 40));
console.log(obj.book(5, 15));
console.log(obj.book(5, 10));
console.log(obj.book(25, 55));
