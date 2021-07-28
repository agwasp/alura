import { Branch } from './Branch.js'
import { Client } from './Client.js'

export class Account {
    get branch() {
        return this._branch;
    }
    set branch(value) {
        if (value instanceof Branch) {
            this._branch = value;
        }
    }
    
    get client() {
        return this._client;
    }
    set client(value) {
        if (value instanceof Client) {
            this._client = value;
        }
    }
    
    get balance() {
        return this._clientBalance;
    }

    // variables should be declared and initiated inside the constructor
    constructor(id, branch, client, clientBalance) {
        this.accountId = id;
        this._branch = branch;
        this._client = client;
        this._clientBalance = clientBalance;
    }

    withdrawal (value) {
        let tax = 1;
        return this._withdrawal(value, tax);
    }

    _withdrawal (value, tax) {
        const withdrawnValue = value * tax;
        if (this._clientBalance >= withdrawnValue) {
            this._clientBalance -= withdrawnValue;
            return this._clientBalance;
        }

        return 0;
    }

    deposit (value) {
        if (value > 0) {
            this._clientBalance += value;
            return this._clientBalance;
        }
    }

    transfer (value, account) {
        this.withdrawal(value);
        account.deposit(value);
    }
}
