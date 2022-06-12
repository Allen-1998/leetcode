/*
 * @lc app=leetcode.cn id=890 lang=typescript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
function findAndReplacePattern(words: string[], pattern: string): string[] {
  const l = new Set(pattern).size;
  return words.filter((word) => {
    const map = new Map();
    for (let i = 0; i < word.length; i++) {
      const s = word[i],
        v = pattern[i];
      if (!map.has(s)) {
        map.set(s, v);
      } else if (map.get(s) !== v) {
        return false;
      }
    }
    return map.size === l;
  });
}
// @lc code=end
console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
