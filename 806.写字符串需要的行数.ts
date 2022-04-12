/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], s: string): number[] {
  let line = 1,
    cur = 0;
  for (let i = 0; i < s.length; i++) {
    let w = widths[s.charCodeAt(i) - 97];
    if (cur + w > 100) {
      line++;
      cur = w;
    } else {
      cur += w;
    }
  }
  return [line, cur];
}
// @lc code=end

let widths = [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  S = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths, S));
