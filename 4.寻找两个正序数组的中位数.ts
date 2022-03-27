/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  const len = arr.length;
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  } else {
    return arr[Math.floor(len / 2)];
  }
}
// @lc code=end

const nums1 = [1, 2],
  nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
