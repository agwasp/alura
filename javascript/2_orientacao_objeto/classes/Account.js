export class Account {
    // PUBLIC
    clientAgency;
    client;
    // Convencao da comunidade é "_clientBalance" para deixar claro que é privado, embora não seja realmente
    // "#" é a feature para tornar uma variável privada
    // PRIVATE
    #clientBalance = 0;

    withdrawal (value) {
        if (this.#clientBalance >= value) {
            this.#clientBalance -= value;
            return this.#clientBalance;
        }
    }

    deposit (value) {
        if (value > 0) {
            this.#clientBalance += value;
            return this.#clientBalance;
        }
    }
}
