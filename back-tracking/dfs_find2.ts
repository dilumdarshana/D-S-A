class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      }
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      }
    }
  }
};

// find a given node
const findNode = (root: TreeNode | null, target: number): boolean => {
  if (!root) return false;

  if (root.val === target) return true;

  return findNode(root.left, target) || findNode(root.right, target);
}

const target = 40;
console.log(findNode(tree, target));
