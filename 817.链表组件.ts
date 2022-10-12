/*
 * @lc app=leetcode.cn id=817 lang=typescript
 *
 * [817] 链表组件
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function numComponents(head: ListNode | null, nums: number[]): number {
  let a = false,
    b = 0;
  while (head) {
    if (nums.includes(head.val)) {
      if (a === false) {
        a = true;
        b++;
      }
    } else {
      a = false;
    }
    head = head.next;
  }
  return b;
}
// @lc code=end
