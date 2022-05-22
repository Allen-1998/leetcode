/*
 * @lc app=leetcode.cn id=1491 lang=typescript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
function average(salary: number[]): number {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  const sum = salary.reduce((a, b) => a + b, 0);
  return (sum - min - max) / (salary.length - 2);
}
// @lc code=end

let salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
