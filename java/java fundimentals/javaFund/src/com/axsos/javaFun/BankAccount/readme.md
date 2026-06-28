# Bank Account Simulation System

A core Java banking system that models real-world transactional management. The project effectively implements fundamental Object-Oriented programming standards, placing specific focus on strict data privacy via **Encapsulation** and global tracking using **Static Members and Class-Level Attributes**.

---

## 📋 Task Overview

The assignment establishes a secure, automated banking ledger system following these primary specifications:

1. **Strict Data Encapsulation**: Restricting direct access to accounts so that balance modifications can only occur through controlled public routines (`deposit` and `withdraw`), eliminating external tampering.
2. **Global Ledger Integrity**: Tracking general financial analytics (total funds managed and total active accounts) globally across all concurrent account sessions using memory-efficient static parameters.
3. **Automated Identity Generation (Ninja Bonuses)**: Incorporating a hidden utility routine to generate a unique, randomized 10-digit string identification number upon instantiation of any new account holder profile.

---

## 🏗️ Class Architecture & Structures

The application splits its state tracking rules and logic processing into two targeted, decoupled classes.

### 1. `BankAccount` Class (Financial Ledger Engine)

Maintains private instance variable contexts for client accounts alongside static monitors for institutional data metrics.

* **State / Attributes**:
  
  * `checkingBalance` (`private double`): Balances allocated to everyday transaction processing.
  * `savingsBalance` (`private double`): Protected long-term savings asset values.
  * `accountNumber` (`private String`): Auto-assigned 10-digit unique sequence key.
  * `accounts` (`private static int`): An institutional tally tracker that scales up globally when any new account is created.
  * `totalMoney` (`private static double`): The vault matrix summing the combined values of all checking and savings variables across every user.

* **Behavior / Methods**:
  
  * `generateAccountNumber()` (`private`): Internal routine utilizing a pseudo-random seed generator loop to concatenate ten individual digit selections into a target string profile.
  * `deposit(double amount, String accountType)`: Updates matching checking/savings values if inputs are valid, adjusting global tracking metrics by an equivalent magnitude.
  * `withdraw(double amount, String accountType)`: Evaluates transactional boundary safety (protects against overdrawing account profiles or entering negative values), modifying corresponding account types upon confirmation.
  * `getBalance()`: Computes and returns the aggregate checking and savings value for the single targeted entity.
  * `displayBalance()`: Formats a terminal balance sheet visualizing individual identifying keys and localized account metrics.

### 2. `BankTest` Class (Execution Harness)

The central simulation launcher containing the mandatory `main` static workflow used to test system reliability under varying usage constraints.

---

## ⚙️ Main Execution Workflow

When `BankTest` launches, the application process moves sequentially through these automated stages:

1. **System Initialization**: Allocates and registers three distinctly separate banking accounts (`account1`, `account2`, `account3`). This updates the shared institutional account counter from `0` to `3`.
2. **Deposit Profiling Sweep**: Simulates diverse capital injections across both checking and savings asset classes for all three customers, actively updating instance balances and increasing the global cash vault pool.
3. **Intermediary Account Audits**: Prints individual data parameters to ensure isolation between individual profiles.
4. **Stress-Testing Withdrawals**: Executes valid financial pulls against `account1` and `account2`, and attempts a major overdraft against `account3` to verify that safety guardrails catch insufficient funding issues.
5. **Final Institutional Settlement**: Prints final client statements and draws directly from the base class static properties to prove that the global tracking logs accurately reflect all financial activities.

---

## 📊 Expected Simulation Output

Executing the program prints the following event log to the console:

```text
$500.0 deposited into checking
$300.0 deposited into savings
$1000.0 deposited into checking
$700.0 deposited into savings
$200.0 deposited into checking
$400.0 deposited into savings

Account Number: 5821304951
Checking: $500.0
Savings: $300.0
Total: $800.0

-----------------------

Account Number: 1940385724
Checking: $1000.0
Savings: $700.0
Total: $1700.0

-----------------------

Account Number: 8472910536
Checking: $200.0
Savings: $400.0
Total: $600.0

-----------------------

$100.0 withdrawn from checking
$200.0 withdrawn from savings
Insufficient funds.

Account Number: 5821304951
Checking: $400.0
Savings: $300.0
Total: $700.0

-----------------------

Account Number: 1940385724
Checking: $1000.0
Savings: $500.0
Total: $1500.0

-----------------------

Account Number: 8472910536
Checking: $200.0
Savings: $400.0
Total: $600.0

-----------------------

Total Accounts: 3
Total Money: $2800.0
