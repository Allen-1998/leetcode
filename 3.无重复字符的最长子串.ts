/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  const map = new Map();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
// @lc code=end

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
