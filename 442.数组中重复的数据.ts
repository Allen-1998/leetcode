/*
 * @lc app=leetcode.cn id=442 lang=typescript
 *
 * [442] 数组中重复的数据
 */
// 这道题的核心点在于 nums 的所有整数都在范围 [1, n] 内
// @lc code=start
function findDuplicates(nums: number[]): number[] {
  const n = nums.length;
  const ans = [];
  for (let i = 0; i < n; ++i) {
    const x = Math.abs(nums[i]);
    if (nums[x - 1] > 0) {
      nums[x - 1] = -nums[x - 1];
    } else {
      ans.push(x);
    }
  }
  return ans;
}
// @lc code=end

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));
