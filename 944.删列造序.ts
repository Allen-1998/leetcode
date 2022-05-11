/*
 * @lc app=leetcode.cn id=944 lang=typescript
 *
 * [944] 删列造序
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  const n = strs[0].length;
  if (n === 0) return 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        flag = false;
        break;
      }
    }
    if (!flag) res++;
  }
  return res;
}
// @lc code=end

let strs = ["cba", "daf", "ghi"];
strs = ["a", "b"];
strs = ["rrjk", "furt", "guzm"];
strs = ["x", "a"];
console.log(minDeletionSize(strs));
