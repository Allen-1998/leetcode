/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n <= 2) {
    return n;
  }
  let l = 2,
    r = 2;
  while (r < n) {
    if (nums[l - 2] != nums[r]) {
      nums[l] = nums[r];
      ++l;
    }
    ++r;
  }
  return l;
}
// @lc code=end
