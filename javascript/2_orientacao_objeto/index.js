import {Account} from "./classes/Account.js"
import {Branch} from "./classes/Branch.js"
import {Client} from "./classes/Client.js"

// CLIENT 1
const client1 = new Client();
client1.clientId = 123456;
client1.clientName = "Alex";
client1.clientLastName = "Mustermann";

const client1Account = new Account();
client1Account.accountId = 101000;
client1Account.client = client1;
client1Account.deposit(500);
client1Account.withdrawal(50);

const client1Branch = new Branch();
client1Branch.branchId = 1010;
client1Branch.branchName = "Tucuruvi";
client1Branch.branchLocation = "São Paulo";
client1Branch.account = client1Account;

// CLIENT 2
const client2 = new Client();
client2.clientId = 456789;
client2.clientName = "Max";
client2.clientLastName = "Celine";

const client2Account = new Account();
client2Account.accountId = 101500;
client2Account.client = client2;
client2Account.deposit(500);
client2Account.withdrawal(50);

const client2Branch = new Branch();
client2Branch.branchId = 1015;
client2Branch.branchName = "Mandaqui";
client2Branch.branchLocation = "São Paulo";
client2Branch.account = client2Account;

// CLIENT 3
// const client3 = new Client();
// client3.clientId = 789123;
// client3.clientName = "Ricardo";
// client3.clientLastName = "Koch";

// const client3Account = new Account();
// client3Account.accountId = 102000;
// client3Account.client = client3;
// client3Account.deposit(500);
// client3Account.withdrawal(50);
// client3Account.transfer(100, client4Account);

// const client3Branch = new Branch();
// client3Branch.branchId = 1020;
// client3Branch.branchName = "Botafogo";
// client3Branch.branchLocation = "Rio de Janeiro";
// client3Branch.account = client3Account;

// CLIENT 4
// const client4 = new Client();
// client4.clientId = 654987;
// client4.clientName = "Maria";
// client4.clientLastName = "Smith";

// const client4Account = new Account();
// client4Account.accountId = 102500;
// client4Account.client = client4;
// client4Account.deposit(500);
// client4Account.withdrawal(50);
// client4Account.transfer(50, client3Account);

// const client4Branch = new Branch();
// client4Branch.branchId = 1025;
// client4Branch.branchName = "Copacabana";
// client4Branch.branchLocation = "Rio de Janeiro";
// client4Branch.account = client4Account;

client1Account.transfer(100, client2Account);
client2Account.transfer(50, client1Account);

// console.log(client1, client2, client3, client4);
// console.log(client1Account, client2Account); //, client3Account, client4Account);
console.log(client1Branch, client2Branch); //, client3Branch, client4Branch);
