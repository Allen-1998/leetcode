/*
 * @lc app=leetcode.cn id=762 lang=typescript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
function countPrimeSetBits(left: number, right: number): number {
  function isPrime(x: number): boolean {
    if (x < 2) return false;
    if (x == 2) return true;
    if (x % 2 == 0) return false;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i == 0) return false;
    }
    return true;
  }
  function bitCount(x: number): number {
    let count = 0;
    while (x) {
      count++;
      x &= x - 1;
    }
    return count;
  }
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(bitCount(i))) count++;
  }
  return count;
}

// @lc code=end

const left = 6,
  right = 10;

console.log(countPrimeSetBits(left, right));
