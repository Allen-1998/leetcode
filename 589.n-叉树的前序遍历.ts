/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null, arr = []): number[] {
  if (root === null) {
    return arr;
  }
  arr.push(root.val);
  for (const ch of root.children) {
    preorder(ch, arr);
  }
  return arr;
}
// @lc code=end
