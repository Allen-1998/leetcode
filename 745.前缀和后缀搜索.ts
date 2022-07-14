/*
 * @lc app=leetcode.cn id=745 lang=typescript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
class WordFilter {
  words: string[];
  constructor(words: string[]) {
    this.words = words;
  }

  f(pref: string, suff: string): number {
    let n = this.words.length;
    while (n--) {
      const word = this.words[n];
      if (word.startsWith(pref) && word.endsWith(suff)) {
        return n;
      }
    }
    return -1;
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end
