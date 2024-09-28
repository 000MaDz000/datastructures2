
import { BinaryTree } from './structures/binary-tree';
import { LinkedList } from './structures/linked-list';
import { Stack } from './structures/stack';
import { Queue } from "./structures/queue";
import { Graph } from "./structures/graph";
const list = new LinkedList<null | number>(null);
list.append(2);
list.append(3);
list.append(4);
console.log(list, list.length);
const stack = new Stack()
export { BinaryTree, LinkedList, Stack, Queue, Graph }