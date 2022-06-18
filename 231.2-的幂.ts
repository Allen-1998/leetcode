/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  return /^10*$/.test(n.toString(2));
}
// @lc code=end

console.log(isPowerOfTwo(4));
