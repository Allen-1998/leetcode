/*
 * @lc app=leetcode.cn id=769 lang=typescript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
function maxChunksToSorted(arr: number[]): number {
  let m = 0,
    res = 0;
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i]);
    if (m === i) {
      res++;
    }
  }
  return res;
}
// @lc code=end
console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4
console.log(maxChunksToSorted([2, 0, 1])); // 1
console.log(maxChunksToSorted([1, 2, 0, 3])); // 2
