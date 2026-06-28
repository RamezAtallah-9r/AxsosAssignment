package com.axsos.javaFun.BankAccount;

import java.util.Random;

public class BankAccount {

	// MEMBER VARIABLES
	private double checkingBalance;
	private double savingsBalance;
	private String accountNumber;

	private static int accounts = 0;
	private static double totalMoney = 0;

	// CONSTRUCTOR
	public BankAccount() {
		this.checkingBalance = 0;
		this.savingsBalance = 0;
		this.accountNumber = generateAccountNumber();

		accounts++;
	}

	// PRIVATE METHOD
	private String generateAccountNumber() {
		Random random = new Random();

		String number = "";

		for (int i = 0; i < 10; i++) {
			number += random.nextInt(10);
		}

		return number;
	}

	// GETTERS
	public double getCheckingBalance() {
		return checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public static int getAccounts() {
		return accounts;
	}

	public static double getTotalMoney() {
		return totalMoney;
	}

	// DEPOSIT
	public void deposit(double amount, String accountType) {

		if (amount <= 0) {
			System.out.println("Invalid deposit amount.");
			return;
		}

		if (accountType.equalsIgnoreCase("checking")) {
			checkingBalance += amount;
		} else if (accountType.equalsIgnoreCase("savings")) {
			savingsBalance += amount;
		} else {
			System.out.println("Invalid account type.");
			return;
		}

		totalMoney += amount;

		System.out.println("$" + amount + " deposited into " + accountType);
	}

	// WITHDRAW
	public void withdraw(double amount, String accountType) {

		if (amount <= 0) {
			System.out.println("Invalid withdrawal amount.");
			return;
		}

		if (accountType.equalsIgnoreCase("checking")) {

			if (checkingBalance >= amount) {
				checkingBalance -= amount;
				totalMoney -= amount;

				System.out.println("$" + amount + " withdrawn from checking");

			} else {
				System.out.println("Insufficient funds.");
			}

		} else if (accountType.equalsIgnoreCase("savings")) {

			if (savingsBalance >= amount) {
				savingsBalance -= amount;
				totalMoney -= amount;

				System.out.println("$" + amount + " withdrawn from savings");

			} else {
				System.out.println("Insufficient funds.");
			}

		} else {
			System.out.println("Invalid account type.");
		}
	}

	// TOTAL BALANCE
	public double getBalance() {
		return checkingBalance + savingsBalance;
	}

	public void displayBalance() {
		System.out.println("Account Number: " + accountNumber);
		System.out.println("Checking: $" + checkingBalance);
		System.out.println("Savings: $" + savingsBalance);
		System.out.println("Total: $" + getBalance());
		System.out.println("-----------------------");
	}

}
