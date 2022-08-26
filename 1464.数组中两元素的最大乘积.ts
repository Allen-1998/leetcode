/*
 * @lc app=leetcode.cn id=1464 lang=typescript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let a = nums[0],
    b = 1;
  for (let i = 1; i < nums.length; i++) {
    const v = nums[i];
    if (v >= a) {
      (b = a), (a = v);
    } else if (v > b) {
      b = v;
    }
  }
  return (a - 1) * (b - 1);
}
// @lc code=end
