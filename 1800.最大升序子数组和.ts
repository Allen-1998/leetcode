/*
 * @lc app=leetcode.cn id=1800 lang=typescript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
function maxAscendingSum(nums: number[]): number {
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (v > b) {
      a += v;
    } else {
      c = Math.max(c, a);
      a = v;
    }
    b = v;
  }
  c = Math.max(c, a);
  return c;
}
// @lc code=end
console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 10, 1]));
console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]));
