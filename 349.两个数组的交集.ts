/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  return [...new Set(nums1.filter((i) => nums2.includes(i)))];
}
// @lc code=end
