/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const res: number[] = [];
  function judge(a, b, x) {
    const m = Math.abs(a - x),
      n = Math.abs(b - x);
    return m < n || (m === n && a < b);
  }
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (res.length < k) {
      res.push(v);
    } else if (judge(v, res[0], x) || judge(v, res[res.length - 1], x)) {
      res.shift();
      res.push(v);
    }
  }
  return res;
}
// @lc code=end
console.log(findClosestElements([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2));
