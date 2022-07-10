/*
 * @lc app=leetcode.cn id=1436 lang=typescript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
function destCity(paths: string[][]): string {
  const set = new Set<string>();
  const set1 = new Set<string>();
  for (const [a, b] of paths) {
    if (set.has(a)) {
      set.delete(a);
    } else {
      set1.add(a);
    }
    if (!set1.has(b)) {
      set.add(b);
    }
  }
  return Array.from(set)[0];
}
// @lc code=end

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
