import { Account } from './Account.js'
export class CurrentAccount extends Account {
    static currentAccountCounter = 0;

    constructor(id, branch, client) {
        super(id, branch, client, 0); // Calls the constructor from Account

        CurrentAccount.currentAccountCounter += 1;
    }

    withdrawal (value) {
        let tax = 1.05;
        return this._withdrawal(value, tax);
    }
}
