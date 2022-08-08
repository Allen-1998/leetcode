/*
 * @lc app=leetcode.cn id=1576 lang=typescript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
function modifyString(s: string): string {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      const l = s[i - 1],
        r = s[i + 1];
      let c = "";
      if (l === "a") {
        if (r === "b") {
          c = "c";
        } else {
          c = "b";
        }
      } else if (l == "b") {
        if (r === "c") {
          c = "a";
        } else {
          c = "c";
        }
      } else if (l == "c") {
        if (r === "a") {
          c = "b";
        } else {
          c = "a";
        }
      } else {
        if (r === "a") {
          c = "b";
        } else {
          c = "a";
        }
      }
      s = s.slice(0, i) + c + s.slice(i + 1);
    }
  }
  return s;
}
// @lc code=end
