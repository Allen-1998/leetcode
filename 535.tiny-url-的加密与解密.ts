/*
 * @lc app=leetcode.cn id=535 lang=typescript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */
const map = new Map();
let count = 0;
function encode(longUrl: string): string {
  const shortUrl = `http://tinyurl.com/${count}`;
  map.set(count, longUrl);
  count++;
  return shortUrl;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const id = shortUrl.match(/\d+$/)?.[0];
  return map.get(Number(id));
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

console.log(encode("https://leetcode.com/problems/design-tinyurl"));
console.log(decode("http://tinyurl.com/0"));
