/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
// @lc code=end

let haystack = "hello";
let needle = "ll";
console.log(strStr(haystack, needle));
