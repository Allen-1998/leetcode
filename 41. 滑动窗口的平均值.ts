/*
 * @lc app=leetcode.cn id=745 lang=typescript
 *
 * [41] 滑动窗口的平均值
 */

// @lc code=start
class MovingAverage {
  arr: number[];
  size: number;
  constructor(size: number) {
    this.size = size;
    this.arr = [];
  }

  next(val: number): number {
    this.arr.push(val);
    const n = Math.min(this.arr.length, this.size);
    return this.arr.slice(-n).reduce((a, b) => a + b, 0) / n;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// @lc code=end

const movingAverage = new MovingAverage(3);
movingAverage.next(1); // 返回 1.0 = 1 / 1
movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3
