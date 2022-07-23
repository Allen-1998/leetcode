/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const m = image.length;
  const n = image[0].length;

  const originColor = image[sr][sc];
  if (originColor === newColor) {
    return image;
  }
  const dfs = function (row, col) {
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      image[row][col] === newColor ||
      image[row][col] !== originColor
    ) {
      return;
    }

    image[row][col] = newColor;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  dfs(sr, sc);

  return image;
}
// @lc code=end

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
floodFill(image, 1, 1, 2);
