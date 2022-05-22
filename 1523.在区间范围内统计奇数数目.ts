/*
 * @lc app=leetcode.cn id=1523 lang=typescript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
function countOdds(low: number, high: number): number {
  return (
    Math.floor((high - low) / 2) + (low % 2 === 0 && high % 2 === 0 ? 0 : 1)
  );
}
// @lc code=end

let low = 3,
  high = 7;
// (low = 8), (high = 10);
console.log(countOdds(low, high));
// 都是奇数 +1
// 都是偶数 不加
// 奇数和偶数都有一个 +1
