//Taask1-Write a function that takes an array of numbers and 
// returns the maximum number in the array.



// function maximum(arr){
//    return  Math.max(...arr)
// }

// console.log(maximum(arr));

function maximum() {
    let arr = [1, 2, 3, 40, 5, 8];
    let min = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(maximum());


//Task-2-Write a function that takes an array of numbers and 
// returns the minimum number in the array.

// let arr2 = [1,2,3,40,5,8];

// function minimum(arr2){
//    return  Math.min(...arr2)
// }

// console.log(minimum(arr2));


function minimum() {
    let arr = [4, 2, 1, 40, 5, 8];
    let min = 100;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minimum());

//Task3-Write a function that takes an array of numbers and returns the sum of all elements.


function sum() {
    let arr3 = [1, 2, 3, 4, 5, 8];
    let res = arr3.reduce((val1, val2) => {
        return val1 + val2;
    })
    console.log(res);
}
sum();

// Task4 - Write a function that takes an array and returns a new array with elements in reverse order.

// function reverse(){
// let arr3 = [1,2,3,4,5,8];
// let res = arr3.reverse();

// console.log(res);
// }

// reverse();

function reverse() {
    let arr3 = [1, 2, 3, 4, 5, 8];
    let res = [];
    for (let i = arr3.length - 1; i >= 0; i--) {
        res.push(arr3[i]);
    }
    return res;
}
console.log(reverse());

//Task5- Write a function that checks if a given value exists in an array.

let val = 5;
function exists(val) {
    let arr3 = [1, 2, 3, 4, 5, 8];
    let res = arr3.includes(val);
    console.log(res);
}
exists(val);

//Task6-Write a function that counts how many times a specific element appears in an array.

function count(value) {
    let arr3 = [1, 2, 3, 2, 5, 8];

    let count = 0;

    for (let i = 0; i <= arr3.length; i++) {

        if (value == arr3[i]) {
            count++;
        }
    }
    return count;

}

console.log(count(2));

//Task7-Write a function that removes duplicate elements from an array and returns a new array.

let arr = [1, 2, 2, 3, 4];
function duplicate(arr) {

    let unique = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;

}
console.log(duplicate(arr));

//Task8-Write a function that returns the second largest number in an array.

function largest() {
    let arr = [10, 20, 30, 40, 70, 60, 50];

    let arr2 = arr.sort((a, b) => {
        return b - a;
    })
    console.log(arr2[1]);
}
largest();

//Task9-  Write a function that merges two sorted arrays into a single sorted array.

function sort() {
    let arr1 = [10, 20, 50, 60];
    let arr2 = [30, 40];

    let res = arr1.concat(arr2);
    res.sort((a, b) => {
        return a - b;
    })
    console.log(res);
}
sort();

//Task10-Write a function that rotates an array to the right by k positions.
function rotate(){
  let arr = [1,2,3,4,5];
  let k=3; //rotate towards k times

  k = k % arr.length; //for loop's condition

  for(let i=0; i<k; i++){
    let lastEle = arr.pop();
    arr.unshift(lastEle);
  }
  console.log(arr);
}
rotate();

//Task11-given an array containing n distinct numbers taken from 0 to n, find the missing number.
function missing() {

    let arr = [0, 1, 2, 3, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i) {
            return i;
        }
    }
}
console.log(missing());

//Task12- Write a function that takes an array and a target sum and 
// returns all pairs of numbers that add up to the target.

function pair(target) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            sum = arr[i] + arr[j];
            if (sum == target) {
                console.log(`pair is [${arr[i]},${arr[j]}] whose sum is = ${target}`);
            }
        }
    }
}
pair(8);

// Task13-Given two arrays, return a new array containing elements 
// that appear in both arrays (without duplicates).
function sameEle() {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];
    let arr3 = [];
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr2[j] == arr1[i]) {
                arr3.push(arr1[i])
            }
        }
    }
    console.log(arr3);
}
sameEle();

//Task14-Given an array of integers, find the first element that appears only once.
// function firstEle() {
//     let arr = [1, 2, 2, 1, 4, 5, 5, 6];
//     let arr2 = {}
//     for (let ele of arr) {
//         if (arr2[ele]) {
//             arr2[ele]++;
//         }
//         else {
//             arr2[ele] = 1;
//         }
//     }
//     for (let key in arr2) {
//         if (arr2[key] < 2) {
//             return key;
//         }
//     }
// }
// console.log(firstEle());

function firstEle(){
    let arr = [1,2,2,1,4,5,5,6];
    let res =0;
    for(let i=0; i<arr.length-1; i++){
        res = res ^ arr[i]; 
    }
    return res;
}
console.log(firstEle());

//Task15-Implement a function to sort an array without using JavaScript’s built-in sort() method.
function sortArr() {
    let arr = [20, 40, 50, 10, 70];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];        //swap
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
sortArr();

// Task16 - Given an unsorted array of integers, find the length of the longest 
// consecutive sequence of numbers.
function length() {
    let arr = [10, 1, 2, 3, 4, 20];
    let arr2 = [];
    arr.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[j] - arr[i] == 1) {
                arr2.push(arr[i], arr[j]);
            }
        }
    }
    let unique = [];
    for (let i = 0; i <= arr2.length - 1; i++) {
        if (!unique.includes(arr2[i])) {
            unique.push(arr2[i]);
        }
    }
    return unique.length;
}
console.log(length());

//Task17-Given an array of numbers, return an array where 
// each element at index i is the product of all elements except the one at i, 
// without using division.
function product() {
    let arr = [1, 2, 3, 4];
    let arr2 = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        let prev = 1;
        for (let j = 0; j <= arr.length - 1; j++) {
            if (i != j) {
                prev = prev * arr[j];
            }
        }
        arr2.push(prev);
    }
    console.log(arr2);
}
product();

//  Task18-Given an array of positive and negative numbers, 
// rearrange it so that numbers alternate in sign while maintaining relative order.
function rearrange() {
    let arr = [1, 2, -3, -4, -5, 6];
    let negative = [];
    let positive = [];
        let final=[];
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]<0){
            negative.push(arr[i]);
        }
        else{
            positive.push(arr[i]);
        }
    }
    let i=0;
    let j=0;
    while(i<positive.length || j<negative.length){
        if(i<positive.length){
            final.push(positive[i]);
            i++;
        }
         if(j<negative.length){
            final.push(negative[j]);
            j++;
        }
    }
console.log(final);
}
rearrange();

//Task19-Given an array of integers, find the contiguous subarray 
// (containing at least one number) that has the largest sum and return that sum.


//Task20-Given an array, find the element that appears more than n/2 times (where n is the array length). 
// Assume that such an element always exists.
// function length(){
// //     let arr = [1,2,2,2,3,5,7];
// //     let n = arr.length-1;
// //     let count = {}
// //     for(ele of arr){
// //        if(count[ele]){
// //         count[ele]++;
// //        }
// //        else{
// //         count[ele]=1;
// //        }
// //     }
// // for(let ele in count){
// //     if(count[ele]>=n/2){
// //       console.log(`the element that appears more than n/2 times  is ${ele}`);
// //     }
// // }
// // }
// length();

function length(){
    let arr =[1,2,2,2,3,5,7,2];
    let n= arr.length-1;
    let count=0;

    for(let i=0; i<=n;i++){
        for(let j=0; j<=n;j++){
            if(arr[i] == arr[j]){
                count++;
            }
            if(count > n/2){
                return arr[i]
            }
        }
    }
}
console.log(length());