/*
 * @lc app=leetcode.cn id=1822 lang=typescript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
function arraySign(nums: number[]): number {
  let sum = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    sum *= nums[i];
  }
  return sum < 0 ? -1 : 1;
}
// @lc code=end
