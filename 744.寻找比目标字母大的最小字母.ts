/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
  return letters.find((letter) => letter > target) || letters[0];
}
// @lc code=end

let letters = ["c", "f", "j"],
  target = "a";
console.log(nextGreatestLetter(letters, target));
