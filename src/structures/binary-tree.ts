import { BinaryTreeNode, BinaryTree as BinaryTreeType } from "datastructures2";

export class BinaryTree<T> implements BinaryTreeType<T> {
    public root: BinaryTreeNode<T> | null;

    constructor(root?: BinaryTreeNode<T> | null) {
        this.root = root || null;
    }

    // Insert a value into the binary tree
    insert(value: T): void {
        const newNode: BinaryTreeNode<T> = {
            value,
            left: null,
            right: null,
        };

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Find a value in the binary tree
    find(value: T): BinaryTreeNode<T> | null {
        return this.findNode(this.root, value);
    }

    private findNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
        if (node === null) {
            return null;
        }
        if (value === node.value) {
            return node;
        }
        if (value < node.value) {
            return this.findNode(node.left, value);
        } else {
            return this.findNode(node.right, value);
        }
    }

    // Delete a value from the binary tree
    delete(value: T): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node to be deleted found

            // Case 1: Node has no children (leaf node)
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: Node has only one child
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            // Case 3: Node has two children
            // Find the in-order successor (smallest value in the right subtree)
            const minRight = this.findMin(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
        }
        return node;
    }

    private findMin(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Traverse the tree in-order (left, root, right)
    traverseInOrder(callback: (value: T) => void): void {
        this.inOrder(this.root, callback);
    }

    private inOrder(node: BinaryTreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    // Traverse the tree pre-order (root, left, right)
    traversePreOrder(callback: (value: T) => void): void {
        this.preOrder(this.root, callback);
    }

    private preOrder(node: BinaryTreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    // Traverse the tree post-order (left, right, root)
    traversePostOrder(callback: (value: T) => void): void {
        this.postOrder(this.root, callback);
    }

    private postOrder(node: BinaryTreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
            callback(node.value);
        }
    }
}
