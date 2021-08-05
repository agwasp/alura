export class Authentication {
    static login (worker, password) {
        return worker.password == password;
    }
}
