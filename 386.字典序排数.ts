/*
 * @lc app=leetcode.cn id=386 lang=typescript
 *
 * [386] 字典序排数
 */

// @lc code=start
function lexicalOrder(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1).sort();
}
// @lc code=end
let n = 13;
console.log(lexicalOrder(n));
