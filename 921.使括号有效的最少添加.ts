/*
 * @lc app=leetcode.cn id=921 lang=typescript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
function minAddToMakeValid(s: string): number {
  let a = 0,
    b = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      a++;
    } else if (a > 0) {
      a--;
    } else {
      b++;
    }
  }
  return a + b;
}
// @lc code=end
console.log(minAddToMakeValid("()))(("));
