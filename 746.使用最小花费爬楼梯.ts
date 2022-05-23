/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  let a = cost[0],
    b = cost[1],
    c;
  for (let i = 2; i < cost.length; i++) {
    c = Math.min(a, b) + cost[i];
    a = b;
    b = c;
  }
  return Math.min(a, b);
}
// @lc code=end

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// cost = [10,15,20]
console.log(minCostClimbingStairs(cost));
