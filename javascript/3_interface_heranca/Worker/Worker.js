export class Worker {
    constructor(id, name, lastName, payslip) {
        if (this.constructor == Worker) {
            throw new Error ("You shouldn't instantiate objects of Worker type directly. This is an abstract class, choose 'Manager' or 'Director' instead.");
        }
        
        this.workerId = id;
        this.name = name;
        this.lastName = lastName;
        this._payslip = payslip;
        this._bonus = 1;
    }
}
