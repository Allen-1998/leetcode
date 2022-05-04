/*
 * @lc app=leetcode.cn id=1823 lang=typescript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start

function findTheWinner(n: number, k: number): number {
  function getIndex(k: number, n: number): number {
    if (k <= n) return k;
    return getIndex(k - n, n);
  }
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  while (arr.length > 1) {
    const i = getIndex(k, arr.length);
    arr = i === 0 ? arr.slice(1) : arr.slice(i).concat(arr.slice(0, i - 1));
  }
  return arr[0];
}
// @lc code=end

let n = 5,
  k = 2;

console.log(findTheWinner(n, k));
