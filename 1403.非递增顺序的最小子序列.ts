/*
 * @lc app=leetcode.cn id=1403 lang=typescript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const v = nums.reduce((a, b) => a + b, 0) / 2;
  let n = nums.length;
  let res: number[] = [],
    sum = 0;
  while (n--) {
    sum += nums[n];
    res.push(nums[n]);
    if (sum > v) {
      break;
    }
  }
  return res;
}
// @lc code=end
console.log(minSubsequence([4, 3, 10, 9, 8]));
