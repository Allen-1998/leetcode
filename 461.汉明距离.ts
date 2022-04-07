/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  function hammingWeight(n: number): number {
    let count = 0;
    while (n) {
      count++;
      n &= n - 1;
    }
    return count;
  }
  return hammingWeight(x ^ y);
}
// @lc code=end

let x = 4,
  y = 14;
console.log(hammingDistance(x, y));
