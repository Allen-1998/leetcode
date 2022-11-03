/*
 * @lc app=leetcode.cn id=1668 lang=typescript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
// function maxRepeating(sequence: string, word: string): number {
//   let i = 1;
//   while (new RegExp(`(${word}){${i}}`).test(sequence)) {
//     i++;
//   }
//   return i - 1;
// }
function maxRepeating(sequence: string, word: string): number {
  let i = Math.floor(sequence.length / word.length);
  while (!new RegExp(`(${word}){${i}}`).test(sequence)) {
    i--;
  }
  return i;
}
// @lc code=end

console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("ababc", "ac"));
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
