/*
 * @lc app=leetcode.cn id=1656 lang=typescript
 *
 * [1656] 设计有序流
 */

// @lc code=start
class OrderedStream {
  arr: any[];
  l: number;
  constructor(n: number) {
    this.arr = new Array(n);
    this.l = 0;
  }

  insert(idKey: number, value: string): string[] {
    this.arr[idKey - 1] = value;
    const res: string[] = [];
    for (let i = this.l; i < this.arr.length; i++) {
      const v = this.arr[i];
      if (v) {
        res.push(v);
      } else {
        break;
      }
    }
    this.l += res.length;
    return res;
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
