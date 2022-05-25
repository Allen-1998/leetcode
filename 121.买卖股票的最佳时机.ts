/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      max = Math.max(max, prices[i] - min);
    }
  }
  return max;
}
// @lc code=end

let prices = [7, 6, 4, 3, 1];
prices = [1, 2, 3, 4, 5];
prices = [7, 1, 5, 3, 6, 4];
prices = [7, 3, 5, 1, 7];

console.log(maxProfit(prices));
