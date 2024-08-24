import { Graph as GraphType } from "datastructures2";

export class Graph<T> implements GraphType<T> {
    private adjacencyList: Map<T, Set<T>>;

    constructor() {
        this.adjacencyList = new Map<T, Set<T>>();
    }

    addNode(value: T): void {
        if (!this.adjacencyList.has(value)) {
            this.adjacencyList.set(value, new Set<T>());
        }
    }

    addEdge(from: T, to: T): void {
        if (!this.adjacencyList.has(from)) {
            this.addNode(from);
        }
        if (!this.adjacencyList.has(to)) {
            this.addNode(to);
        }
        this.adjacencyList.get(from)!.add(to);
        this.adjacencyList.get(to)!.add(from);
    }

    removeNode(value: T): void {
        if (!this.adjacencyList.has(value)) return;

        for (const neighbor of this.adjacencyList.get(value)!) {
            this.adjacencyList.get(neighbor)!.delete(value);
        }

        this.adjacencyList.delete(value);
    }

    removeEdge(from: T, to: T): void {
        if (!this.adjacencyList.has(from) || !this.adjacencyList.has(to)) return;

        this.adjacencyList.get(from)!.delete(to);
        this.adjacencyList.get(to)!.delete(from);
    }

    hasNode(value: T): boolean {
        return this.adjacencyList.has(value);
    }

    hasEdge(from: T, to: T): boolean {
        return this.adjacencyList.has(from) && this.adjacencyList.get(from)!.has(to);
    }

    getNeighbors(value: T): T[] {
        return Array.from(this.adjacencyList.get(value) || []);
    }
}
