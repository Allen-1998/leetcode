/*
 * @lc app=leetcode.cn id=779 lang=typescript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
function kthGrammar(n: number, k: number): number {
  let a = 2 ** (n - 1),
    b = false;
  while (a > 2) {
    if (k > a / 2) {
      k = a - k;
      if (n % 2 === 0) {
        b = !b;
      }
    }
    a = a / 2;
    n--;
  }
  return b ? (k === 1 ? 1 : 0) : k - 1;
}
// @lc code=end
console.log(kthGrammar(1, 1));
console.log(kthGrammar(2, 1));
console.log(kthGrammar(2, 2));
console.log(kthGrammar(3, 2));
console.log(kthGrammar(3, 3));
console.log(kthGrammar(4, 5));
