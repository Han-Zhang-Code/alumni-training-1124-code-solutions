const width: number = 160;
const height: number = 170;
const area: number = width * height;
console.log('the value of area', area);
console.log('the type of area', typeof area);

const bill: number = 100;
const payment: number = 120;
const change: number = payment - bill;
console.log('the value of change', change);
console.log('the type of change', typeof change);

const quizzes: number = 10;
const midterm: number = 9;
const final: number = 10;
const grade: number = (quizzes + midterm + final) / 3;
console.log('the value of grade', grade);
console.log('the type of grade', typeof grade);

const firstName: string = 'YUHAN';
const lastName: string = 'ZHANG';
const fullName: string = firstName + ' ' + lastName;
console.log('the value of fullName', fullName);
console.log('the type of fullName', typeof fullName);

const pH: number = 7;
const isAcidic: boolean = pH < 7;
console.log('the value of isAcidic', isAcidic);
console.log('the type of isAcidic', typeof isAcidic);

const headCount: number = 11;
const isSparta: boolean = headCount === 300;
console.log('the value of isSparta', isSparta);
console.log('the type of isSparta', typeof isSparta);

let motto: string = fullName;
motto = fullName + ' is the GOAT';
console.log('the value of motto', motto);
console.log('the type of motto', typeof motto);
