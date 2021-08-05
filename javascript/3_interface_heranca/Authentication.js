export class Authentication {
    static login (authentic, password) {
        if (Authentication.isAuthentic(authentic)){
            return authentic.authentication(password);
        }
        return false;
    }

    static isAuthentic(authentic) {
        return "authentic" in authentic && authentic.authentication instanceof Function
    }
}
