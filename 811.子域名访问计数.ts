/*
 * @lc app=leetcode.cn id=811 lang=typescript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
function subdomainVisits(cpdomains: string[]): string[] {
  const m = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const [n, s] = cpdomains[i].split(" ");
    for (let j = 0; j < s.length; j++) {
      if (s[j] === ".") {
        const c = s.slice(j + 1);
        m.set(c, (m.get(c) || 0) + Number(n));
      }
    }
    m.set(s, (m.get(s) || 0) + Number(n));
  }
  const r: string[] = [];
  m.forEach((v, k) => {
    r.push(v + " " + k);
  });
  return r;
}
// @lc code=end
console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);
