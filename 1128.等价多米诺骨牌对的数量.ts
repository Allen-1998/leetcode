/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
  function calculate(n: number): number {
    if (n <= 1) {
      return 0;
    }
    return ((n - 1) * n) / 2;
  }
  const arr = dominoes.map((i) => JSON.stringify(i.sort()));
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    map.set(v, (map.get(v) || 0) + 1);
  }
  let count = 0;
  for (const v of map.values()) {
    count += calculate(v);
  }
  return count;
}
// @lc code=end
console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
