/*
 * @lc app=leetcode.cn id=1684 lang=typescript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
    return words.reduce((i,j)=>j.split('').every(k=>allowed.includes(k))?i+1:i,0)
};
// @lc code=end

