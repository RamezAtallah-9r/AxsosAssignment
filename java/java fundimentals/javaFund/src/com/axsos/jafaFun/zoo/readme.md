# Zoo Keeper: Mammal Energy Tracker

A Java-based tracking application designed to help a zookeeper monitor the energy dynamics of different mammals in the zoo. This project leverages fundamental Object-Oriented Programming (OOP) principles, specifically **Inheritance**, **Encapsulation**, and **Polymorphism**, to model varied animal behaviors and their distinct impacts on energy reserves.

---

## 📋 Project Description

The application creates a base tracking system for all mammals and extends it into two specialized creature behaviors:

1. **`Mammal` Class (Base)**: Houses a core `energy` property (defaulting to `100`) and a `displayEnergy()` method that outputs and returns the current level.
2. **`Gorilla` Class (Subclass)**: Inherits from `Mammal`. Simulates typical gorilla actions like throwing rocks, eating bananas, and climbing trees, each impacting energy levels differently.
3. **`Bat` Class (Subclass)**: Inherits from `Mammal` but overrides the default base energy to a massive `300`. Simulates highly demanding and aggressive actions such as flying, eating humans, and attacking whole towns.

---

## 📂 Project Structure

```text
src/
└── com/
    └── axsos/
        └── jafaFun/
            └── zoo/
                ├── Mammal.java
                ├── Gorilla.java
                ├── Bat.java
                └── TestMammal.java



## Expected Console Output

Plaintext

```
current Energy is:100
----------Max the Gorilla----------
current Energy is:100

Throwing A Rock Now
Current Energy is: 95
Throwing A Rock Now
Current Energy is: 90
Throwing A Rock Now
Current Energy is: 85

Eating Tasty Bannana, Gorilla Happy ^_^
Current Energy is: 95
Eating Tasty Bannana, Gorilla Happy ^_^
Current Energy is: 105

Gorilla is Climbing a Tree, Gorilla Happy ^_^
Current Energy is: 95
----------Bruce the Bat----------
current Energy is:300

Bat is Flying 
Current Energy is: 250
Bat is Flying 
Current Energy is: 200

Bat is Atacking the Town, Bat is Angrie -_-
Current Energy is: 100
Eating Tasty Humans, Bat is Happy ^_^
Current Energy is: 125

Bat is Atacking the Town, Bat is Angrie -_-
Current Energy is: 25
Eating Tasty Humans, Bat is Happy ^_^
Current Energy is: 50

Bat is Atacking the Town, Bat is Angrie -_-
Current Energy is: -50
Eating Tasty Humans, Bat is Happy ^_^
Current Energy is: -25
```
