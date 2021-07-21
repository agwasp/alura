import {Account} from "./classes/Account.js"
import {Client} from "./classes/Client.js"

const client1 = new Client();
client1.clientName = "Alex";
client1.clientLastName = "Mustermann";
client1.clientId = 123456;
const client1Account = new Account();
client1Account.clientAgency = 1010;
client1Account.client = client1;

// const client2 = new Client();
// client2.clientName = "Max";
// client2.clientLastName = "Celine";
// client2.clientId = 456789;
// const client2Account = new Account();
// client2Account.clientAgency = 1015;

// const client3 = new Client();
// client3.clientName = "Ricardo";
// client3.clientLastName = "Koch";
// client3.clientId = 789123;
// const client3Account = new Account();
// client3Account.clientAgency = 1020;

// const client4 = new Client();
// client4.clientName = "Maria";
// client4.clientLastName = "Smith";
// client4.clientId = 654987;
// const client4Account = new Account();
// client4Account.clientAgency = 1025;

console.log(client1); //, client2, client3, client4);
console.log(client1Account); //, client2Account, client3Account, client4Account);

client1Account.deposit(300);
const withdrawal = client1Account.withdrawal(20);
console.log(withdrawal);

console.log(client1); //, client2, client3, client4);
console.log(client1Account); //, client2Account, client3Account, client4Account);
