/*
 * @lc app=leetcode.cn id=1417 lang=typescript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
function reformat(s: string): string {
  let a = "",
    b = "";
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (/\d/.test(v)) {
      a += v;
    } else {
      b += v;
    }
  }
  if (Math.abs(a.length - b.length) > 1) return "";
  let res = "";
  if (a.length > b.length) {
    for (let i = 0; i < a.length; i++) {
      res += a[i] + (b[i] || "");
    }
  } else {
    for (let i = 0; i < b.length; i++) {
      res += b[i] + (a[i] || "");
    }
  }
  return res;
}
// @lc code=end
console.log(reformat("a0b1c"));
