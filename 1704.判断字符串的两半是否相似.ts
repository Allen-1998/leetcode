/*
 * @lc app=leetcode.cn id=1704 lang=typescript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
function halvesAreAlike(s: string): boolean {
  const r = /[aeiou]/gi;
  const n = s.length / 2;
  return s.slice(0, n).match(r)?.length === s.slice(n).match(r)?.length;
}
// @lc code=end

console.log(halvesAreAlike("textbook"));
