/*
 * @lc app=leetcode.cn id=1640 lang=typescript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
function canFormArray(arr: number[], pieces: number[][]): boolean {
  for (let i = 0; i < pieces.length; i++) {
    const a = pieces[i];
    let b = arr.findIndex((i) => i === a[0]);
    if (b === -1) return false;
    if (a.length > 1) {
      for (let j = 1; j < a.length; j++) {
        const c = a[j];
        if (c !== arr[++b]) return false;
      }
    }
  }
  return true;
}
// @lc code=end
console.log(canFormArray([15, 88], [[88], [15]]));
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
