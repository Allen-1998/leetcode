/*
 * @lc app=leetcode.cn id=856 lang=typescript
 *
 * [856] 括号的分数
 */

// @lc code=start
function scoreOfParentheses(s: string): number {
  while (/\(/.test(s)) {
    s = s
      .replace(/\(([\d ]*)\)/g, (_, v) =>
        v ? " " + Number(v.trim()) * 2 + " " : " 1 "
      )
      .replace(
        /( *(\d+) *){2,}/g,
        (i) => " " + i.split(" ").reduce((a, b) => a + Number(b), 0) + " "
      );
  }
  return Number(s);
}
// @lc code=end

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));
console.log(scoreOfParentheses("(()(()))"));
