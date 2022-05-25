/*
 * @lc app=leetcode.cn id=1779 lang=typescript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let res = -1;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    if (x1 === x || y1 === y) {
      const d = Math.abs(x1 - x) + Math.abs(y1 - y);
      if (d < min) {
        min = d;
        res = i;
      }
    }
  }
  return res;
}
// @lc code=end
let x = 3,
  y = 4,
  points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ];

console.log(nearestValidPoint(x, y, points));
