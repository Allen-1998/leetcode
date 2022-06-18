/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  return /^10*$/.test(n.toString(4));
}
// @lc code=end

console.log(isPowerOfFour(64));
