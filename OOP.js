// Problem Statement:
// Create a BankAccount class where the account balance is private and cannot be accessed or modified directly from outside the class. Provide methods to deposit money, withdraw money, and check the current balance. Make sure the balance cannot go negative.

class BankAccount {
  #balance;
  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Balance Can't be a Negative Number!");
    }
    return (this.#balance = initialBalance);
  }
  deposite(amount) {
    if (amount < 0) {
      throw new Error("Deposite Amount must be A Positive Number!");
    }
    this.#balance += amount;
    console.log(`Deposite ${amount} new Balance is ${this.#balance}`);
  }
  withdraw(amount){
    if(amount > this.#balance){
      console.log("Insufficent Balance");
      return
    }
    this.#balance -= amount
     console.log(`Withdraw ${amount} new Balance is ${this.#balance}`);
  }
  showBalance() {
    return this.#balance;
  }
}

let myAccount = new BankAccount(1000);
myAccount.deposite(500)
myAccount.withdraw(1400)

