/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const m = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
function letterCombinations(digits: string): string[] {
  if (digits.length === 1) return m[digits].split("");
  if (digits.length === 0) return [];
  const res = [];
  for (const c of m[digits[0]]) {
    for (const s of letterCombinations(digits.slice(1))) {
      res.push(c + s);
    }
  }
  return res;
}
// @lc code=end
let digits = "234";
console.log(letterCombinations(digits));
