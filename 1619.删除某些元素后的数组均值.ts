/*
 * @lc app=leetcode.cn id=1619 lang=typescript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
function trimMean(arr: number[]): number {
  const a = arr.length,
    b = a / 20;
  arr.sort((a, b) => a - b);
  let c = 0;
  for (let i = b; i < a - b; i++) {
    c += arr[i];
  }
  return c / (a - 2 * b);
}
// @lc code=end
