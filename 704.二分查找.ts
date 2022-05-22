/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  return nums.findIndex((i) => i === target);
}
// @lc code=end
let nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
(nums = [-1, 0, 3, 5, 9, 12]), (target = 9);
console.log(search(nums, target));
