# Java Puzzles: Algorithmic Problem Solving

A core Java application engineered to tackle a collection of foundational algorithmic puzzles utilizing the `java.util.Random` utility class. This assignment shifts away from purely structural tracking into algorithmic logic—specifically managing random number ranges, array and string manipulations, combinatorial generation, and structural shuffling mechanics.

---

## 📋 Task Overview

The assignment tests problem-solving capabilities across 5 distinct milestones:

1. **Random Numeric Sequences**: Generating lists bounded precisely between a floor and ceiling value ($1 \text{ to } 20$, inclusive).
2. **Alphabet Mapping**: Navigating string/character arrays randomly via generated index mapping.
3. **Password Generation**: Building structured, multi-character alphanumeric sequences combinatorially.
4. **Dynamic Data Sets**: Creating dynamic data structures (`ArrayList`) populated with dynamically sized collections of strings.
5. **Array Randomization (Sensei Bonus)**: Implementing a pseudo-random swapping technique (in-place shuffle) to scramble linear data structures.

---

## 🏗️ Class Architecture & Structures

The solution isolates helper logic from execution through two decoupled classes.

### 1. `PuzzleJava` Class (Logic Engine)

Maintains a shared structural randomizer state instance (`Random rand`) and houses all individual problem-solving implementations.

* **Behavior / Methods**:
  * `getTenRolls()`: Produces an `ArrayList<Integer>` filled with exactly 10 pseudo-random numbers bounded between $1$ and $20$.
  * `getRandomLetter()`: Evaluates a 26-character sequence of the alphabet, picks a randomized target index from $0$ to $25$, and extracts that unique character.
  * `generatePassword()`: Programmatically accumulates characters by calling `getRandomLetter()` eight times iteratively to form an 8-character token.
  * `getNewPasswordSet(int length)`: Loops dynamically based on the passed parameter to return an `ArrayList<String>` consisting of unique, generated 8-character string keys.
  * `shuffleArray(int[] arr)`: Modifies an primitive integer array directly in memory (**in-place**). It steps through each index, picks a completely random target index, and executes a classic 3-step value swap utilizing a temporary cache variable.

### 2. `TestPuzzleJava` Class (Execution Harness)

The application launcher containing the static entry point (`main`) responsible for orchestrating verification sweeps.

* **Behavior / Methods**:
  * `main(String[] args)`: Instantiates the engine object, chains data returns directly into the stream, updates and alters primitive arrays in place, and logs formatted representations out to the host system terminal.

---

## ⚙️ Main Execution Workflow

When `TestPuzzleJava` is triggered, the runtime follows these precise operational steps:

1. **Instantiate Generator**: Allocates memory for a new `PuzzleJava` instance, priming its local randomizer tool.
2. **Roll Verification**: Invokes `getTenRolls()`, logging a dynamic collection array of 10 random values to test lower and upper numeric boundaries.
3. **Character Pull**: Requests a singular, randomly derived character from the standard lowercase English alphabet.
4. **Token Generation**: Triggers `generatePassword()`, outputting a single 8-character alphabetic word token.
5. **Batch Generation**: Requests a complex `ArrayList` structure populated with 3 uniquely separate random word tokens.
6. **In-Place Mutation**: Instantiates a static ordered sequence array (`{1, 2, 3, 4, 5}`), runs it through the pseudo-random scrambling function `shuffleArray()`, and loops through the scrambled results inline to output the fresh configuration.

---

## 📊 Sample Simulation Output

*Because this program relies fully on random number generation, outputs vary with every execution. Below is a representative runtime log:*

```text
[14, 2, 20, 1, 9, 11, 15, 7, 18, 3]
m
kpxwunvt
[zylgqbwe, njifasod, xruvtkwp]
4 1 5 2 3
