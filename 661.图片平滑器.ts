/*
 * @lc app=leetcode.cn id=661 lang=typescript
 *
 * [661] 图片平滑器
 */

// @lc code=start
function imageSmoother(img: number[][]): number[][] {
  const m = img.length;
  const n = img[0].length;

  function getCount(i: number, j: number): number {
    let v = 0;
    return Math.floor(
      [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ].reduce((sum, [x, y]) => {
        if (x >= 0 && x < m && y >= 0 && y < n) {
          sum += img[x][y];
          v++;
        }
        return sum;
      }, 0) / v
    );
  }
  return img.map((row, i) => {
    return row.map((col, j) => {
      return getCount(i, j);
    });
  });
}
// @lc code=end
let img = [[6, 9, 7]];
img = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
];
img = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
];
// img = [[2, 3]];
// img = [[1]]
console.log(imageSmoother(img));
