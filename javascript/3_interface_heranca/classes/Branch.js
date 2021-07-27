export class Branch {
    static branchCounter = 0;

    get branchId() {
        return this._branchId;
    }

    // variables should be declared and initiated inside the constructor
    constructor(id, name, location) {
        this._branchId = id;
        this.branchName = name;
        this.branchLocation = location;
        Branch.branchCounter += 1;
    }
}
