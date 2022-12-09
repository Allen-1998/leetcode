/*
 * @lc app=leetcode.cn id=1780 lang=typescript
 *
 * [1780] 判断一个数字是否可以表示成三的幂的和
 */

// @lc code=start
function checkPowersOfThree(n: number): boolean {
  return !n.toString(3).includes("2");
}
// @lc code=end
