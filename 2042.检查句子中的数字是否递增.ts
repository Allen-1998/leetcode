/*
 * @lc app=leetcode.cn id=2042 lang=typescript
 *
 * [2042] 检查句子中的数字是否递增
 */

// @lc code=start
function areNumbersAscending(s: string): boolean {
  const a = s.match(/\d+/g)!.map((v) => parseInt(v));
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i + 1]) return false;
  }
  return true;
}
// @lc code=end

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
