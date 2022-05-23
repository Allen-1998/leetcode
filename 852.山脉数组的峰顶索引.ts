/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return n;
    }
    n++;
  }
  return n;
}
// @lc code=end

let arr = [0, 1, 0];
console.log(peakIndexInMountainArray(arr));
