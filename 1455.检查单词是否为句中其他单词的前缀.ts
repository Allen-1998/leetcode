/*
 * @lc app=leetcode.cn id=1455 lang=typescript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
function isPrefixOfWord(sentence: string, searchWord: string): number {
  const a = sentence.split(" ").findIndex((i) => i.startsWith(searchWord));
  return a >= 0 ? a + 1 : a;
}
// @lc code=end
