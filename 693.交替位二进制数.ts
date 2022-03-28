/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
  const str = n.toString(2);
  let len = str.length;
  let prev;
  while (len--) {
    const cur = str[len];
    if (cur === prev) return false;
    prev = cur;
  }
  return true;
}
// @lc code=end

const n = 5;
console.log(hasAlternatingBits(n));
