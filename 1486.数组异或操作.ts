/*
 * @lc app=leetcode.cn id=1486 lang=typescript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
function xorOperation(n: number, start: number): number {
  let r = start;
  n--;
  while (n--) {
    start += 2;
    r = r ^ start;
  }
  return r;
}
// @lc code=end
// console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
