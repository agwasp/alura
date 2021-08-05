import { Worker } from './Worker.js'

export class Manager extends Worker {
    static managerCounter = 0;

    constructor(id, name, lastName, payslip) {
        super(id, name, lastName, payslip); // Calls the constructor from Worker
        this._bonus = 1.5;
        Manager.managerCounter += 1;
    }
}
