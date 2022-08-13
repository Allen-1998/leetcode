/*
 * @lc app=leetcode.cn id=768 lang=typescript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
function maxChunksToSorted(arr: number[], count = 1): number {
  let x = 0,
    min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i];
    if (max > v) {
      max = Math.max(max, ...arr.slice(0, i));
      min = v;
      x = i;
    } else if (min > v) {
      max = Math.max(max, v);
      min = v;
      x = i;
    }
  }
  if (x < arr.length - 1) {
    return maxChunksToSorted(arr.slice(x + 1), ++count);
  }
  return count;
}
// @lc code=end
console.log(maxChunksToSorted([5, 4, 3, 2, 1])); //1
console.log(maxChunksToSorted([2, 1, 3, 4, 4])); //4
console.log(maxChunksToSorted([1, 1, 0, 0, 1])); //2
console.log(maxChunksToSorted([4, 2, 2, 1, 1])); //1
console.log(maxChunksToSorted([4, 0, 0, 2, 4])); //2
console.log(maxChunksToSorted([1, 0, 1, 3, 2])); //3
console.log(maxChunksToSorted([5, 1, 1, 8, 1, 6, 5, 9, 7, 8])); //1
