/*
 * @lc app=leetcode.cn id=1582 lang=typescript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
function numSpecial(mat: number[][]): number {
  const a = mat.length - 1,
    b = mat[0].length - 1,
    x: number[] = [],
    y: number[] = [];
  let c = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      if (mat[i][j] === 1) {
        if (x.includes(j) || y.includes(i)) {
          x.push(j);
          y.push(i);
          continue;
        }
        x.push(j);
        y.push(i);
        let o = true;
        for (let k = j + 1; k <= b; k++) {
          if (mat[i][k] === 1) {
            o = false;
            break;
          }
        }
        for (let l = i + 1; l <= a; l++) {
          if (mat[l][j] === 1) {
            o = false;
            break;
          }
        }
        if (o) {
          c++;
        }
      }
    }
  }
  return c;
}
// @lc code=end
console.log(
  numSpecial([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
  ])
);
