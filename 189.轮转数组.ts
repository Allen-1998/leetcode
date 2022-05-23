/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const copy = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = copy[i];
  }
}
// @lc code=end
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
rotate(nums, k);
console.log(nums);
