/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let res = "";
  const t = strs[0];
  for (let i = 0; i < t.length; i++) {
    if (strs.some((x) => x[i] !== t[i])) {
      return res;
    }
    res += t[i];
  }
  return res;
}
// @lc code=end

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
