/*
 * @lc app=leetcode.cn id=1694 lang=typescript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
function reformatNumber(number: string): string {
  return number
    .replace(/(-| )/g, "")
    .replace(/\d{2,3}(?=\d{2})/g, (i) => i + "-");
}
// @lc code=end
console.log(reformatNumber("1-23-45 6"));
console.log(reformatNumber("1234567"));
