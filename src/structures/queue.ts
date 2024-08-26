import { LinkedList } from "./linked-list";
import { Queue as QueueType } from "datastructures2";

export class Queue<T> implements QueueType<T> {
    private linkedList: LinkedList<T>;
    length: number;

    constructor() {
        this.linkedList = new LinkedList<T>(null as any); // Initialize with an empty LinkedList
        this.length = 0;
    }

    enqueue(value: T): void {
        if (this.isEmpty()) {
            this.linkedList = new LinkedList(value);
        }
        else {
            this.linkedList.append(value);
        }

        this.length++;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        this.length--;
        return this.linkedList.removeFirst();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.linkedList.head.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
