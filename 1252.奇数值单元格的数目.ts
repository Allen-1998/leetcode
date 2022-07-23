/*
 * @lc app=leetcode.cn id=1252 lang=typescript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
function oddCells(m: number, n: number, indices: number[][]): number {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (const [i, j] of indices) {
    for (let x = 0; x < m; x++) {
      arr[x][j]++;
    }
    for (let y = 0; y < n; y++) {
      arr[i][y]++;
    }
  }
  return arr.flat().filter((x) => x % 2 === 1).length;
}
// @lc code=end
console.log(
  oddCells(2, 3, [
    [1, 1],
    [0, 1],
  ])
);
