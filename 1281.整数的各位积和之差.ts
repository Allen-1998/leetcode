/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
  let sum = 0,
    product = 1;
  while (n) {
    sum += n % 10;
    product *= n % 10;
    n = Math.floor(n / 10);
  }
  return product - sum;
}
// @lc code=end
