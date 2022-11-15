/*
 * @lc app=leetcode.cn id=1710 lang=typescript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let c = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const v = boxTypes[i];
    if (truckSize > v[0]) {
      truckSize -= v[0];
      c += v[1] * v[0];
    } else {
      c += v[1] * truckSize;
      return c;
    }
  }
  return c;
}
// @lc code=end
console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
