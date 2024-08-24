declare module "datastructures2" {
    /** Linked List */
    type LinkedNode<T> = {
        value: T;
        prev: LinkedNode<T> | null;
        next: LinkedNode<T> | null;
    }

    class LinkedList<T> {
        public head: LinkedNode<T>;
        public tail: LinkedNode<T>;
        public length: number;
        constructor(head: T);

        append(value: T): T;
        prepend(value: T): T;
        insert(value: T, index: number): T | undefined;
        find(value: T): T | undefined;
        remove(index: number): T | undefined;
        removeLast(): T;
        removeFirst(): T;
    }

    /** Binary Tree */
    type BinaryTreeNode<T> = {
        value: T;
        left: BinaryTreeNode<T> | null;
        right: BinaryTreeNode<T> | null;
    }

    class BinaryTree<T> {
        public root: BinaryTreeNode<T> | null;

        constructor(root?: BinaryTreeNode<T> | null);

        insert(value: T): void;
        find(value: T): BinaryTreeNode<T> | null;
        delete(value: T): void;
        traverseInOrder(callback: (value: T) => void): void;
        traversePreOrder(callback: (value: T) => void): void;
        traversePostOrder(callback: (value: T) => void): void;
    }

    /** Stack data structure */
    class Stack<T> {
        constructor();
        push(value: T): void;
        pop(): T | undefined;
        peek(): T | undefined;
        isEmpty(): boolean;
    }

    /** Queue data structure */
    class Queue<T> {
        constructor();
        enqueue(value: T): void;
        dequeue(): T | undefined;
        peek(): T | undefined;
        isEmpty(): boolean;
    }


    /** Graph data structure */
    class Graph<T> {
        constructor();
        addNode(value: T): void;
        addEdge(from: T, to: T): void;
        removeNode(value: T): void;
        removeEdge(from: T, to: T): void;
        hasNode(value: T): boolean;
        hasEdge(from: T, to: T): boolean;
        getNeighbors(value: T): T[];
    }
}