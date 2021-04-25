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

    contains(value) {
        var runner = this.head;
        while (runner != null) {
            if (runner.val == value) {
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    length() {
        var count = 0;
        var runner = this.head;
        while (runner = ! null) {
            count++;
            runner = runner.next
        }
        return count;
    }

    display() {
        var str = "";
        var runner = this.head
        while (runner = ! null) {
            str += runner.val + ", "
            runner = runner.next
        }
        return str
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


    maxMinAvg() {
        var sum = 0;
        var max = this.head.value;
        var min = this.head.value;
        var runner = this.head;
        while (runner) {
            sum += runner.value;
            if (runner.value > max) {
                max = runner.value;
            }
            else if (runner.value < min) {
                min = runner.value;
            }
            runner = runner.next
        }
        return `max: ${max}, min: ${min}, avg: ${sum / this.length()}`
    }




}

sll1 = new SLL();
node1 = new Node(13);

sll1.head = node1;
node2 = new Node(10);
node1.next = node2;

// var runner = this.head
// while (runner = ! null) {
//     runner = runner.next
// }
