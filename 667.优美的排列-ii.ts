/*
 * @lc app=leetcode.cn id=667 lang=typescript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
function constructArray(n: number, k: number): number[] {
  const a = k % 2 === 0;
  let b = 1;
  let c = true;
  const d: number[] = [];
  while (k--) {
    if (c) {
      d.push(b);
      b++;
    } else {
      d.push(n);
      n--;
    }
    c = !c;
  }
  if (a) {
    while (n >= b) {
      d.push(n);
      n--;
    }
  } else {
    while (n >= b) {
      d.push(b);
      b++;
    }
  }
  return d;
}
// @lc code=end
console.log(constructArray(6, 5));
