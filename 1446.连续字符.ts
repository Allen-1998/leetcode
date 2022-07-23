/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 *
 * [1446] 连续字符
 */

// @lc code=start
function maxPower(s: string): number {
  let count = 0,
    max = 0,
    x;
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (x === v) {
      count++;
    } else {
      x = v;
      max = Math.max(count, max);
      count = 1;
    }
  }
  return Math.max(count, max);
}
// @lc code=end
console.log(maxPower("cc"));
