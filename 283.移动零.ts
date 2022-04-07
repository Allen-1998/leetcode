/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0,
    fast = 0,
    len = nums.length;
  while (fast < len) {
    if (nums[fast] != 0) nums[slow++] = nums[fast];
    fast++;
  }
  while (slow < len) {
    nums[slow++] = 0;
  }
}
// @lc code=end

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
