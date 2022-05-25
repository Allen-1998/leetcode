/*
 * @lc app=leetcode.cn id=976 lang=typescript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
}
// @lc code=end
