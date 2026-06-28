# Lists of Exceptions & Type Casting

A foundational Java application designed to study the relationships between raw object collections, explicit type casting, and runtime error resilience. This assignment demonstrates the crucial role of **Exception Handling** when working with non-generic structures (`ArrayList<Object>`), proving how defensive coding prevents a program from crashing due to unexpected type conflicts.

---

## 📋 Task Overview

The assignment explores data safety and runtime stability across three milestones:

1. **Heterogeneous Collections**: Construct an `ArrayList` using the universal base type `Object` to hold mixed data types (Strings and primitive-wrapper Integers) within a single array structure.
2. **Explicit Downcasting**: Iterate through the collection and force-cast each generic item into a specific `Integer` type.
3. **Fault Tolerance (Try/Catch)**: Implement error guardrails. Instead of allowing a fatal `ClassCastException` to crash the system when encountering a String, catch the error dynamically, log diagnostics, and allow the execution loop to continue smoothly.

---

## 🏗️ Class Architecture & Structures

This project is a self-contained demonstration built within a single class file to isolate the execution loop from external design factors.

### `ListsofExceptions` Class (Harness & Execution)

Acts as both the collection builder and the runtime evaluation tool.

* **State / Collection Structure**:
  * `myList` (`ArrayList<Object>`): An inherently risky collection strategy bypassing type safety by using Java's root `Object` class as its generic parameter. This enables it to store both `"13"` (String) and `48` (Integer) simultaneously.
* **Behavior / Operations**:
  * `main(String[] args)`: Populates the list, loops through every index, and runs casting logic enclosed within a standard `try-catch` safety block.

---

## ⚙️ Main Execution Workflow

When the application runs, the execution sequence occurs as follows:

1. **Collection Seeding**: An `ArrayList` is generated and filled with elements: two numerical strings, an authentic integer, and a traditional text string.
2. **Iterative Try Blocks**: The program initiates a standard `for` loop. For each element:
   
   * It attempts to execute: `Integer value = (Integer) myList.get(i);`.
   
   * **If successful (Index 2)**: It prints out the index and the valid converted integer value.
   
   * **If a mismatch occurs (Indices 0, 1, 3)**: The JVM halts the attempt and instantly passes the runtime `ClassCastException` to the `catch` block.
3. **Error Logging & Continuations**: The `catch` block intercepts the exception object. It logs the specific problematic array index, extracts the offending value, prints out the official Java Exception signature, and cleanses the terminal view with a separation bar. The loop then advances safely to the next index without terminating the application.

---

## 📊 Expected Simulation Output

Executing the program prints the following event log to the console, demonstrating full recovery from multiple runtime errors:

```text
Error at index 0
Value: 13
Error: java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer

-------------------

Error at index 1
Value: hello world
Error: java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer

-------------------

Index 2 = 48
Error at index 3
Value: Goodbye World
Error: java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer

-------------------
