/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length <= 3) return Math.max(...nums);
  const n = nums.length;
  let [cur1, pre1] = [nums[0], 0];
  let [cur2, pre2] = [0, 0];

  for (let i = 1; i < n; i++) {
    if (i < n - 1) [cur1, pre1] = [Math.max(cur1, pre1 + nums[i]), cur1];
    [cur2, pre2] = [Math.max(cur2, pre2 + nums[i]), cur2];
  }

  return Math.max(cur1, cur2);
}
// @lc code=end
let nums = [2, 3, 2];
nums = [1, 2, 3, 1];
nums = [200, 3, 140, 20, 10];
console.log(rob(nums));
