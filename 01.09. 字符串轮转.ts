/*
 * @lc app=leetcode.cn id= 01.02 lang=typescript
 *
 * [ 01.09] 字符串轮转
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）
 */

// @lc code=start
function isFlipedString(s1: string, s2: string): boolean {
  return s1.length === s2.length && (s1 + s1).includes(s2);
}
// @lc code=end
