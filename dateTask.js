// Task1- Create a JavaScript program that displays:
//    Today’s full date and time using toString()
//    Just the date using toDateString()
//    Just the time using toTimeString()
{
let fullTime = new Date().toString();
console.log(fullTime);
let date = new Date().toDateString();
console.log(date);
let time = new Date().toTimeString();
console.log(time);
}

{
// TAsk-2 input 2025-06-12T10.30.25
//  output 12 june, 2025 10.30 AM
let input = "2025-06-12T13.30.25";
input = input.replace("T"," ").replaceAll(".",":")
let date = new Date(input);
let day = date.getDate();
let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// let month = date.toLocaleString("en-US",{
//     month : "long"
// })
let wholeMonth = month[date.getMonth()] 
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let ampm ;
 hour>=12 ? ampm = 'PM' : ampm = 'AM'
console.log(`${day} ${wholeMonth}, ${year} ${hour}:${min} ${ampm}`);
}

//Task4 - input Today: 12 June 2025
//   output 1 : 7 days from now: 19 June 2025
//   output 2 : 30 days ago: 13 May 2025
{
let date = new Date(2025,5,12);
console.log(`Initial date: ${date.toDateString()}`);
 date.setDate(date.getDate()+7);
 let res = date;
console.log(`Date after 7 days: ${res.toDateString()}`);

let date1 = new Date(2025,5,12);
console.log(`Initial date: ${date1.toDateString()}`);
 date1.setDate(date1.getDate()-30);
 let res1= date1;
console.log(`Date before 30 days: ${res1.toDateString()}`);
}

// Task-5 Convert UTC Time to IST and AUS
//   input = "2025-06-12T10:30:25Z"; 
//   output 1 : "12 June, 2025, 4:00 PM" (IST)
//   output 2 : "12 June, 2025, 8:00 PM" (AUS)

function time(){
    let input = "2025-06-12T10:30:25Z"; 
    let date = new Date(input);
    let ist =  date.toLocaleString("en-IN",{
       timeZone : "Asia/Kolkata",
       day : "2-digit",
       month : "long",
       year : "numeric",
       minute : "2-digit",
       hour : "numeric",
       hour12 : true
    })
       let aus =  date.toLocaleString("en-IN",{
       timeZone : "Australia/Sydney",
       day : "2-digit",
       month : "long",
       year : "numeric",
       minute : "2-digit",
       hour : "numeric",
       hour12 : true
    })
    console.log(ist)
    console.log(aus)
}
time();


let input = "2025-06-12T10:30:25Z";
let date = new Date(input);

let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function time2(date){
 let day = date.getDate()
let wholeMonth = month[date.getMonth()] 
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let ampm ;
 hour>=12 ? ampm = 'PM' : ampm = 'AM'
 hour = hour % 12 || 12;
return`${day} ${wholeMonth}, ${year} ${hour}:${min} ${ampm}`;
}
//India Time
let ind = new Date(date);

//Aus Time
let aus = new Date(date);
 aus.setHours(aus.getHours() + 4);
 aus.setMinutes(aus.getMinutes() + 30)
console.log(time2(ind));
console.log(time2(aus));

