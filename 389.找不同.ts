/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    map.set(v, (map.get(v) || 0) + 1);
  }
  let r;
  for (let i = 0; i < t.length; i++) {
    const v = t[i];
    const a = map.get(v);
    if (!a) {
      r = v;
      break;
    }
    map.set(v, map.get(v) - 1);
  }
  return r;
}
// @lc code=end
