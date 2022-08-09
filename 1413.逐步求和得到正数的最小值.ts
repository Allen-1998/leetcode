/*
 * @lc app=leetcode.cn id=1413 lang=typescript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
function minStartValue(nums: number[]): number {
  let min = 1,
    b = 0;
  for (let i = 0; i < nums.length; i++) {
    b += nums[i];
    min = Math.min(min, b);
  }
  if (min < 0) {
    min = -min + 1;
  }
  return min;
}
// @lc code=end

console.log(minStartValue([-3, 2, -3, 4, 2]));
