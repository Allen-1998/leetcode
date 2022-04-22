/*
 * @lc app=leetcode.cn id=396 lang=typescript
 *
 * [396] 旋转函数
 */

// @lc code=start
function maxRotateFunction(nums: number[]): number {
  let f = 0,
    n = nums.length,
    numSum = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < n; i++) {
    f += i * nums[i];
  }
  let res = f;
  for (let i = n - 1; i > 0; i--) {
    f += numSum - n * nums[i];
    res = Math.max(res, f);
  }
  return res;
}
// @lc code=end

let nums = [4, 3, 2, 6];
nums = [100];
console.log(maxRotateFunction(nums));
