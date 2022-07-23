/*
 * @lc app=leetcode.cn id=1816 lang=typescript
 *
 * [1816] 截断句子
 */

// @lc code=start
function truncateSentence(s: string, k: number): string {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      k--;
      if (k === 0) {
        return s.slice(0, i);
      }
    }
  }
  return s;
}
// @lc code=end
console.log(truncateSentence("chopper is not a tanuki", 5));
