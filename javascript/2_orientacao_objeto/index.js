import {Account} from "./classes/Account.js"
import {Branch} from "./classes/Branch.js"
import {Client} from "./classes/Client.js"

// CLIENT 1
const client1Branch = new Branch();
client1Branch.branchId = 1010;
client1Branch.branchName = "Tucuruvi";
client1Branch.branchLocation = "São Paulo";
client1Branch.client1Account = new Account();
client1Branch.client1Account.accountId = 101000;
client1Branch.client1Account.client1 = new Client();
client1Branch.client1Account.client1.clientId = 123456;
client1Branch.client1Account.client1.clientName = "Alex";
client1Branch.client1Account.client1.clientLastName = "Mustermann";
client1Branch.client1Account.deposit(500);
client1Branch.client1Account.withdrawal(50);

// CLIENT 2
const client2Branch = new Branch();
client2Branch.branchId = 1015;
client2Branch.branchName = "Mandaqui";
client2Branch.branchLocation = "São Paulo";
client2Branch.client2Account = new Account();
client2Branch.client2Account.accountId = 101500;
client2Branch.client2Account.client2 = new Client();
client2Branch.client2Account.client2.clientId = 456789;
client2Branch.client2Account.client2.clientName = "Max";
client2Branch.client2Account.client2.clientLastName = "Celin";
client2Branch.client2Account.deposit(500);
client2Branch.client2Account.withdrawal(50);

client1Branch.client1Account.transfer(100, client2Branch.client2Account);
client2Branch.client2Account.transfer(50, client1Branch.client1Account);

console.log(client1Branch, client2Branch); //, client3Branch, client4Branch);

// CLIENT 3
// const client3Branch = new Branch();
// client3Branch.branchId = 1020;
// client3Branch.branchName = "Botafogo";
// client3Branch.branchLocation = "Rio de Janeiro";
// client3Branch.client3Account = new Account();
// client3Branch.client3Account.accountId = 102000;
// client3Branch.client3Account.client3 = new Client();
// client3Branch.client3Account.client3.clientId = 789123;
// client3Branch.client3Account.client3.clientName = "Ricardo";
// client3Branch.client3Account.client3.clientLastName = "Koch";
// client3Branch.client3Account.deposit(500);
// client3Branch.client3Account.withdrawal(50);

// CLIENT 4
// const client4Branch = new Branch();
// client4Branch.branchId = 1025;
// client4Branch.branchName = "Copacabana";
// client4Branch.branchLocation = "Rio de Janeiro";
// client4Branch.client4Account = new Account();
// client4Branch.client4Account.accountId = 102500;
// client4Branch.client4Account.client4 = new Client();
// client4Branch.client4Account.client4.clientId = 654987;
// client4Branch.client4Account.client4.clientName = "Maria";
// client4Branch.client4Account.client4.clientLastName = "Smith";
// client4Branch.client4Account.deposit(500);
// client4Branch.client4Account.withdrawal(50);
