package com.axsos.javaFun.BankAccount;

public class BankTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Create accounts
		BankAccount account1 = new BankAccount();
		BankAccount account2 = new BankAccount();
		BankAccount account3 = new BankAccount();

		// Deposit Test
		account1.deposit(500, "checking");
		account1.deposit(300, "savings");

		account2.deposit(1000, "checking");
		account2.deposit(700, "savings");

		account3.deposit(200, "checking");
		account3.deposit(400, "savings");

		System.out.println();

		account1.displayBalance();
		account2.displayBalance();
		account3.displayBalance();

		// Withdrawal Test
		account1.withdraw(100, "checking");

		account2.withdraw(200, "savings");

		account3.withdraw(1000, "checking");

		System.out.println();

		account1.displayBalance();
		account2.displayBalance();
		account3.displayBalance();

		// Static Test
		System.out.println("Total Accounts: " + BankAccount.getAccounts());

		System.out.println("Total Money: $" + BankAccount.getTotalMoney());
	}

}
