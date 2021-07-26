export class Branch {
    _branchId;
    branchName;
    branchLocation;

    get branchId() {
        return this._branchId;
    }

    constructor(id, name, location) {
        this._branchId = id;
        this.branchName = name;
        this.branchLocation = location;
    }
}
