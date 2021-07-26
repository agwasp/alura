import {Account} from "./classes/Account.js"
import {Branch} from "./classes/Branch.js"
import {Client} from "./classes/Client.js"

const branch1 = new Branch(1010, "Tucuruvi", "São Paulo");
const branch2 = new Branch(1015, "Copacabana", "Rio de Janeiro");

// CLIENT 1
const client1 = new Client(123456, "Alex", "Mustermann");
const client1Account = new Account(101000, branch1, client1);
client1Account.deposit(500);
client1Account.withdrawal(50);

// CLIENT 2
const client2 = new Client(456789, "Maria", "Celin");
const client2Account = new Account(101500, branch2, client2);
client2Account.deposit(500);
client2Account.withdrawal(50);

// TRANSFERS
client1Account.transfer(50, client2Account);
client2Account.transfer(50, client1Account);

console.log(client1Account, client2Account);
