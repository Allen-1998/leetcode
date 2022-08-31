/*
 * @lc app=leetcode.cn id=1475 lang=typescript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
function finalPrices(prices: number[]): number[] {
  for (let i = 0; i < prices.length; i++) {
    const a = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const b = prices[j];
      if (b <= a) {
        prices[i] = a - b;
        break;
      }
    }
  }
  return prices;
}
// @lc code=end
console.log(finalPrices([8, 4, 6, 2, 3]));
