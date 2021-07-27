import { Branch } from "./Branch.js";
import { Client } from "./Client.js";

export class Account {
    // PUBLIC
    static accountCounter = 0;
    accountId;

    // Convenção da comunidade é "_clientBalance" para deixar claro que é privado, embora não seja realmente
    // "#" é a feature para tornar uma variável privada https://github.com/tc39/proposal-class-fields#private-fields
    // PRIVATE
    _branch;
    get branch() {
        return this._branch;
    }
    set branch(value) {
        if (value instanceof Branch) {
            this._branch = value;
        }
    }

    _client;
    get client() {
        return this._client;
    }
    set client(value) {
        if (value instanceof Client) {
            this._client = value;
        }
    }

    _clientBalance = 0;
    get balance() {
        return this._clientBalance;
    }

    constructor(id, branch, client) {
        this.accountId = id;
        this._branch = branch;
        this._client = client;
        Account.accountCounter += 1;
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
