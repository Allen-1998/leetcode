/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 */

// @lc code=start
function smallestRangeI(nums: number[], k: number): number {
  return Math.max(0, Math.max(...nums) - Math.min(...nums) - 2 * k);
}
// @lc code=end
