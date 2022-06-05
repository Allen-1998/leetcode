/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const result: number[][] = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const temp: number[] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(temp);
  }
  return result;
}
// @lc code=end

let numRows = 5;
console.log(generate(numRows));
