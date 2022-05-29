/*
 * @lc app=leetcode.cn id=468 lang=typescript
 *
 * [468] 验证IP地址
 */

// @lc code=start
function validIPAddress(queryIP: string): string {
  return /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)($|(?!\.$)\.)){4}$/.test(queryIP)
    ? "IPv4"
    : /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})$/i.test(queryIP)
    ? "IPv6"
    : "Neither";
}
// @lc code=end
let queryIP = "172.16.254.1";
queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334";
queryIP = "256.256.256.256";
queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334:";
console.log(validIPAddress(queryIP));
