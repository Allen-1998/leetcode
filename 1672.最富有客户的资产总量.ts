/*
 * @lc app=leetcode.cn id=1672 lang=typescript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((account) => account.reduce((a, b) => a + b))
  );
}
// @lc code=end
const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(maximumWealth(accounts));
