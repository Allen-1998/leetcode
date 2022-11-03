/*
 * @lc app=leetcode.cn id=1668 lang=typescript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
function maxRepeating(sequence: string, word: string): number {
  let i = 0;
  while (sequence.match(new RegExp(`(${word}){${i}}`))) {
    i++;
  }
  return i - 1;
}
// @lc code=end

console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
