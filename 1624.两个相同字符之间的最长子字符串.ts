/*
 * @lc app=leetcode.cn id=1624 lang=typescript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
function maxLengthBetweenEqualCharacters(s: string): number {
  const a = new Map();
  let b = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (a.has(c)) {
      b = Math.max(b, i - a.get(c) - 1);
    } else {
      a.set(c, i);
    }
  }
  return b;
}
// @lc code=end
console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"));
