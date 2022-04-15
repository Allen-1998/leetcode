/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let pre = 0,
    maxAns = nums[0];
  for (const num of nums) {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
}
// @lc code=end
let nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
nums2 = [1];
nums2 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums2));
