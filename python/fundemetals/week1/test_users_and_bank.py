from usersAndBank import Users, BankAccount


def main():
    # Create users
    ramez = Users("Ramez", "Ramez@gmail.com", 25, 123456789, 0)
    chaker = Users("Chaker", "Chaker@gmail.com", 29, 123456799, 0)

    # Create accounts
    acc_ramez_checking = BankAccount(int_rate=0.01, balance=500, account_type="checking")
    acc_ramez_savings = BankAccount(int_rate=0.05, balance=1000, account_type="savings")

    acc_chaker_checking = BankAccount(int_rate=0.02, balance=200, account_type="checking")

    # Add accounts to users
    ramez.add_account(acc_ramez_checking)
    ramez.add_account(acc_ramez_savings)
    chaker.add_account(acc_chaker_checking)

    # Display initial balances
    ramez.display_user_balance()
    chaker.display_user_balance()

    # Deposit via bank account
    acc_ramez_checking.deposit(250)
    acc_ramez_checking.display_account_info()

    # Withdraw via bank account
    acc_ramez_checking.withdraw(100)
    acc_ramez_checking.display_account_info()

    # User-level deposit (updates user's internal balance)
    ramez.deposit(1000).deposit(500)
    ramez.display_user_balance()

    # Withdraw from a specific account via user
    ramez.make_withdraw(acc_ramez_checking, 50)
    acc_ramez_checking.display_account_info()

    # Transfer between accounts (within the same user object list check)
    ramez.add_account(acc_chaker_checking)  # allow transfer_money to find both accounts
    ramez.transfer_money(acc_ramez_checking, acc_chaker_checking, 120)
    acc_ramez_checking.display_account_info()
    acc_chaker_checking.display_account_info()

    # Yield interest
    acc_ramez_savings.yield_interest()
    acc_ramez_savings.display_account_info()


if __name__ == "__main__":
    main()

