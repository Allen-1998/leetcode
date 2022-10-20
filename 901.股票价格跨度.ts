/*
 * @lc app=leetcode.cn id=901 lang=typescript
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {
  a: number[];

  constructor() {
    this.a = [];
  }

  next(price: number): number {
    this.a.unshift(price);
    let c = 0;
    for (let i = 0; i < this.a.length; i++) {
      if (this.a[i] > price) {
        break;
      }
      c++;
    }
    return c;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
