/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const m = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const v = nums1[i];
    m.set(v, (m.get(v) || 0) + 1);
  }
  return [...new Set(nums1.filter((i) => nums2.includes(i)))];
}
// @lc code=end
