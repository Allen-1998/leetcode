/*
 * @lc app=leetcode.cn id=998 lang=typescript
 *
 * [998] 最大二叉树 II
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const n = nums.length;
  if (n === 0) return null;
  let max = 0,
    maxIndex = 0;
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
}
function maximumBinaryTreeToArr(root: TreeNode | null): number[] {
  if (!root) return [];
  return [
    ...maximumBinaryTreeToArr(root.left),
    root.val,
    ...maximumBinaryTreeToArr(root.right),
  ];
}
function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  return constructMaximumBinaryTree(maximumBinaryTreeToArr(root).concat(val));
}
// @lc code=end

let a = new TreeNode(4);
a.left = new TreeNode(1);
a.right = new TreeNode(3);
a.right.left = new TreeNode(2);
console.log(maximumBinaryTreeToArr(a));
// console.log(insertIntoMaxTree(a, 5));

let b = new TreeNode(5);
b.left = new TreeNode(2);
b.right = new TreeNode(4);
b.left.right = new TreeNode(1);
console.log(maximumBinaryTreeToArr(b));
// console.log(insertIntoMaxTree(b, 5));
