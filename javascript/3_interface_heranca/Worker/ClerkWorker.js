import { Worker } from './Worker.js'

export class ClerkWorker extends Worker {
    static clerkCounter = 0;

    constructor(id, name, lastName, payslip) {
        super(id, name, lastName, payslip); // Calls the constructor from Worker
        this._bonus = 1.1;
        ClerkWorker.clerkCounter += 1;
    }
}
