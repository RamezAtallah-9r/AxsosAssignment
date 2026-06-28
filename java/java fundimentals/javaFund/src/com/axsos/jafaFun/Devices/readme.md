# Device Battery Monitor

A simple Java application modeling an object-oriented tracking system for mobile devices. This project demonstrates core Object-Oriented Programming (OOP) concepts such as **Inheritance**, **Encapsulation**, and **Method Overriding** by simulating battery consumption on a mobile phone through everyday tasks.

---

## 📋 Task Overview

The assignment focuses on building a device asset monitoring system:

1. **Universal Baseline**: Establish a general mobile hardware profile that ensures any tracked item starts at full operational capacity (`100.0%`) and can report its power reserves natively.
2. **Specialized Power Demands**: Extend the basic hardware profile specifically into a mobile phone configuration. This configuration manages tasks like making phone calls, running high-performance mobile games, and connecting to an electrical charger. Each action affects the device's remaining power by a specific value.
3. **Behavior Validation**: Simulate a realistic sequence of actions (making three distinct calls, playing two gaming sessions, and plugging into a charger once) to verify that the math and state alterations match expectations.

---

## 🏗️ Class Architecture & Structures

The system uses class inheritance to separate general device components from phone-specific features.

### 1. `Device` Class (Base Hardware Model)

Acts as the baseline blueprint for any general piece of battery-powered electronic equipment.

* **State / Attributes**:
  * `battery` (`Double`): Tracks the current charge capacity as a floating-point percentage. It initializes to a default value of `100.00`.
* **Behavior / Methods**:
  * `displayBattery()`: Outputs the localized battery capacity directly to the terminal interface.

### 2. `Phone` Class (Subclass of `Device`)

Inherits the properties of `Device` and introduces specialized behavioral patterns that modify the inherited `battery` attribute.

* **State / Attributes**: Inherits the `battery` tracking context directly from the parent class.
* **Behavior / Methods**:
  * `makeACall()`: Simulates voice transmission. It decreases the battery life pool by `5.00` points per connection and logs the activity.
  * `playAGame()`: Simulates high-performance processing (e.g., PUBG Mobile). It drains the power levels by a significant `20.00` points per session.
  * `charging()`: Simulates an external power supply connection, replenishing the local energy reserves by adding `50.00` points.

---

## ⚙️ Main Execution Workflow (`TestDevices`)

The execution routine inside the `TestDevices` main application class runs through the following simulation steps:

1. **Instantiation**: Creates a new instance of the `Phone` subclass (representing an iPhone profile), which implicitly establishes its initial parent state with a full `100.0%` charge.
2. **Call Sequence**: Triggers `makeACall()` three successive times, verifying consistent power consumption ($100.0 \rightarrow 95.0 \rightarrow 90.0 \rightarrow 85.0$).
3. **Gaming Sequence**: Launches `playAGame()` twice back-to-back, adding a heavy load to the battery reserves ($85.0 \rightarrow 65.0 \rightarrow 45.0$).
4. **Restoration**: Connects the phone to a charger via `charging()`, allowing the system to recover lost capacity ($45.0 \rightarrow 95.0$).
5. **Final Diagnostics**: Invokes the inherited parent method `displayBattery()` to print out the final state of the phone's battery reserves at the end of the simulation timeline.

---

## 📊 Expected Simulation Output

Running the test harness prints the following log to the standard console output:

```text
--------------------

Making a call now
Remaining Battery is:95.0

Making a call now
Remaining Battery is:90.0

Making a call now
Remaining Battery is:85.0

--------------------

Playing Pubg Mobile now
Remaining Battery is:65.0

Playing Pubg Mobile now
Remaining Battery is:45.0

--------------------

Charging your Phone now
Current Battery is:95.0

--------------------

Remaining Battery is: 95.0
