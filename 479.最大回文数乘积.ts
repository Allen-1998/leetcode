/*
 * @lc app=leetcode.cn id=479 lang=typescript
 *
 * [479] 最大回文数乘积
 */

// @lc code=start
function largestPalindrome(n: number): number {
  if (n === 1) return 9;
  function reverse(x: string): string {
    let res = "";
    let n = x.length;
    while (n--) {
      res += x[n];
    }
    return res;
  }
  const upper = 10 ** n - 1;
  for (let left = upper; left > upper / 10; left--) {
    let right = reverse(String(left));
    let p = BigInt(String(left) + right);
    let x = BigInt(upper);
    while (x * x >= p) {
      if (p % x === BigInt(0)) {
        return Number(p % BigInt(1337));
      }
      x--;
    }
  }
}
// @lc code=end
let n = 2;
console.log(largestPalindrome(n));
