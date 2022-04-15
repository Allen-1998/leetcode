/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num >= target) {
      return i;
    }
  }
  return nums.length;
}
// @lc code=end

let nums1 = [1, 3, 5, 6];
let target = 5;
(nums1 = [1, 3, 5, 6]), (target = 7);
console.log(searchInsert(nums1, target));
