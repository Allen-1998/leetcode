/*
 * @lc app=leetcode.cn id=440 lang=typescript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
function findKthNumber(n: number, k: number): number {
  let getCount = (prefix, n) => {
    let count = 0;
    for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10)
      count += Math.min(next, n + 1) - cur;
    return count;
  };
  let p = 1;
  let prefix = 1;
  while (p < k) {
    let count = getCount(prefix, n);
    if (p + count > k) {
      prefix *= 10;
      p++;
    } else if (p + count <= k) {
      prefix++;
      p += count;
    }
  }
  return prefix;
}
// @lc code=end

let n = 13;
let k = 2;
console.log(findKthNumber(n, k));
