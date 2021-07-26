import {Account} from "./classes/Account.js"
import {Branch} from "./classes/Branch.js"
import {Client} from "./classes/Client.js"

const branch1 = new Branch();
branch1.branchId = 1010;
branch1.branchName = "Tucuruvi";
branch1.branchLocation = "São Paulo";

const branch2 = new Branch();
branch2.branchId = 1015;
branch2.branchName = "Copacabana";
branch2.branchLocation = "Rio de Janeiro";

// CLIENT 1
const client1 = new Client();
client1.clientId = 123456;
client1.clientName = "Alex";
client1.clientLastName = "Mustermann";
const client1Account = new Account();
client1Account.accountId = 101000;
client1Account.branch = branch1;
client1Account.client = client1;
client1Account.deposit(500);
client1Account.withdrawal(50);

// CLIENT 2
const client2 = new Client();
client2.clientId = 456789;
client2.clientName = "Maria";
client2.clientLastName = "Celin";
const client2Account = new Account();
client2Account.accountId = 101500;
client2Account.branch = branch2;
client2Account.client = client2;
client2Account.deposit(500);
client2Account.withdrawal(50);

// TRANSFERS
client1Account.transfer(50, client2Account);
client2Account.transfer(50, client1Account);

console.log(client1Account, client2Account);
