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
    let a = -1,
      b = -1;
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums2[i]) {
        a = j;
        break;
      }
      if (b === -1 && nums1[j] !== -1) {
        b = j;
      }
    }
    a === -1 && (a = b);
    r.push(nums1[a]);
    nums1[a] = -1;
  }
  return r;
}
// @lc code=end
// console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
// console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
