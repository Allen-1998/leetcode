/*
 * @lc app=leetcode.cn id=1184 lang=typescript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  let a = 0,
    b = 0,
    c = Math.min(start, destination),
    d = Math.max(start, destination);
  for (let i = 0; i < distance.length; i++) {
    const v = distance[i];
    if (i >= c && i < d) {
      a += v;
    } else {
      b += v;
    }
  }
  return Math.min(a, b);
}
// @lc code=end
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
