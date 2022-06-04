/*
 * @lc app=leetcode.cn id=929 lang=typescript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
function numUniqueEmails(emails: string[]): number {
  let n = emails.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    let [local, domain] = emails[i].split("@");
    local = local.replace(/\./g, "").replace(/\+.*/, "");
    set.add(local + "@" + domain);
  }
  return set.size;
}
// @lc code=end

let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(numUniqueEmails(emails));
