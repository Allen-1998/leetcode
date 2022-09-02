/*
 * @lc app=leetcode.cn id=646 lang=typescript
 *
 * [646] 最长数对链
 */

// @lc code=start
function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);
  let l = pairs[0][1],
    c = 1;
  for (let i = 0; i < pairs.length; i++) {
    const v = pairs[i];
    if (l < v[0]) {
      l = v[1];
      c++;
    }
  }
  return c;
}
// @lc code=end

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  findLongestChain([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);
console.log(findLongestChain([[1, 2]]));
console.log(
  findLongestChain([
    [-10, -8],
    [8, 9],
    [-5, 0],
    [6, 10],
    [-6, -4],
    [1, 7],
    [9, 10],
    [-4, 7],
  ])
);
console.log(
  findLongestChain([
    [7, 9],
    [4, 5],
    [7, 9],
    [-7, -1],
    [0, 10],
    [3, 10],
    [3, 6],
    [2, 3],
  ])
);
