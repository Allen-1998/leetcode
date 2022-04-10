/*
 * @lc app=leetcode.cn id=357 lang=typescript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 10;
  let res = 10,
    cur = 9;
  for (let i = 0; i < n - 1; i++) {
    cur *= 9 - i;
    res += cur;
  }
  return res;
}
// @lc code=end

let n = 2;
console.log(countNumbersWithUniqueDigits(n));
