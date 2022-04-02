/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const cur = map[s[i]];
    if (cur < map[s[i + 1]]) {
      result -= cur;
    } else {
      result += cur;
    }
  }
  result += map[s[s.length - 1]];
  return result;
}
// @lc code=end
let s = "MCMXCIV";
console.log(romanToInt(s));
