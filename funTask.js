//Task-1 Write a function called greet that takes a name as a parameter and logs a greeting message.

function greet(name){

    console.log(name);
}

greet('Good morning !!');

//Task-2 Write a function that takes a string representing a number (e.g., "42") and converts it
//  to an actual number. Then, check if the number is greater than 50 and return a corresponding message.

let str1 = '42';

function convert(){
          
     let num =  Number(str1);

    if(num>50){
          
        console.log("The coresponding number is greater than 50 ");
    }
    else{
            console.log("The coresponding number is lesser than 50 ");

    }
}
convert();

//Task3- Write a function that accepts a string with a number and converts 
// it to a floating-point number. Return the result of multiplying the number by 2.


let str = '42.12';
function floating(){
    
let res = parseFloat(str);

return res*2;

}

console.log(floating());

//Task4-Create a function that checks if the number is between 1 and 100 (inclusive).
//  If it is, return "Valid", otherwise return "Invalid".

function valid(num){
    
    if(num>=1 && num<=100){
        return 'valid';
    }
    else{
        return 'invalid';
    }
}

console.log(valid(102));

//Task-5 Write a function that takes a grade (between 0 and 100) and returns 
// the letter grade: "A" for scores between 90 and 100, "B" for scores between 80 and 89, 
// "C" for scores between 70 and 79, and "F" for scores below 70.
function grade(marks){

    if(marks>=90 && marks<=100){
        console.log("Student scored A grade ");
    }
    else if(marks>=80 && marks<90){
        console.log("Student scored B grade ");
    }
    else if(marks>=70 && marks<80){
        console.log("Student scored C grade ");
    }
    else if(marks<70){
        console.log("Student scored F grade ");
    }
    else{
        console.log("Invalid marks");
    }
}

grade(100);

//Task-6  Write a function called isEven that takes a number as a parameter and 
// returns true if the number is even and false otherwise.

function isEven(num){

    if(num % 2 == 0){
      return true;
    }
    else{
        return false;
    }
}

console.log(isEven(22));

//Task7 - Write a function that takes a string and checks if it contains only numbers. 
// Return "Valid number" if the string contains only digits, otherwise return "Invalid number".

function check(){
    let str = '333';

    for (let ch of str) {
    if (ch < '0' || ch > '9') {
      return "Invalid number";
    }
  }
  return "Valid number";
}
console.log(check());

//Task8 - Create a function that takes a string as an argument and returns "Vowel" 
// if the string is a vowel (a, e, i, o, u) and "Not Vowel" if it is not.

function vowel(str){

    if(str[0].toLowerCase()=='a' || str[0].toLowerCase() == 'e' || str[0].toLowerCase() == 'i' || str[0].toLowerCase() =='o' || str[0].toLowerCase() == 'u'){
        return 'vowel';
    }
    else{
        return 'Not vowel';
    }
}

console.log(vowel('AE'));   

//Task-9  Create a function that takes a string representing a day of the week (e.g., "Monday", "Saturday") and
//  returns "Weekday" if it is a weekday (Monday through Friday), and "Weekend" if it is a Saturday or Sunday.

function week(day){
    if(day == 'saturday' || day == 'sunday'){
       console.log("Its weekend")
    }
    else{
        console.log("Its weekday");
    }
}
week('thursday');

//Task10-  Write a function that takes a number as an argument and 
// returns "High" if the number is greater than 100, "Medium" if the number is between 50 and 100, and "Low" if it is less than 50.

function checks(num){
  
    if(num>=100){
        console.log("High")
    }
    else if( num >=50 && num <100){
        console.log("Medium");
    }
    else{
        console.log("Low")
    }
}
checks(49);

//Task11- Write a function that takes a string representing a month (e.g., "January", "August") and 
// returns the season in which the month falls. Assume that "Winter" is from December to February, 
// "Spring" is from March to May, "Summer" is from June to August, and "Fall" is from September to November.

function season(month){
    
    if(month == 'January' || month == 'December' || month == 'February'){
        console.log("Winter season");
    }
    else if(month == 'March' || month == 'April' || month == 'May'){
        console.log("Spring season");
    }
    else if (month == 'June' || month == 'July' || month == 'August'){
        console.log("Summer season");
    }
    else if(month == 'Sepetember' || month == 'October' || month == 'November') {
        console.log("Fall season");
    }
    else{
        console.log('Invalid month');
    }
}

season('March');

//Task12- Write a function that takes a year as an argument and returns whether the year is a leap year. 
// A year is a leap year if it is divisible by 4, but not divisible by 100 unless it is also divisible by 400.

function leapYear(year){
    if(year % 4 == 0){
        console.log("Its a leap year");
    }
    else{
        console.log("Its not a leap year");
    }
}

leapYear(1920);

//Task13-Write a function that takes a number as input and checks if the number is a 
// multiple of 7 or 11. If it is, return "Multiple of 7 or 11", otherwise return "Not a multiple".

function mul(num){
    if(num%7 === 0 || num%11 == 0){
        console.log('It is the multiple of 7 or 11');
    }
    else{
        console.log('Not a multiple');
    }
}

mul(100);

//Task14- Write a function called isDivisibleByBoth that takes a number and 
// checks if it’s divisible by both 3 and 5.

