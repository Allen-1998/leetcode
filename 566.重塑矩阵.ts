/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const res = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => 0)
  );
  for (let x = 0; x < m * n; ++x) {
    res[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
  }
  return res;
}
// @lc code=end

let mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;

console.log(matrixReshape(mat, r, c));
