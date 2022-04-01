/*
 * @lc app=leetcode.cn id=954 lang=typescript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
function canReorderDoubled(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let numOccurenceMap: Map<number, number> = new Map<number, number>();
  for (let num of arr) {
    numOccurenceMap.set(num, (numOccurenceMap.get(num) || 0) + 1);
  }
  for (let num of arr) {
    if (numOccurenceMap.has(num)) {
      let matchingPairNum: number = num >= 0 ? num * 2 : num / 2;
      if (!numOccurenceMap.has(matchingPairNum)) {
        return false;
      }
      for (let key of [num, matchingPairNum]) {
        numOccurenceMap.set(key, numOccurenceMap.get(key) - 1);
        if (numOccurenceMap.get(key) === 0) {
          numOccurenceMap.delete(key);
        }
      }
    }
  }
  return true;
}
// @lc code=end

let arr = [3, 1, 3, 6];
arr = [2, 1, 2, 6];
arr = [4, -2, 2, -4];
console.log(canReorderDoubled(arr));
