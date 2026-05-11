class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
    
    def addNode(self,data):
        newNode=Node(data)  
        if self.head==None:
            self.head=newNode
        else:
            current=self.head
            while current.next!=None:
                current=current.next
            current.next=newNode
            
arr=[1,2,3,4,5]
chaker=LinkedList()
for i in arr:
    chaker.addNode(i)
current=chaker.head
while current!=None:
    print(current.data)
    current=current.next