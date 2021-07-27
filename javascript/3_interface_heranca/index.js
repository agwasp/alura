import {Account} from "./classes/Account.js"
import {Branch} from "./classes/Branch.js"
import {Client} from "./classes/Client.js"

// BRANCHES (id, name, location)
const branch1 = new Branch(1010, "Tucuruvi", "São Paulo");
const branch2 = new Branch(1015, "Copacabana", "Rio de Janeiro");
//const branch3 = new Branch(1020, "Lapa", "Rio de Janeiro");

// CLIENT 1 (id, name, lastName)
const client1 = new Client(123456, "Alex", "Mustermann");
const client1Account = new Account(101000, branch1, client1); // (id, branch, client)
client1Account.deposit(500);
client1Account.withdrawal(50);

// CLIENT 2 (id, name, lastName)
const client2 = new Client(456789, "Maria", "Celin");
const client2Account = new Account(101500, branch2, client2); // (id, branch, client)
client2Account.deposit(500);
client2Account.withdrawal(50);

// CLIENT 3 (id, name, lastName)
const client3 = new Client(789456, "Josefina", "Santos");
const client3Account = new Account(102000, branch2, client3); // (id, branch, client)
client3Account.deposit(500);
client3Account.withdrawal(50);

// TRANSFERS
client1Account.transfer(50, client2Account);
client2Account.transfer(50, client1Account);

console.log(client1Account, client2Account, client3Account);
console.log(`Total Active Clients: ` + Client.clientCounter);
console.log(`Total Active Accounts: ` + Account.accountCounter);
console.log(`Total Active Branches: ` + Branch.branchCounter);
