/*
 * @lc app=leetcode.cn id=1784 lang=typescript
 *
 * [1784] 检查二进制字符串字段
 */

// @lc code=start
function checkOnesSegment(s: string): boolean {
  return !s.includes("01");
}
// @lc code=end
