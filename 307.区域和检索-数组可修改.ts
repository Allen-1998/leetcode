/*
 * @lc app=leetcode.cn id=307 lang=typescript
 *
 * [307] 区域和检索 - 数组可修改
 */
// TODO 待二刷，性能差
// @lc code=start
class NumArray {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  update(index: number, val: number): void {
    this.nums[index] = val;
  }

  sumRange(left: number, right: number): number {
    return this.nums.slice(left, right + 1).reduce((a, b) => a + b);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
const obj = new NumArray([1, 3, 5]);
console.log(obj.sumRange(0, 2));
obj.update(1, 2);
console.log(obj.sumRange(0, 2));
