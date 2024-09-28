import { LinkedList as LinkedListType, LinkedNode } from "datastructures2";

export class LinkedList<T> implements LinkedListType<T> {
    public head: LinkedNode<T>;
    public tail: LinkedNode<T>;
    public length: number;

    constructor(headValue: T | null | undefined) {
        const headNode: LinkedNode<T> = {
            value: headValue as any,
            prev: null,
            next: null,
        };
        this.head = headNode;
        this.tail = headNode;

        if (headValue) {
            this.length = 1;
        }
        else {
            this.length = 0;
        }
    }

    append(value: T): T {
        if (!this.length) {
            this.head = {
                value,
                prev: null,
                next: null,
            }

            this.tail = this.head;
            this.length++;
            return value;
        }

        const newNode: LinkedNode<T> = {
            value,
            prev: this.tail,
            next: null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return value;
    }

    prepend(value: T): T {
        if (!this.length) {
            this.head = {
                value,
                prev: null,
                next: null,
            }

            this.length++;
            this.tail = this.head;
            return value;
        }
        const newNode: LinkedNode<T> = {
            value,
            prev: null,
            next: this.head,
        };
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return value;
    }

    insert(value: T, index: number): T | undefined {
        if (index < 0 || index > this.length) return undefined;

        if (index === 0) return this.prepend(value);
        if (index === this.length) return this.append(value);

        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next!;
        }

        const newNode: LinkedNode<T> = {
            value,
            prev: currentNode,
            next: currentNode.next!,
        };
        currentNode.next!.prev = newNode;
        currentNode.next = newNode;
        this.length++;
        return value;
    }

    find(value: T): T | undefined {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode.value;
            }
            currentNode = currentNode.next!;
        }
        return undefined;
    }

    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.removeFirst();
        if (index === this.length - 1) return this.removeLast();

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next!;
        }

        const value = currentNode.value;
        currentNode.prev!.next = currentNode.next!;
        currentNode.next!.prev = currentNode.prev!;
        this.length--;
        return value;
    }

    removeLast(): T {
        if (this.length === 0) throw new Error("List is empty");

        const value = this.tail.value;
        if (this.length === 1) {
            this.head = {} as LinkedNode<T>;
            this.tail = {} as LinkedNode<T>;
        } else {
            this.tail = this.tail.prev!;
            this.tail.next = null;
        }
        this.length--;
        return value;
    }

    removeFirst(): T {
        if (this.length === 0) throw new Error("List is empty");

        const value = this.head.value;
        if (this.length === 1) {
            this.head = {} as LinkedNode<T>;
            this.tail = {} as LinkedNode<T>;
        } else {
            this.head = this.head.next!;
            this.head.prev = null;
        }
        this.length--;
        return value;
    }

    *[Symbol.iterator](): Iterator<T> {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode.value;
            currentNode = currentNode.next!;
        }
    }
}