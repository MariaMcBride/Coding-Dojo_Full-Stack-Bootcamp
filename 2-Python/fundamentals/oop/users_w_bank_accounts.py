class BankAccount:
    # all_accounts = []
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        # BankAccount.all_accounts.append(self)
        
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance - amount >= 0:
            self.balance -= amount
        else:
            print(f"Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        return f"{self.balance}"

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self
    
    # @classmethod
    # def print_all_accounts_info(cls):
    #     for account in cls.all_accounts:
    #         account.display_account_info()

class User:
    def __init__(self, name):
        self.name = name
        self.account = {
            "checking" : BankAccount(int_rate = 0.02, balance = 732),
            "savings" : BankAccount(int_rate = 0.05, balance = 66000)
        }

    # def make_deposit(self):	
    #     self.account.deposit()
    #     print(self.account.balance)

    # def make_withdrawal(self):
    #     self.account.withdraw()
    #     print(self.account.balance)

    def display_user_balance(self):
        print(f"User: {self.name}, Checking Balance: {self.account['checking'].display_account_info()}")
        print(f"User: {self.name}, Savings Balance: {self.account['savings'].display_account_info()}")

p_butler = User("Peppermint Butler")
p_butler.account['savings'].deposit(666)
p_butler.account['checking'].withdraw(66)
p_butler.display_user_balance()

# BankAccount.print_all_accounts_info()