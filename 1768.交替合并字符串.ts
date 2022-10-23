/*
 * @lc app=leetcode.cn id=1768 lang=typescript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  let r = "";
  const n = Math.max(word1.length, word2.length);
  for (let i = 0; i < n; i++) {
    r += (word1[i] || "") + (word2[i] || "");
  }
  return r;
}
// @lc code=end
console.log(mergeAlternately("ab", "pqrs"));
