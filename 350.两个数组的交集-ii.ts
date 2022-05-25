/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  const res: number[] = [];
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (map.has(num)) {
      if (map.get(num) > 0) {
        res.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  }
  return res;
}
// @lc code=end
