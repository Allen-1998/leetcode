/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let ans = "",
    l,
    carry = 0;
  if (a.length > b.length) {
    l = a.length;
    b = b.padStart(l, "0");
  } else {
    l = b.length;
    a = a.padStart(l, "0");
  }
  while (l--) {
    let sum = Number(a[l]) + Number(b[l]) + carry;
    carry = sum >= 2 ? 1 : 0;
    ans = (sum % 2) + ans;
  }
  return (carry || "") + ans;
}
// @lc code=end

let a = "11";
let b = "1";
a = "1010";
b = "101";
console.log(addBinary(a, b));
