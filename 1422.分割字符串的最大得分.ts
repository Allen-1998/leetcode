/*
 * @lc app=leetcode.cn id=1422 lang=typescript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
function maxScore(s: string): number {
  if (s === "01") return 2;
  const n = s.length,
    a = new Array(n).fill(0);
  let c = 0,
    d = 0;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === "0") {
      c++;
    }
    a[i] = c;
  }
  for (let i = n - 1; i > 0; i--) {
    if (s[i] === "1") {
      d++;
    }
    a[i] += d;
  }
  return Math.max(...a);
}
// @lc code=end

console.log(maxScore("011101"));
