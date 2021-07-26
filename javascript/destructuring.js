const evenNum = [2,4,6];
const oddNum = [1,3,5];

// "..." lets you access the values inside an array
const numbers = [...evenNum, ...oddNum];

const [num1, num2, ...otherNum] = [1,2,3,4,5];
// console.log(num1, num2, otherNum);

// Getting only the values from the object with "..."
const person = {
    name: 'Ju',
    age: 25
}
const personInfo = {...person, cel: 123456789}
// console.log(person, personInfo);

// Getting the value from an object
const { name } = person
// console.log(name);

function printData ({ name, age}) {
    console.log(name, age)
}

printData(person);
