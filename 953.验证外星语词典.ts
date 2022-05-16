/*
 * @lc app=leetcode.cn id=953 lang=typescript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
function isAlienSorted(words: string[], order: string): boolean {
  const map: { [key: string]: number } = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    let j = 0;
    while (j < word1.length && j < word2.length) {
      const c1 = word1[j];
      const c2 = word2[j];
      if (c1 !== c2) {
        if (map[c1] > map[c2]) {
          return false;
        }
        break;
      }
      j++;
    }
    if (j < word1.length && j === word2.length) {
      return false;
    }
  }
  return true;
}
// @lc code=end

let words = ["hello", "leetcode"],
  order = "hlabcdefgijkmnopqrstuvwxyz";
(words = ["word", "world", "row"]), (order = "worldabcefghijkmnpqstuvxyz");
(words = ["apple", "app"]), (order = "abcdefghijklmnopqrstuvwxyz");
(words = [
  "fxasxpc",
  "dfbdrifhp",
  "nwzgs",
  "cmwqriv",
  "ebulyfyve",
  "miracx",
  "sxckdwzv",
  "dtijzluhts",
  "wwbmnge",
  "qmjwymmyox",
]),
  (order = "zkgwaverfimqxbnctdplsjyohu");
(words = ["kuvp", "q"]), (order = "ngxlkthsjuoqcpavbfdermiywz");
console.log(isAlienSorted(words, order));
