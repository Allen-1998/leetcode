/*
 * @lc app=leetcode.cn id=1051 lang=typescript
 *
 * [1051] 高度检查器
 */

// @lc code=start
function heightChecker(heights: number[]): number {
  const expected = JSON.parse(JSON.stringify(heights)).sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      res++;
    }
  }
  return res;
}
// @lc code=end
