/*
 * @lc app=leetcode.cn id=868 lang=typescript
 *
 * [868] 二进制间距
 */

// @lc code=start
function binaryGap(n: number): number {
  const str = n.toString(2);
  let max = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      max = Math.max(max, count);
      count = 1;
    } else {
      count++;
    }
  }
  return max;
}
// @lc code=end

let n = 8;
n = 22;
console.log(binaryGap(n));
