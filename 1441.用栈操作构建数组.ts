/*
 * @lc app=leetcode.cn id=1441 lang=typescript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
function buildArray(target: number[], n: number): string[] {
  let l = 0,
    r: string[] = [];
  for (let i = 0; i < target.length; i++) {
    const v = target[i];
    const c = v - l - 1;
    if (c) {
      r.push(...new Array(c).fill(["Push", "Pop"]).flat(1));
    }
    r.push("Push");
    l = v;
  }
  return r;
}
// @lc code=end
console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));
console.log(buildArray([1, 4], 4));
