/*
 * @lc app=leetcode.cn id=824 lang=typescript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
function toGoatLatin(sentence: string): string {
  return sentence
    .split(" ")
    .map(
      (i, x) =>
        (/[aeiouAEIOU]/.test(i[0]) ? i + "ma" : i.slice(1) + i[0] + "ma") +
        "a".repeat(x + 1)
    )
    .join(" ");
}
// @lc code=end

let sentence = "The quick brown fox jumped over the lazy dog";
sentence = "I speak Goat Aatin";
console.log(toGoatLatin(sentence));
