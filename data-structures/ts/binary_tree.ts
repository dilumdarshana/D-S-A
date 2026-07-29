// Binary Tree node and traversals

class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// build a small tree:
//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// DFS — Preorder (root, left, right)
function preorder<T>(node: TreeNode<T> | null): T[] {
  if (!node) return [];
  return [node.val, ...preorder(node.left), ...preorder(node.right)];
}

// DFS — Inorder (left, root, right)
function inorder<T>(node: TreeNode<T> | null): T[] {
  if (!node) return [];
  return [...inorder(node.left), node.val, ...inorder(node.right)];
}

// DFS — Postorder (left, right, root)
function postorder<T>(node: TreeNode<T> | null): T[] {
  if (!node) return [];
  return [...postorder(node.left), ...postorder(node.right), node.val];
}

// BFS — Level order
function levelOrder<T>(root: TreeNode<T> | null): T[][] {
  if (!root) return [];

  const result: T[][] = [];
  const queue: TreeNode<T>[] = [root];

  while (queue.length > 0) {
    const level: T[] = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

console.log("preorder:", preorder(root));    // [1, 2, 4, 5, 3]
console.log("inorder:", inorder(root));      // [4, 2, 5, 1, 3]
console.log("postorder:", postorder(root));  // [4, 5, 2, 3, 1]
console.log("level order:", levelOrder(root)); // [[1], [2, 3], [4, 5]]
