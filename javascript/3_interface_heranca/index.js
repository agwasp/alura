import { Branch } from './classes/Branch.js'
import { Client } from './classes/Client.js'
import { CurrentAccount } from './classes/CurrentAccount.js'
import { SavingsAccount } from './classes/SavingsAccount.js'

// BRANCHES (id, name, location)
const branch1 = new Branch(1010, 'Tucuruvi', 'São Paulo');
const branch2 = new Branch(1015, 'Copacabana', 'Rio de Janeiro');
const branch3 = new Branch(1020, "Lapa", "Rio de Janeiro");

// CLIENTS (id, name, lastName)
const client1 = new Client(123456, 'Alex', 'Mustermann');
const client2 = new Client(456789, "Maria", "Celin");
const client3 = new Client(789456, "Josefina", "Santos");

// ACOUNTS (id, branch, client)
const client1Account = new CurrentAccount(101000, branch1, client1);
const client2Account = new CurrentAccount(101500, branch2, client2);
const client3Account = new CurrentAccount(102000, branch3, client3);

const client1Savings = new SavingsAccount(101005, branch2, client1);

// DEPOSITS - WITHDRAWS
client1Account.deposit(500);
client2Account.deposit(500);
client3Account.deposit(500);

client1Savings.deposit(300);

client1Account.withdrawal(50);
client2Account.withdrawal(50);
client3Account.withdrawal(50);

client1Savings.withdrawal(50);

// TRANSFERS
client1Account.transfer(50, client2Account);
client2Account.transfer(50, client1Account);

console.log(client1Account); //, client2Account, client3Account);
console.log(client1Savings);
console.log(`Total Active Branches: ` + Branch.branchCounter);
console.log(`Total Active Current Accounts: ` + CurrentAccount.currentAccountCounter);
console.log(`Total Active Saving Accounts: ` + SavingsAccount.savingsAccountCounter);
console.log(`Total Active Clients: ` + Client.clientCounter);
