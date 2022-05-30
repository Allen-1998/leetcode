/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const s = String(n);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const v = Number(s[i]);
    sum += v ** 2;
  }
  if (sum === 1) return true;
  if (sum === 4) return false;
  return isHappy(sum);
}
// @lc code=end
