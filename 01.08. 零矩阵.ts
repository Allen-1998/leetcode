/*
 * @lc app=leetcode.cn id= 01.08 lang=typescript
 *
 * [ 01.08] 零矩阵
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */

// @lc code=start
function setZeroes(matrix: number[][]): void {
  const m = matrix.length,
    n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}
function setZeroes1(matrix: number[][]): void {
  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        setTimeout(() => {
          for (let p = 0; p < n; p++) {
            matrix[i][p] = 0;
          }
          for (let q = 0; q < m; q++) {
            matrix[q][j] = 0;
          }
        });
      }
    }
  }
  setTimeout(() => {
    console.log(matrix);
  });
}
// @lc code=end
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
