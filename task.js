//Task1-Store your name, age, and favorite hobby in variables and print a sentence using them.
let name = 'Vraj';
let age = 21;
let fav_hobby = 'cricket';

console.log(`My name is ${name} , i am ${age} years old and my fav. hobby is ${fav_hobby}`);

//TASK2-store a temperature in Celsius and convert it to Fahrenheit using a formula.
let temp = 20;
let Fahrenheit = (temp)*1.8+32;

console.log('The Fahrenheit of 25 celsius is',Fahrenheit);

//Task3-Declare a variable for your bank balance. Simulate a deposit and a withdrawal. Show the updated balance.

let bank_balance = 1000;

let deposit = bank_balance+200;
let withdrawal = bank_balance-500;

bank_balance = deposit - withdrawal;
console.log('The updated bank balance is',bank_balance);

//Task4-Create 5 variables with meaningful names representing real-world objects or data.

const lays = 'chips';

//Task5-. Use var, let, and const in a block scope and global scope. Log their values inside and outside the block.

var num1 = 10;
let num2 = 20;
const num3 = 30;

{
   var num1 = 40;
   let num2 = 50;
   const num3 = 60;

   console.log('The value inside block scope is',num1,num2,num3);
}

console.log('The value of global scope is',num1,num2,num3);

//Task6- Create a const array and try adding new items to it.

const arr1 = ["Apple", "Banana", "Orange"];
arr1.push('mango');
console.log(arr1);

//Task7 - Try reassigning variables declared with let and const.

let val1 = 'Spiderman';
const val2 = ['Simon','Gambhir','Dhoni'];

val1 = 'Virat';
val2.unshift('Rohit');


console.log('The updated value is',val1,'&',val2);

//Task8 - Declare variables of each type: string, number, boolean, object, array, null, undefined. Use typeof to log each type.

let str1 = 'Vraj';
console.log(typeof(str1));

let num = 13;
console.log(typeof(num));

let val = true;
console.log(typeof(val));

let obj1 = {
    email : "ok123@gmail.com"
}
console.log(typeof(obj1));

let arr2 = ['Dhoni', 'Jasprit','Hardik'];
console.log(typeof(arr2));

let val3 ;
console.log(typeof(val3));

let val4 = null;
console.log(typeof(val4));

//Task9 -Create an object to represent a book: title, author, year, and a boolean for if it’s read. Log the object.

let book = {

    title : 'Game of Thrones',
    author : 'The duffer brothers',
    year : 2011,
    Read : true
}
console.log(book);

//Task10-Make an array that includes a number, string, boolean, object, and another array. Log each item.

const arr = ['Vraj', 18 ,true, obj={
    key : 'val'
},[1,2,3,4]];

for(let i=0; i< arr.length;i++){
    console.log(arr[i]);
}

//Task11-Convert two number strings to actual numbers and add them.
let str2 = '13';
let str3 = '14';
console.log(typeof(str2,str3));


let val5 =Number(str2);
let val6 =Number(str3);
let total = val5+val6;
console.log('The addition of two value is',total);

//Task12-Convert a number to a string, concatenate it with other text, and log the result.

let strr = 18;
strr.toString();


let strr2 = "My jersy number is ";
let result = strr2.concat(strr);
console.log(typeof(result));
console.log(result);

//Task13- Use Boolean() to convert different values (0, 1, "", "hello", null, undefined) and log the results.

const ok = Boolean(1);
console.log('The value of 1 is',ok);

const notOk = Boolean(0);
console.log('The value of 0',notOk);

const empty = Boolean("");
console.log('The value of empty strings ',empty);

const empty1 = Boolean("hello");
console.log('The value of string is ',empty1);

let ook;
console.log('The value of undefine is',Boolean(ook));

let nul = null;
console.log('The value of null is',Boolean(nul));

//Task14- Given a variable with user input as a string, check if it's a valid number using isNaN() and convert it.

// let input = prompt('Enter any string');
// if(isNaN(input)){
//     console.log('Invalid number');
// }
// else{
//     console.log(Number(input));
// }

//Task15-  Use if-else to categorize a person based on age: child, teen, adult, senior.
let age1 =34;


if(age1<14){
 console.log('The person is a child');
}
else if(age1>=15 && age1<18){
    console.log('The person is a teenager');
}
else if(age1>=18 && age1<40){
    console.log('The person is adult');
}
else{
    console.log("The person is senior");
}

//Task16 - Take a number and determine if it is even or odd using %.

let numb = 3;

if(numb % 2 == 0 ){
    console.log('It is a even number')
}
else{
    console.log("Odd number");
}

//Task17-Declare variables for stored username/password. Compare with user input and print login success or failure.

// let username = 'abc';


// let input = prompt('Enter username');

// if(input === username){
//     console.log("User login sucessfully"); 
// }
// else{
//     console.log("Invalid username ");
// }

//Task18-If purchase amount is over $100, apply a 10% discount. Otherwise, apply 5%. Show the final price.

let purchase = 90;
let amount,discount;


if(purchase>100){
 
  discount = purchase*(0.10);
    amount = purchase - discount
    console.log(amount);

}
else{
    discount = purchase*(0.05);
     amount = purchase - discount
    console.log(amount);
}

//Task19- Take a score and assign a grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).

// let grade = 50;
// switch (grade){
//     case 1: 
//     (grade>=90)
//         console.log('the student scored A+');
//         break;
//         case 2: 
//     (grade>=80 && grade<90)
//         console.log('the student scored B');
//         break;
//         case 3: 
//     (grade>=70 && grade<80)
//         console.log('the student scored C');
//         break;
//         case 4: 
//    (grade>=60 && grade<70)
//         console.log('the student scored D');
//         break;
//         case 5: 
//    (grade<=60)
//         console.log('the student scored F');
//         break;
//         default :
//         console.log('Enter valid number');
//         break;
// }

let marks = 10;

if(marks>90){
    console.log('The student got A+ grade');
}
else if(marks>=80 && marks<90){
 console.log('The student got B grade');
}
else if(marks>=70 && marks<80){
 console.log('The student got C grade');
}
else if(marks>=60 && marks<70){
 console.log('The student got D grade');
}
else if(marks<=60){
 console.log('The student got F grade');
}
else{
    console.log("Enter valid number");
}

//Task-20 Based on a variable storing the color ("red", "yellow", "green"), print a message for what to do ("Stop", "Slow down", "Go").

let input1 = prompt("Enter any color");

if(input1 == 'red'){
    console.log("Plese stop the car");
}
else if(input1 == 'yellow'){
    console.log('Slow down your car');
}
else {
    console.log('You can go now');
}



