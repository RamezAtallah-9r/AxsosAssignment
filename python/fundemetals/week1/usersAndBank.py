class Users:
    def __init__(self, name, email, age, phone_number, balance):
        self.name = name
        self.email = email
        self.age = age
        self.phone_number = phone_number
        self.__balance = balance
        self.accounts = []

    @property
    def balance(self):
        return self.__balance

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.balance}")

    def deposit(self, amount):
        self.__balance += amount
        print(f"deposit {amount} your balance is {self.__balance}")
        return self

    def make_withdraw(self, account, amount):
        if account in self.accounts:
            account.withdraw(amount)
            print(f"Withdraw {amount} from account {account.account_type}")
        else:
            print("Account not found")
        return self

    def transfer_money(self, sender_account, receiver_account, amount):
        if sender_account in self.accounts and receiver_account in self.accounts:
            sender_account.withdraw(amount)
            receiver_account.deposit(amount)
            print(
                f"Transfer {amount} from account {sender_account.account_type} "
                f"to account {receiver_account.account_type}"
            )
        else:
            print("Account not found")
        return self

    def add_account(self, account):
        self.accounts.append(account)


class BankAccount:
    def __init__(self, int_rate=0.0, balance=0.0, account_type="checking"):
        self.int_rate = int_rate
        self.balance = balance
        self.account_type = account_type

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

