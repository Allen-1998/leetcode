/*
 * @lc app=leetcode.cn id=2028 lang=typescript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const sum = mean * (rolls.length + n) - rolls.reduce((a, b) => a + b, 0);
  if (sum > n * 6 || sum < n * 1) return [];
  let count = sum % n;
  return Array(n)
    .fill(Math.floor(sum / n))
    .map((i) => {
      if (count === 0) return i;
      count--;
      return i + 1;
    });
}
// @lc code=end

const rolls = [
    4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1,
    5, 4, 3, 5, 1, 5,
  ],
  mean = 4,
  n = 40;
console.log(missingRolls(rolls, mean, n));
