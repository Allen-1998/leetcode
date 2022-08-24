/*
 * @lc app=leetcode.cn id=1460 lang=typescript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
  const map = new Map();
  for (let i = 0; i < target.length; i++) {
    const j = target[i];
    const m = (map.get(j) || 0) + 1;
    if (m === 0) {
      map.delete(j);
    } else {
      map.set(j, m);
    }
    const k = arr[i];
    const n = (map.get(k) || 0) - 1;
    if (n === 0) {
      map.delete(k);
    } else {
      map.set(k, n);
    }
  }
  return map.size === 0;
}
// @lc code=end
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
