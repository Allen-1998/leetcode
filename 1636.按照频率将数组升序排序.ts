/*
 * @lc app=leetcode.cn id=1636 lang=typescript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
function frequencySort(nums: number[]): number[] {
  const m = nums.reduce((x, y) => x.set(y, (x.get(y) ?? 0) + 1), new Map());
  return nums.sort((a, b) => {
    const c = m.get(a),
      d = m.get(b);
    return c === d ? b - a : c - d;
  });
}
// @lc code=end

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
