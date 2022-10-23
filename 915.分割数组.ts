/*
 * @lc app=leetcode.cn id=915 lang=typescript
 *
 * [915] 分割数组
 */

// @lc code=start
function partitionDisjoint(nums: number[]): number {
  let a = nums[0],
    b = a,
    r = 0;
  for (let i = 1; i < nums.length; i++) {
    const v = nums[i];
    if (v > b) {
      b = v;
    }
    if (v < a) {
      r = i;
      a = b;
    }
  }
  return r + 1;
}
// @lc code=end
console.log(partitionDisjoint([5, 0, 3, 8, 6]));
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));
console.log(partitionDisjoint([26, 51, 40, 58, 42, 76, 30, 48, 79, 91]));
