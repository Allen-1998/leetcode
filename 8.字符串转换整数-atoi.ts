/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let limit = Math.pow(2, 31);
  let num = parseInt(s);
  if (isNaN(num)) {
    num = 0;
  } else if (num < -limit) {
    num = -limit;
  } else if (num > limit - 1) {
    num = limit - 1;
  }
  return num;
}
// @lc code=end
console.log("   -42");
