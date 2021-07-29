import { Account } from './Account.js'

export class SavingsAccount extends Account {
    static savingsAccountCounter = 0;

    constructor(id, branch, client) {
        super(id, branch, client, 0); // Calls the constructor from Account
        
        SavingsAccount.savingsAccountCounter += 1;
    }

    withdrawal (value) {
        let tax = 1.02;
        return this._withdrawal(value, tax);
    }
}
