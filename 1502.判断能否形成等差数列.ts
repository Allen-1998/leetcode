/*
 * @lc app=leetcode.cn id=1502 lang=typescript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
}
// @lc code=end
