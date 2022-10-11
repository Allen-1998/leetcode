/*
 * @lc app=leetcode.cn id=801 lang=typescript
 *
 * [801] 使序列递增的最小交换次数
 */
// TODO 待二刷

// @lc code=start
function minSwap(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  let a = 0,
    b = 1;
  for (let i = 1; i < n; i++) {
    let at = a,
      bt = b;
    a = b = n;
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      a = at;
      b = bt + 1;
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      a = Math.min(a, bt);
      b = Math.min(b, at + 1);
    }
  }
  return Math.min(a, b);
}
// @lc code=end
console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]));
// console.log(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8]));
// console.log(minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10]));
// console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]));
// console.log(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9]));
// console.log(
//   minSwap(
//     [0, 2, 5, 8, 9, 10, 12, 14, 18, 19, 20, 20, 24, 27, 28, 31, 33, 34, 36, 38],
//     [1, 2, 5, 7, 8, 9, 11, 17, 15, 16, 19, 21, 28, 29, 30, 31, 33, 34, 38, 39]
//   )
// );
