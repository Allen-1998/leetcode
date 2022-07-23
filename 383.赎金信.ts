/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const v = magazine[i];
    map.set(v, (map.get(v) || 0) + 1);
  }
  for (const i of ransomNote) {
    const n = map.get(i);
    if (!n) return false;
    map.set(i, n - 1);
  }
  return true;
}
// @lc code=end
console.log(canConstruct("aab", "ba"));
