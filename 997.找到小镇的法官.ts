/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  const array = new Array(n).fill(0);
  trust.forEach(([a, b]) => {
    array[a - 1]--;
    array[b - 1]++;
  });
  const judge = array.indexOf(n - 1);
  return judge !== -1 ? judge + 1 : -1;
}
// @lc code=end
