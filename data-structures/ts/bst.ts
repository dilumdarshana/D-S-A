// Binary Search Tree — each node's left subtree contains smaller values,
// right subtree contains larger values.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: TreeNode | null = null;

  insert(val: number): void {
    this.root = this._insert(this.root, val);
  }

  private _insert(node: TreeNode | null, val: number): TreeNode {
    if (!node) return new TreeNode(val);
    if (val < node.val) node.left = this._insert(node.left, val);
    else node.right = this._insert(node.right, val);
    return node;
  }

  search(val: number): boolean {
    let curr = this.root;
    while (curr) {
      if (curr.val === val) return true;
      curr = val < curr.val ? curr.left : curr.right;
    }
    return false;
  }

  delete(val: number): void {
    this.root = this._delete(this.root, val);
  }

  private _delete(node: TreeNode | null, val: number): TreeNode | null {
    if (!node) return null;

    if (val < node.val) {
      node.left = this._delete(node.left, val);
    } else if (val > node.val) {
      node.right = this._delete(node.right, val);
    } else {
      // found the node to delete

      // case 1: leaf or one child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // case 2: two children — replace with inorder successor (min of right)
      const successor = this._minNode(node.right);
      node.val = successor.val;
      node.right = this._delete(node.right, successor.val);
    }

    return node;
  }

  min(): number | null {
    return this._minNode(this.root)?.val ?? null;
  }

  private _minNode(node: TreeNode): TreeNode {
    while (node.left) node = node.left;
    return node;
  }

  // inorder traversal yields sorted values
  inorder(): number[] {
    const result: number[] = [];
    this._inorder(this.root, result);
    return result;
  }

  private _inorder(node: TreeNode | null, out: number[]): void {
    if (!node) return;
    this._inorder(node.left, out);
    out.push(node.val);
    this._inorder(node.right, out);
  }

  isValid(): boolean {
    return this._isValid(this.root, -Infinity, Infinity);
  }

  private _isValid(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return this._isValid(node.left, min, node.val) && this._isValid(node.right, node.val, max);
  }
}

const bst = new BST();
[5, 3, 7, 2, 4, 6, 8].forEach((v) => bst.insert(v));

console.log(bst.inorder());  // [2, 3, 4, 5, 6, 7, 8]
console.log(bst.search(4));  // true
console.log(bst.search(9));  // false
console.log(bst.min());      // 2
console.log(bst.isValid());  // true

bst.delete(3);
console.log(bst.inorder());  // [2, 4, 5, 6, 7, 8]
