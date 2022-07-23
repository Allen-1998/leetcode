/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v in map) {
      map[v] = -1;
    } else {
      map[v] = i;
    }
  }
  const values = Object.values(map) as number[];
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (v !== -1) {
      return v;
    }
  }
  return -1;
}
// @lc code=end

let s = "loveleetcode";
console.log(firstUniqChar(s));
