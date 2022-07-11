/*
 * @lc app=leetcode.cn id=599 lang=typescript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>();
  let min = Number.MAX_VALUE;
  let res: string[] = [];
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    const v = list2[i];
    const target = map.get(v);
    if (target !== undefined) {
      const sum = i + target;
      map.set(v, sum);
      if (sum < min) {
        min = sum;
        res = [v];
      } else if (sum === min) {
        res.push(v);
      }
    }
  }
  return res;
}
// @lc code=end

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
