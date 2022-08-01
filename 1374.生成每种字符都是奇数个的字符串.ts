/*
 * @lc app=leetcode.cn id=1374 lang=typescript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
function generateTheString(n: number): string {
  return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
}
// @lc code=end
