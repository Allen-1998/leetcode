/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
  let level = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === ")") {
      level--;
    }
    if (level > 0) {
      res += c;
    }
    if (c === "(") {
      level++;
    }
  }
  return res;
}
// @lc code=end
