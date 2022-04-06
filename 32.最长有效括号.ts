/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  let max = 0,
    l = 0,
    r = 0,
    n = 0;
  while (n < s.length) {
    if (s[n] === "(") {
      l++;
    } else {
      r++;
    }
    if (l === r) {
      max = Math.max(max, l + r);
    } else if (r > l) {
      l = 0;
      r = 0;
    }
    n++;
  }
  l = 0;
  r = 0;
  while (n--) {
    if (s[n] === "(") {
      l++;
    } else {
      r++;
    }
    if (l === r) {
      max = Math.max(max, l + r);
    } else if (r < l) {
      l = 0;
      r = 0;
    }
  }
  return max;
}
// @lc code=end

let s = "(()"; // 2
s = ")()())"; // 4
s = ")()())()()("; // 4
console.log(longestValidParentheses(s));
