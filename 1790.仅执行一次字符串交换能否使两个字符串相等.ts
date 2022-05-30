/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
  let x = -1;
  for (let i = 0; i < s1.length; i++) {
    const v1 = s1[i];
    const v2 = s2[i];
    if (v1 !== v2) {
      if (x === -1) {
        x = i;
      } else {
        return (
          s1[x] === v2 && s2[x] === v1 && s1.slice(i + 1) === s2.slice(i + 1)
        );
      }
    }
  }
  return x === -1;
}
// @lc code=end
areAlmostEqual("bank", "kanb");
