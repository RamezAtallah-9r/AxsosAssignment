class BankAccount:
    def __init__(self, int_rate=0.0, balance=0.0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"deposit {amount} your balance is {self.balance}")

    def withdraw(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        print(f"withdraw {amount} your balance is {self.balance}")

    def display_account_info(self):
        print(f"Balance: ${self.balance}")

    def yield_interest(self):
        self.balance *= (1 + self.int_rate)


account1 = BankAccount()
account2 = BankAccount(int_rate=0.05, balance=1000)

account1.deposit(500)
account1.deposit(1000)
account1.deposit(2000)
account1.withdraw(1000)
account1.yield_interest()
account1.display_account_info()


account2.deposit(500)
account2.deposit(1000)
account2.withdraw(2000)
account2.withdraw(3000)
account2.withdraw(4000)
account2.yield_interest()
account2.display_account_info()