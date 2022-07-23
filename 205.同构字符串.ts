/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (map.has(v) && map.get(v) !== t[i]) {
      return false;
    } else {
      map.set(v, t[i]);
    }
  }
  return map.size === new Set(t).size;
}
// @lc code=end
console.log(isIsomorphic("badc", "baba"));
