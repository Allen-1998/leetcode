/*
 * @lc app=leetcode.cn id=788 lang=typescript
 *
 * [788] 旋转数字
 */

// @lc code=start
function rotatedDigits(n: number): number {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (a, b) =>
      a + Number(/[2569]/.test(b.toString()) && !/[347]/.test(b.toString())),
    0
  );
}
// @lc code=end
console.log(rotatedDigits(10));
