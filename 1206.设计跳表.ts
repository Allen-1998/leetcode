/*
 * @lc app=leetcode.cn id=1206 lang=typescript
 *
 * [1206] 设计跳表
 */

// @lc code=start
class Skiplist {
  map: Map<number, number>;
  constructor() {
    this.map = new Map();
  }

  search(target: number): boolean {
    return Boolean(this.map.has(target));
  }

  add(num: number): void {
    this.map.set(num, (this.map.get(num) || 0) + 1);
  }

  erase(num: number): boolean {
    if (!this.map.has(num)) return false;
    const v = this.map.get(num);
    if (v === 1) {
      this.map.delete(num);
    } else {
      this.map.set(num, (v || 0) - 1);
    }
    return true;
  }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
// @lc code=end
