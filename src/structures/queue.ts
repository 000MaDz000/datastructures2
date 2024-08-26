import { LinkedList } from "./linked-list";
import { Queue as QueueType } from "datastructures2";

export class Queue<T> implements QueueType<T> {
    private linkedList: LinkedList<T>;

    constructor() {
        this.linkedList = new LinkedList<T>(null as any); // Initialize with an empty LinkedList
    }

    enqueue(value: T): void {
        if (this.isEmpty()) {
            this.linkedList = new LinkedList(value);
            return;
        }

        this.linkedList.append(value);
    }

    dequeue(): T | undefined {
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
