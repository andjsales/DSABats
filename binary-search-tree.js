class Node {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor (root = null) {
    this.root = root;
  }

  // MARK: insert(val)
  // Insert a new node into the BST with value val.
  // Returns the tree. Uses iteration.
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // MARK: insertRecursively(val)
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, node = this.root) {
    if (!node) {
      this.root = new Node(val);
      return this;
    }

    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
      } else {
        this.insertRecursively(val, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new Node(val);
      } else {
        this.insertRecursively(val, node.right);
      }
    }
    return this;
  }

  // MARK: find(val)
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }

  // MARK: findRecursively(val)
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val < node.val) return this.findRecursively(val, node.left);
    if (val > node.val) return this.findRecursively(val, node.right);
    return node;
  }

  // MARK: dfsPreOrder()
  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  dfsPreOrder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.val);
    this.dfsPreOrder(node.left, result);
    this.dfsPreOrder(node.right, result);
    return result;
  }

  // MARK: dfsInOrder()
  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder(node = this.root, result = []) {
    if (!node) return result;
    this.dfsInOrder(node.left, result);
    result.push(node.val);
    this.dfsInOrder(node.right, result);
    return result;
  }

  // MARK: dfsPostOrder()
  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  dfsPostOrder(node = this.root, result = []) {
    if (!node) return result;
    this.dfsPostOrder(node.left, result);
    this.dfsPostOrder(node.right, result);
    result.push(node.val);
    return result;
  }

  // MARK: bfs()
  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    const queue = [];
    const result = [];
    if (this.root) queue.push(this.root);
    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

module.exports = BinarySearchTree;
