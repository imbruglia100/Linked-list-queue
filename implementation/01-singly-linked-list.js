// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val)

        if(this.head){
            newNode.next = this.head
        }

        this.head = newNode
        this.length++

        return this
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this;
        }else{
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;

        }

        this.length++
        return this;

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    removeFromHead() {
        // Remove node at head

        if(this.head){
            this.length--
            let oldHead = this.head
            this.head = this.head.next
            return oldHead
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head)return

        let curr = this.head

        while(curr.next){

            let temp = curr.next

            if(!temp.next){
                curr.next = null
                this.length--
                return temp
            }

            curr = curr.next
        }

        this.length--
        this.head = null


        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    peekAtHead() {
        // Return the value of head node
        return this.head ? this.head.value : undefined;
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    print() {
        // Print out the linked list
        let curr = this.head
        if(!curr) return

        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
