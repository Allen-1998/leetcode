/*
 * @lc app=leetcode.cn id=919 lang=typescript
 *
 * [919] 完全二叉树插入器
 */

// @lc code=start
/**
Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 */

class CBTInserter {
  tree: number[];
  constructor(root: TreeNode | null) {
    const tree: number[] = [];
    const dfs = (node: TreeNode | null, i: number): void => {
      if (node === null) return;
      tree[i] = node.val;
      dfs(node.left, i * 2 + 1);
      dfs(node.right, i * 2 + 2);
    };
    dfs(root, 0);
    this.tree = tree;
  }

  insert(val: number): number {
    this.tree.push(val);
    const n = this.tree.length;
    const index = (n - (n % 2)) / 2 - 1;
    return this.tree[index];
  }

  get_root(): TreeNode | null {
    const n = this.tree.length;
    const dfs = (arr: number[], i: number): TreeNode | null => {
      if (i >= n) return null;
      const node = new TreeNode(arr[i]);
      node.left = dfs(arr, i * 2 + 1);
      node.right = dfs(arr, i * 2 + 2);
      return node;
    };
    return dfs(this.tree, 0);
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
const obj = new CBTInserter(root);
console.log(obj.insert(7));
console.log(obj.insert(8));
