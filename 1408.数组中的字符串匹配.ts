/*
 * @lc app=leetcode.cn id=1408 lang=typescript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
function stringMatching(words: string[]): string[] {
  return words.filter((i, x) => words.some((j, y) => j.includes(i) && x !== y));
}
// @lc code=end
