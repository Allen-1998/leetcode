/*
 * @lc app=leetcode.cn id=417 lang=typescript
 *
 * [417] 太平洋大西洋水流问题
 */
// TODO : 不知道为什么这个题目的答案不对,题意不清楚
// @lc code=start
//左上到右下为中心线，镜像翻转
function rotate(matrix) {
  const n = matrix.length;
  let res = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [res[i][j], res[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return res;
}
function max(h, arr, order) {
  let n = arr.length;
  if (!n) return true;
  let decline = false;
  if (!order) {
    while (n--) {
      if (h < arr[n]) {
        return false;
      } else {
        if (decline && arr[n] === h) return false;
        if (arr[n] < h) decline = true;
      }
    }
    return true;
  } else {
    let i = 0;
    while (i < n) {
      if (h < arr[i]) {
        return false;
      } else {
        if (decline && arr[i] === h) return false;
        if (arr[i] < h) decline = true;
      }
      i++;
    }
    return true;
  }
}
function pacificAtlantic(heights: number[][]): number[][] {
  const res = [];
  const r = rotate(heights);
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    for (let j = 0; j < height.length; j++) {
      const h = height[j];
      if (
        (max(h, height.slice(0, j), 0) || max(h, r[j].slice(0, i), 0)) &&
        (max(h, height.slice(j + 1), 1) || max(h, r[j].slice(i + 1), 1))
      ) {
        res.push([i, j]);
      }
    }
  }
  return res;
}
// @lc code=end

let heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
heights = [
  [2, 1],
  [1, 2],
];
heights = [
  [10, 10, 10],
  [10, 1, 10],
  [10, 10, 10],
];
heights = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
// 不清楚答案中为什么包含了 [2,1]
console.log(pacificAtlantic(heights));
