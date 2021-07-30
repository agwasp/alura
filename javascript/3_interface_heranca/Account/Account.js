import { Branch } from '../Branch.js'
import { Client } from '../Client.js'

// Abstract class
// You can't use it to create objects, only extending the functions to another class
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
        if (this.constructor == Account) {
            throw new Error ("You shouldn't instantiate objects of Account type directly. This is an abstract class, choose 'CurrentAccount' or 'SavingsAccount' instead.");
        }
        
        this.accountId = id;
        this._branch = branch;
        this._client = client;
        this._clientBalance = clientBalance;
    }

    // Abstract method
    withdrawal (value) {
        throw new Error ("The method withdrawal is abstract. Implement your withdrawal method individually in your inherited class.");
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
