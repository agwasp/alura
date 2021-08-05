import { Worker } from './Worker.js'

export class Clerk extends Worker {
    static clerkCounter = 0;

    constructor(id, name, lastName, payslip) {
        super(id, name, lastName, payslip); // Calls the constructor from Worker
        this._bonus = 1.1;
        Clerk.clerkCounter += 1;
    }
}
