/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
  arr: number[];
  constructor() {
    this.arr = [];
  }

  ping(t: number): number {
    this.arr.push(t);
    while (this.arr[0] < t - 3000) {
      this.arr.shift();
    }
    return this.arr.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
