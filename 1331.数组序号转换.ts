/*
 * @lc app=leetcode.cn id=1331 lang=typescript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
function arrayRankTransform(arr: number[]): number[] {
  const a = [...new Set(arr)].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = a.indexOf(arr[i]) + 1;
  }
  return arr;
}
// @lc code=end

console.log(
  arrayRankTransform([27, 46, -3, -36, 31, -14, -7, -36, 27, -14, 41, -40, 23])
);
