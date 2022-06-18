/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3 的幂
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  return /^10*$/.test(n.toString(3));
}
// @lc code=end

console.log(isPowerOfThree(9));
