//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.balance=0;
    this.isAccountOpen = true;
  }

  open() {
    let bankAccount = new BankAccount();
    return bankAccount;
  }

  close() {
    this.isAccountOpen = false;
  }

  deposit(value) {
    if (this.isAccountOpen = true)
      this.balance += value;
    else
      throw new ValueError();
  }

  withdraw(value) {
    this.balance -= value;
  }

  get _balance() {
    if (this.isAccountOpen = true)
      return this.balannce;
    else
      throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    value: Error
  }
}
