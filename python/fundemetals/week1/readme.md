### 🐍 Python Learning Journey: The Basics



Welcome to the beginner's guide to Python! This repository contains the fundamental concepts you need to get started with Python programming. Whether you are a complete beginner or looking for a quick refresher, this guide covers the core building blocks.



#### 1\. Learn to Print

In Python, the print() function is used to output text or data to the console. It is often the first function learners explore when starting a new programming language.



###### How it works

The print() function takes an argument inside the parentheses and displays it.

For Loop Basic I

###### Python

\# Printing a simple string

print("Hello, World!")



\# Printing variables and numbers

age = 25

print("My age is:", age)



#### 2\. Learning for and while Loops



Loops are used in programming to repeat a block of code. Python has two primary types of loops: the for loop and the while loop.



The for Loop

The for loop is used for iterating over a sequence (like a list, tuple, dictionary, set, or string).



Python

\# Iterating through a list of fruits

A- fruits = \["apple", "banana", "cherry"]

for fruit in fruits:

&#x20;   print(fruit)



B- fruits = \["apple", "banana", "cherry"]

for i in range (0, len(fruits), 1):

&#x20;   print(fruits\[i])





The while Loop

The while loop is used to execute a set of statements as long as a condition remains true.

Python

\# Counting from 1 to 5

count = 1

while count <= 5:

&#x20;   print(count)

&#x20;   count += 1

#### 3\. Basics in Functions

A function is a block of reusable code that only runs when it is called. You use the def keyword to define a function in Python.



Defining and Calling a Function

Functions can take arguments (inputs) and return values (outputs).



Python

\# Defining a function

def greet\_user(name):

&#x20;   print(f"Hello, {name}! Welcome to Python programming.")



\# Calling the function

greet\_user("Alex")

Returning Values

Functions can also return data back to the caller using the return statement.



Python

def add\_numbers(a, b):

&#x20;   return a + b



result = add\_numbers(5, 7)

print(f"The sum is: {result}")

