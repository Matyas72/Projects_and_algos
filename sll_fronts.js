class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new Node(Value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }

    front() {
        if (this.head == null) {
            return null;
        }
        return this.head.val
    }

    removeFront() {
        if (this.head == null) {
            return null;
        }
        this.head = this.head.next
        return this.head
    }





}

sll1 = new SLL();
node1 = new Node(13);

sll1.head = node1;
node2 = new Node(10);
node1.next = node2;