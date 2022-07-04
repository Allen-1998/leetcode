/*
 * @lc app=leetcode.cn id=1200 lang=typescript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  const map = new Map(),
    n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    map.set([arr[i], arr[i + 1]], arr[i + 1] - arr[i]);
  }
  let min = Number.MAX_VALUE;
  let res: number[][] = [];
  map.forEach((v, k) => {
    if (v < min) {
      min = v;
      res = [k];
    } else if (v === min) {
      res.push(k);
    }
  });
  return res;
}
// @lc code=end

console.log(minimumAbsDifference([4, 2, 1, 3]));
