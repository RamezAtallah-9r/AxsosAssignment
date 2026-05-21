class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
         
    def enqueue(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.size += 1
    def dequeue(self):
        if self.head is None:
            return None
        else:
            data = self.head.data
            self.head = self.head.next
            return data
        self.size -= 1
    def is_empty(self):
        return self.head is None
    
    def peek(self):
        if self.head is None:
            return None
        else:
            return self.head.data
        
    def clear(self):
        self.head = None
        self.tail = None
        self.size = 0
        
    def display(self):
        current = self.head
        while current is not None:
            print(current.data, end=" -> ")
            current = current.next
        print()
    

que=Queue()
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.display()
print(que.dequeue())
print(que.peek())
print(que.size)
que.clear()
print(que.is_empty())
que.display()