/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  return nums.reduce((prev, curr, ixd) => (prev += ixd - curr), nums.length);
}
// @lc code=end

console.log(missingNumber([3, 0, 1]));
