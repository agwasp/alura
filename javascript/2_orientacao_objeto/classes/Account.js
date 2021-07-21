export class Account {
    // PUBLIC
    accountId;
    client;

    // Convenção da comunidade é "_clientBalance" para deixar claro que é privado, embora não seja realmente
    // "#" é a feature para tornar uma variável privada
    // PRIVATE
    _clientBalance = 0;

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
