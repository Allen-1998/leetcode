/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).indexOf(goal) !== -1;
}
// @lc code=end
let s = "abcde",
  goal = "cdeab";
(s = "bbbacddceeb"), (goal = "ceebbbbacdd");
console.time("time");
console.log(rotateString(s, goal));
console.timeEnd("time");
