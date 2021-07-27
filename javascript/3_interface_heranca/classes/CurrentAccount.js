import { Branch } from './classes/Branch.js'
import { Client } from './classes/Client.js'

export class CurrentAccount {
    static currentAccountCounter = 0;

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
    constructor(id, branch, client) {
        this.currentAccountId = id;
        this._branch = branch;
        this._client = client;
        this._clientBalance = 0;
        CurrentAccount.currentAccountCounter += 1;
    }

    withdrawal (value) {
        if (this._clientBalance >= value) {
            this._clientBalance -= value;
            return this._clientBalance;
        }
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
