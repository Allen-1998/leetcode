/*
 * @lc app=leetcode.cn id=1260 lang=typescript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length,
    n = grid[0].length;
  const q = JSON.parse(JSON.stringify(grid));
  let c = ((m * n - k) % (m * n)) - 1;
  c < 0 && (c += m * n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      c = (c + 1) % (m * n);
      grid[i][j] = q[Math.floor(c / n)][c % n];
    }
  }
  return grid;
}
// @lc code=end
// console.log(
//   shiftGrid(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     2
//   )
// );
console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
