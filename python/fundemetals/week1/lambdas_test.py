#-------------- 1 ------------------------
students = [("Alice", 22), ("Bob", 19), ("Charlie", 21)]
students.sort(key=lambda student: student[1])
print(students)
students.sort(key=lambda student: student[0])
print(students)

#-------------- 2 ------------------------
data = [{"name": "item1", "price": 50}, {"name": "item2", "price": 20}, {"name": "item3", "price": 30}, {"name": "item4", "price": 40}]
data.sort( key=lambda x: x['price'])
print(data)
data.sort( key=lambda x: x['name'])
print(data)

#-------------- 3 ------------------------
names = ["Alexander", "Bo", "Catherine", "Ty", "Zoe", "John"]
names.sort(key=lambda name: len(name))
print(names) 
names.sort(key=lambda name: name[0], reverse=True)
print(names) 

#-------------- 4 ------------------------
fruits = ["strawberry", "apple", "banana", "peach", "cherry", "kiwi", "mango"]
fruits.sort(key=lambda x: (len(x), x[-1]))
print(fruits)


