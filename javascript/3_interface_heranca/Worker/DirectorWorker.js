import { Worker } from './Worker.js'

export class DirectorWorker extends Worker {
    static directorCounter = 0;

    constructor(id, name, lastName, payslip) {
        super(id, name, lastName, payslip); // Calls the constructor from Worker
        this._bonus = 2;
        DirectorWorker.directorCounter += 1;
    }
}
