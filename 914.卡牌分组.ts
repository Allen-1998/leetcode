/*
 * @lc app=leetcode.cn id=914 lang=typescript
 *
 * [914] 卡牌分组
 */

// @lc code=start
function hasGroupsSizeX(deck: number[]): boolean {
  // 利用辗转相除法来计算最大公约数
  function gcd(num1: number, num2: number): number {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2);
  }
  // 保存每个值出现了多少次
  let map: { [props: string]: number } = {};
  for (let i = 0; i < deck.length; i++) {
    let val = deck[i];
    map[val] = map[val] ? map[val] + 1 : 1;
  }
  // 保存最大公约数
  let t: number = 0;
  // 计算最大公约数
  Object.keys(map).forEach((key: any) => {
    t = gcd(t, map[key]);
    if (t < 2) return false;
  });
  // 返回最大公约数是不是大于2就行
  return t >= 2;
}
// @lc code=end
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
