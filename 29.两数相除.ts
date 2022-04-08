/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const res = parseInt(String(dividend / divisor));
  return res > 2147483647 ? 2147483647 : res;
}
// @lc code=end

let dividend = 10,
  divisor = 3;
(dividend = 7), (divisor = -3);
(dividend = -2147483648), (divisor = -1);
console.log(divide(dividend, divisor));
