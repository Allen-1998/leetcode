/*
 * @lc app=leetcode.cn id=65 lang=typescript
 *
 * [65] 有效数字
 */

// @lc code=start
function isNumber(s: string): boolean {
  return Number(s) === Number(s) && !s.endsWith("Infinity");
}
// @lc code=end
console.log(isNumber("Infinity"));