function isDivisibleByBoth(num){
    if(num%3 === 0 && num%5 == 0){
        console.log('number is divisable by both 3 and 5');
    }
    else{
        console.log('Number is not divisable');
    }
}

isDivisibleByBoth(20);

//Task15- Create a function called timeToSeconds that takes two parameters, hours and minutes,
//        and returns the total time in seconds.

function timeToSeconds(hours,mins){

    let sec1 = hours * 60 * 60;
    let sec2 = mins * 60;
    let result = sec1 + sec2;
    console.log(result);
}

timeToSeconds(5,2);

//Task16 - Create a function called ageInDays that takes a 
// person’s age in years and returns their approximate age in days.

function ageInDays(age){
    
    let days = age*365;
    console.log(`the ${age} ahe person is ${days} days old`);
}

ageInDays(96);

//Task17- Write a function factorial that takes a positive integer n and returns its factorial using a for loop.

function fact(num){
    let factorial = 1;
    for(let i=1; i<=num ; i++){
        
        factorial = factorial * i;
    }
    return factorial;
}

console.log(fact(5));

//Task18- Write a function sumOfOddNumbers that takes a number n and 
// returns the sum of all odd numbers from 1 to n.

function sumOfOddNumbers(num){
    let sum =0;
    for(let i=1; i<=num ; i=i+2){
        sum = sum + i ;
    }
    return sum;
}

console.log(sumOfOddNumbers(9));

//Task19- Write a function that takes a number and checks if it is a perfect number. 
// A perfect number is a positive integer that is equal to the sum of its proper divisors 
// (excluding the number itself). For example, 6 is a perfect number because 1 + 2 + 3 = 6.

function perfectNum(num){

    let sum=0;
    
    for(let i=1 ; i <num ;i++){

        if(num%i == 0){
            sum = sum + i;
        }
    }
    if(sum == num){
        console.log("Its a perfect number");
    }
    else{
        console.log("Not a perfect number");
    }
}
perfectNum(6);

//Task20 -  Write a function that takes a 3 digit number and check whether number 
// is Armstrong or not. example: 153 is 3 digit armstrong number

function armstrong(num){
    let sum=0;
    let temp = num;
while(temp>0){
    let rem = temp%10;
    let res = Math.pow(rem,3);
     sum = sum+res;  
     temp= Math.floor(temp/10);
}
 if(sum == num){
        console.log("This is the arm strong number");
    }
    else{
        console.log("It is not the armstrong  number");
    }
}

armstrong(153);

//Task21- Write a function that take a number and checks if it is a prime number or not. 
// example: 5, 7 is prime numbers

function prime(num){

    for(let i=2; i<=num*num; i++){
        if(num%i == 0 ){
           return false;
        }
        else{
           return true;
        }
    }
}

console.log(prime(7));

// function pallindrom(){

//     let num = 35253;
//     let arr =String(num)
//     // let arr= [3,5,2,5,3];
//     let st = 0;
//     let end = arr.length-1;

//     while(st<end){

//       if(arr[st] == arr[end]){
    
//         st++;
//         end--;
//         console.log('st',st,'end',end);
//       }  
 
//       else{
        
//         return  " not a palindrom ";
//       }

//     }      
//   return 'palindrone';

// }

// console.log(pallindrom());

// function palindrom(){
//     let num = 121;

//     num = String(num);
//     let num2 = num.split('');

//     let res = num2.reverse();
//    let res2 = res.join('');
 
//    let res3 = Number(res2);

//    if(res3 == num){

//     console.log("Its a palindrom number");

//    }
// else{

//     console.log("Not a palindrom number");
// }
// }
// palindrom();



//Task22-Write a function that take a number and checks if it is a pallindrom number or not. 
// example: 35253, 5151515 is pallindrom number


// function palindrom(){

//     let num = 35253;
//     let last_dig;

//     while(num){
//      last_dig = num % 10;
//      num = num/10;

//     }
//     if(last_dig == num){
//         console.log('palindrom');
//     }
//     else{
//         console.log('Not palindrom');
//     }

// }]

// palindrom();

function palindrom(){
    let num = 121;
    num = String(num);
    let num1 = '';

    for(let i=num.length-1; i>=0 ;i--){
          
        num1 = num1 + num[i];
    }
    if(num1 == num){
        console.log("Palindrom");
    }
    else{
        console.log("Not palindrom");
    }
}
palindrom();

//Task23-Write a JavaScript loop to calculate the digital root of a number without using arrays,
// objects, or strings. The digital root of a number is the single-digit value obtained by an iterative 
// process of summing its digits until a single digit is reached.

function digitalRoot(num){

    while(num>=10){

     let sum =0;

    while(num>0){

      let last_dig = num % 10;
      sum = sum+last_dig;
      num = Math.floor(num/10);
    
}
 
     num = sum;
    }

  return num;
}

console.log(digitalRoot(191));

// Write a JavaScript loop to print the first 10 numbers in the Fibonacci sequence, 
// but instead of using arrays or recursion, store only the last two Fibonacci numbers in variables.

function fibonaci(num){

    let num1 = 0;
    let num2 = 1;
    let sum;

// if(num>=0)
//     { console.log(num)};
// if(num>=1){
//     console.log(num);
// }

  

for(let i=1; i<=num; i++){
   console.log(num1);
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;
  
}

}
fibonaci(10);