/*
 * @lc app=leetcode.cn id=670 lang=typescript
 *
 * [670] 最大交换
 */

// @lc code=start
function maximumSwap(num: number): number {
  const a = num.toString(),
    b = a.length;
  for (let i = 0; i < b; i++) {
    const m = Number(a[i]);
    let c = i,
      d = m;
    for (let j = i + 1; j < b; j++) {
      const n = Number(a[j]);
      if (n > d) {
        c = j;
        d = n;
      }
    }
    if (c !== i) {
      c = a.lastIndexOf(d.toString());
      return Number(a.slice(0, i) + d + a.slice(i + 1, c) + m + a.slice(c + 1));
    }
  }
  return num;
}
// @lc code=end
console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(98368)); // 98863
console.log(maximumSwap(122)); // 221
console.log(maximumSwap(123)); // 321
console.log(maximumSwap(100)); // 100
console.log(maximumSwap(99901)); // 99910
