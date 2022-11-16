/*
 * @lc app=leetcode.cn id=775 lang=typescript
 *
 * [775] 全局倒置与局部倒置
 */

// @lc code=start
function isIdealPermutation(nums: number[]): boolean {
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 2; j < n; j++) {
      if (nums[i] > nums[j]) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
