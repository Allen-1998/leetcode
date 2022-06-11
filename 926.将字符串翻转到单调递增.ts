/*
 * @lc app=leetcode.cn id=926 lang=typescript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
function minFlipsMonoIncr(s: string): number {
  let x = 0,
    y = 0,
    z = 0;
  for (let i = 0; i < s.length; i++) {
    const num = s[i];
    if (num === "1") {
      x++;
    } else if (x > 0) {
      y++;
      if (y >= x) {
        z += y;
        x = 0;
        y = 0;
      }
    }
  }
  return Math.min(x, y) + z;
}
// @lc code=end
console.log(minFlipsMonoIncr("010110"));
