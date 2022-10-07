/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 */

// @lc code=start
function advantageCount(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  const r: number[] = [];
  for (let i = 0; i < nums2.length; i++) {
    const v = nums2[i];
    let a = nums1.findIndex((j) => j > v);
    if (a === -1) {
      a = nums1.findIndex((i) => i !== -1);
    }
    r.push(nums1[a]);
    nums1[a] = -1;
  }
  return r;
}
// @lc code=end
console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
