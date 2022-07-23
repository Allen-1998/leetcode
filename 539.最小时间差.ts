/*
 * @lc app=leetcode.cn id=539 lang=typescript
 *
 * [539] 最小时间差
 */

// @lc code=start
function findMinDifference(timePoints: string[]): number {
  const arr = timePoints.map((i) => new Date("2022:" + i).valueOf()).sort();
  let min = 1440 - (arr[arr.length - 1] - arr[0]) / 60000;
  for (let i = 0; i < arr.length - 1; i++) {
    const v = (arr[i + 1] - arr[i]) / 60000;
    min = Math.min(min, v, 1440 - v);
  }
  return min;
}
// @lc code=end
console.log(findMinDifference(["00:00", "04:00", "22:00"]));
