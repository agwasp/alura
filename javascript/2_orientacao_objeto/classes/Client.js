export class Client {
    _clientId;
    clientName;
    clientLastName;
    static clientCounter = 0;

    get clientId() {
        return this._clientId;
    }

    constructor(id, name, lastName) {
        this._clientId = id;
        this.clientName = name;
        this.clientLastName = lastName;
        Client.clientCounter += 1;
    }
}
