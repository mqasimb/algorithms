var LinkedList = function() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.insert = function(index, value) {
    if (index < 0 || index > this.length) {
        throw new Error('Index error');
    }

    var newNode = {
        value: value
    };

    if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
    }
    else {
        // Find the node which we want to insert after
        var node = this._find(index - 1);
        newNode.next = node.next;
        node.next = newNode;
    }

    this.length++;
};

LinkedList.prototype._find = function(index) {
    var node = this.head;
    for (var i=0; i<index; i++) {
        node = node.next;
    }
    return node;
};

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    return this._find(index).value;
};

LinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (index == 0) {
        this.head = this.head.next;
    }
    else {
        // Find the node before the one we want to remove
        var node = this._find(index - 1);
        node.next = node.next.next;
    }

    this.length--;
};

LinkedList.prototype.findMiddleElement = function() {
    var fast = this.head, slow = this.head;
    var count = 0;
    while(fast) {
        fast = fast.next;
        if((count%2) && count!=0) {
            slow = slow.next;
        }
        count++;
    }
    return slow;
}

LinkedList.prototype.findThirdToLastElement = function() {
    var fast = this.head, slow = this.head;
    var count = 0;
    while(fast) {
        fast = fast.next;
        if(count>=3) {
            slow = slow.next;
        }
        count++;
    }
    return slow;
}

LinkedList.prototype.reverseLinkedList = function() {
    var previousNode = null;
    var currentNode = this.head;
    var nextNode = currentNode.next;
    while(nextNode) {
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
        nextNode = nextNode.next;
    }
    currentNode.next = previousNode;
    this.head = currentNode;
    return this.head;
}

LinkedList.prototype.findCycle = function() {
    var fast = this.head, slow = this.head;
    var count = 0;
    while(fast) {
        fast = fast.next;
        if(count>=3) {
            slow = slow.next;
        }
        count++;
        if(fast === slow) {
            return true;
        }
    }
    return false;
}

var newList = new LinkedList();
newList.insert(0,1);
newList.insert(1,2);
newList.insert(2,3);
newList.insert(3,4);
newList.insert(4,5);
newList.insert(5,6);
newList.insert(6,7);


console.log(newList.head);
console.log(newList.head.next);
console.log(newList.head.next.next);
console.log(newList.head.next.next.next);
console.log(newList.findMiddleElement());
console.log(newList.findThirdToLastElement());
console.log(newList.reverseLinkedList());
console.log(newList.head.next);
console.log(newList.findCycle());
newList.head.next.next.next.next.next = newList.head.next.next;
console.log(newList.findCycle());