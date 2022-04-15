/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  if (x < 0) {
    return -reverse(-x);
  }
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (res > 2 ** 31 - 1) return 0;
  return res;
}
// @lc code=end

let x = 123;
x = -123;
x = 120;
x = 1534236469;
console.log(reverse(x));
