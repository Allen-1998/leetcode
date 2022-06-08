/*
 * @lc app=leetcode.cn id=1037 lang=typescript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
  points.sort((a, b) => a[0] - b[0]);
  return (
    (points[0][0] - points[1][0]) / (points[0][1] - points[1][1]) !==
      (points[1][0] - points[2][0]) / (points[1][1] - points[2][1]) &&
    [...new Set(points.map((i) => JSON.stringify(i)))].length === 3
  );
}
// @lc code=end

let points = [
  [1, 1],
  [2, 3],
  [3, 2],
];
points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
points = [
  [1, 1],
  [2, 2],
  [7, 7],
];
points = [
  [11, 0],
  [0, 0],
  [2, 0],
];

console.log(isBoomerang(points));
