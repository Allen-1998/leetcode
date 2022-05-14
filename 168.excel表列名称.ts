/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let res = "";
  while (columnNumber) {
    res = String.fromCharCode((--columnNumber % 26) + 65) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
}
// @lc code=end

let columnNumber = 1;
columnNumber = 28;
// columnNumber = 701;
console.log(convertToTitle(columnNumber));
