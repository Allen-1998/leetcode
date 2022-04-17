/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const arr = paragraph.match(/\w+/g);
  const map = new Map<string, number>();
  let max = 0;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i].toLowerCase();
    if (banned.includes(v)) continue;
    map.set(v, (map.get(v) || 0) + 1);
    if (map.get(v) > max) {
      max = map.get(v);
      res = v;
    }
  }
  return res;
}
// @lc code=end

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));
