export class Client {
    static clientCounter = 0;

    get clientId() {
        return this._clientId;
    }

    // variables should be declared and initiated inside the constructor
    constructor(id, name, lastName) {
        this._clientId = id;
        this.clientName = name;
        this.clientLastName = lastName;
        Client.clientCounter += 1;
    }
}
