//Count how many keys are in an object.

// const obj1= {
//     maruti : 'Grand vitara',
//     hundai : 'Creata',
//     Mahindta : 'XUV 700'
// }

// const key = Object.keys(obj1);
// console.log(key.length);


// //Change all values in an object to uppercase.

//  function res(){
//     const obj2 = {
//     maruti : 'Grand vitara',
//     hundai : 'Creata',
//     Mahindta : 'XUV 700'
// }

// let res2='';
// for(let name in obj2){
//     res2 = res2+ obj2[name].toUpperCase() + ' ';
    
// }
// return res2;
// }
// console.log(res());

//Swap keys and values in an object.

// function swap(){  
//     const obj3 = {
//     maruti : 'Grand vitara',
//     hundai : 'Creata',
//     Mahindta : 'XUV 700'
// }
// const res = Object.fromEntries(
//     Object.entries(obj3).map(([key,value])=>[value,key]))
// return res;
// }
// console.log(swap());

// function swap(){
//         const obj2 = {
//     maruti : 'Grand vitara',
//     hundai : 'Creata',
//     Mahindta : 'XUV 700'
// }
// const swap ={}
// for(let key in obj2){
//     swap[obj2[key]]= key;
// }
// return swap;
// }
// console.log(swap());

//1. Merge two objects into one (new object).

// const obj = {
//     f_name : 'Vraj',
//     l_name : 'Patel',
//     age : 22
// }
// const obj1 = {
//       maruti : 'Grand_vitara',
//     hundai : 'Creata',
//     Mahindta : 'XUV700'
// }

// const obj3={...obj,...obj1};


// console.log(obj3);
    
//2. Find the key that has a certain value.
const obj1 = {
     l_name : 'Patel',
     f_name : "vraj",
      age : 22
}

function key(obj1,value){

for(let x in obj1){
    if(obj1[x] == value){
        return x;
    }
 }
}
console.log(key(obj1,'vraj'))

//3. Check if an object has no keys.
const obj={}

function keys(obj){
  
if(Object.keys(obj).length == 0){
    return false;
}
else{
    return true;
}
}
console.log(keys(obj));

//4. Add all the numbers in an object’s values.

function sum(){
    const obj = {
        val1 : 10,
        val2 : 20,
        val3 : 30
    }
    let sum =0;
    for(let x in obj){
        sum = sum + obj[x];
    }
    return sum;
}
console.log(sum());

//5. Delete all keys where the value is null or undefined.
function del(){
    
    const obj = {
        val1 : 10,
        val2 : null,
        val3 : 30
    }
    for(let x in obj){
           if(obj[x] == null || obj[x] == undefined){
            delete obj[x];
           }
    }
    return obj;
}
console.log(del());

//6. Get a nested value from an object like obj.user.name.first.

function nest(){
    const obj = {
        f_name : "Vraj",
        l_name : "Patel",
        age : 20,
        obj1 :{
               maruti : 'Grand vitara',
               hundai : 'Creta',
               Mahindta : 'XUV 700'
        }
    }
    return obj.obj1.hundai;
}
console.log(nest());

//7.Change a nested value inside an object.
function changeNest(){
       const obj = {
        f_name : "Vraj",
        l_name : "Patel",
        age : 20,
        obj1 :{
               maruti : 'Grand vitara',
               hundai : 'Creta',
               Mahindta : 'XUV 700'
        }
    }
    return obj.obj1.hundai='verna';
}
console.log(changeNest());

//8.Find the length of an array that’s inside an object like obj.friends.
function length(){
    const obj= {
         f_name : "Vraj",
        l_name : "Patel",
        age : 20,
        friends : ['rahul','vijay','virat']
    }
    return obj.friends.length;
}
console.log(length());

//9.Add a value to an array that’s inside an object.
function add(){
      const obj= {
         f_name : "Vraj",
        l_name : "Patel",
        age : 20,
        friends : ['rahul','vijay','virat']
    }
    obj.friends[obj.friends.length] = 'Rohit';
    return obj.friends;
}
console.log(add());
 
//10.Rename some keys in an object using a mapping.
function rename(){
const obj = {
        f_name : "Vraj",
        l_name : "Patel",
        age : 20
}
const obj2 ={
    f_name : 'first_name',
    l_name : "last_name",
   
}
return Object.fromEntries(Object.entries(obj).map(([key,value])=>
      [obj2[key] || key,value]
))
}
console.log(rename());

// 11.Turn "a=1,b=2" into an object like { a: "1", b: "2" }.
function object(){
 let string = "a=1,b=2"
 let res = Object.fromEntries(
    string.split(',').map(value => value.split('='))
 )
 return res;
}
console.log(object())

//12.Flatten one level of a nested object (e.g. { a: { b: 1 } } → { 'a.b': 1 }).
function convert(){
    const obj = {
        a:{
            b:1
        }

    }
    let res = Obje

    }
