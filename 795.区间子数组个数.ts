/*
 * @lc app=leetcode.cn id=795 lang=typescript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
function numSubarrayBoundedMax(
  nums: number[],
  left: number,
  right: number
): number {
  let c = 0,
    l = -1,
    r = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      r = i;
    } else if (nums[i] > right) {
      l = i;
      r = -1;
    }
    if (r !== -1) {
      c += r - l;
    }
  }
  return c;
}
// @lc code=end

// console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)); // 3
// console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8)); // 7
console.log(
  numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69)
); // 22
