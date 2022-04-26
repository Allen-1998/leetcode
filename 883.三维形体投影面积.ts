/*
 * @lc app=leetcode.cn id=883 lang=typescript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
const max = Math.max;
function projectionArea(grid: number[][]): number {
  let xy = 0,
    xz = 0,
    yz = 0,
    n = grid.length;
  for (let i = 0; i < n; i++) {
    let x = 0,
      y = 0;
    for (let j = 0; j < n; j++) {
      const v = grid[i][j];
      xy += v ? 1 : 0;
      x = max(x, v);
      y = max(y, grid[j][i]);
    }
    xz += x;
    yz += y;
  }
  return xy + xz + yz;
}
// @lc code=end

let grid = [
  [1, 2],
  [3, 4],
];
grid = [
  [1, 0],
  [0, 2],
];

console.log(projectionArea(grid));
