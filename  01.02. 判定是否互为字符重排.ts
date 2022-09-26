/*
 * @lc app=leetcode.cn id= 01.02 lang=typescript
 *
 * [ 01.02] 判定是否互为字符重排
 */

// @lc code=start
function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
// @lc code=end
console.log(CheckPermutation("abc", "bad"));
