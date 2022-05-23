/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 3) return n;
  let a = 2,
    b = 3,
    c;
  for (let i = 4; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// @lc code=end

console.log(climbStairs(4));
