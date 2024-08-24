import { LinkedList } from "./linked-list";
import { Stack as StackType } from "datastructures";

export class Stack<T> implements StackType<T> {
    private linkedList: LinkedList<T>;

    constructor() {
        this.linkedList = new LinkedList<T>(null as any); // Initialize with an empty LinkedList
    }

    push(value: T): void {
        this.linkedList.prepend(value);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.linkedList.removeFirst();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.linkedList.head.value;
    }

    isEmpty(): boolean {
        return this.linkedList.length === 0;
    }
}
