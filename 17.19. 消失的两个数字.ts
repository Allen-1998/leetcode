/*
 * @lc app=leetcode.cn id=17.19 lang=typescript
 *
 * [17.19] 消失的两个数字
 * 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？
 * 以任意顺序返回这两个数字均可。
 */

// @lc code=start
function missingTwo(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  let a = 1,
    b: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (v < a) {
      for (let j = a; j > v; j--) {
        b.push(j);
      }
    } else if (v > a) {
      for (let j = a; j < v; j++) {
        b.push(j);
      }
    }
    a = v + 1;
  }
  while (b.length < 2) {
    b.push(a++);
  }
  return b;
}
// @lc code=end
console.log(missingTwo([1]));
console.log(missingTwo([2, 3]));
console.log(missingTwo([1, 2]));
