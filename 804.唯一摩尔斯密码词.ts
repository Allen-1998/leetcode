/*
 * @lc app=leetcode.cn id=804 lang=typescript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
  const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  const set = new Set<string>();
  for (const word of words) {
    let res = "";
    for (const c of word) {
      res += morse[c];
    }
    set.add(res);
  }
  return set.size;
}
// @lc code=end

let words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));
