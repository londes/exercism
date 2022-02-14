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
    if (!this.balance){
      this.balance = 0;
      return this;
    }
    else {
      if (this.isAccountOpen == false)
        this.isAccountOpen=true;
      else
        throw new ValueError();
    }
  }

  close() {
    if (this.isAccountOpen === true) {
      this.balance=0;
      this.isAccountOpen = false;
    }
    else
      throw new ValueError();
  }

  deposit(value) {
    if (this.isAccountOpen == true && value >= 0)
      this.balance += value;
    else
      throw new ValueError();
  }

  withdraw(value) {
    if (this.isAccountOpen == true && value <= this.balance && value >= 0)
      this.balance -= value;
    else
      throw new ValueError();
  }

  get _balance() {
    if (this.isAccountOpen == true)
      return this.balance;
    else
      throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super();
    value: Error
  }
}
