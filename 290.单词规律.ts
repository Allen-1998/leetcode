/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const map = new Map();
  const t = s.split(" ");
  for (let i = 0; i < pattern.length; i++) {
    const v = pattern[i];
    if (map.has(v) && map.get(v) !== t[i]) {
      return false;
    } else {
      map.set(v, t[i]);
    }
  }
  return pattern.length === t.length && map.size === new Set(t).size;
}
// @lc code=end
console.log(wordPattern("aba", "cat cat cat dog"));
