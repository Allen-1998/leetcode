/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  return BigInt(num1) * BigInt(num2) + "";
}
// @lc code=end

const num1 = "2",
  num2 = "3";
console.log(multiply(num1, num2));
