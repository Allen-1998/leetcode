/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  const res: number[] = [];
  function hammingWeight(n: number): number {
    let count = 0;
    while (n) {
      count++;
      n &= n - 1;
    }
    return count;
  }
  for (let i = 0; i <= n; i++) {
    res[i] = hammingWeight(i);
  }
  return res;
}
// @lc code=end

let n = 2;
console.log(countBits(n));
