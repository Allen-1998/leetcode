/*
 * @lc app=leetcode.cn id=792 lang=typescript
 *
 * [792] 匹配子序列的单词数
 */

// @lc code=start
function numMatchingSubseq(s: string, words: string[]): number {
  function isSubsequences(a: string, b: string): number {
    let l = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[l]) {
        if (l === b.length - 1) {
          return 1;
        }
        l++;
      }
    }
    return 0;
  }
  return words.reduce((acc, word) => acc + isSubsequences(s, word), 0);
}
// @lc code=end
console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
console.log(
  numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])
);
