// Task-1-Write a function that takes a string as input and returns the string reversed.

function reverse(){

    let str = 'hello';
    let str2 = '';


    for(let i= str.length-1; i>=0;i--){
        
       str2 = str2+ str[i];

    }
    console.log(str2);
}

reverse();

//Task2- Create a function that counts the number of vowels in a string.

function vowel(){
    let str= 'hello world';
    let count =0;

    for(let i=0; i<=str.length-1;i++){
         
        if(str[i].toLowerCase()=='a' || str[i].toLowerCase()=='e' || str[i].toLowerCase()=='i'|| str[i].toLowerCase()=='o' || str[i].toLowerCase()=='u'){

            count++;
        }
        
    }
    console.log('The number of vowels in the strings are ',count);
}

vowel();

//Task3-Write a function that takes a sentence and returns the sentence with each word capitalized.

function capitalized(){
    let str = 'hello world from javascript';
    let str2= str.split(" ");
   
   let res =  str2.map((el)=>{
        return el[0].toUpperCase() + el.slice(1);
    }).join(" ");

    return res;

}
    console.log(capitalized());

//Task4-Create a function that checks if a given string is a palindrome (reads the same forward and backward, ignoring spaces and case).

function palindrom(){
    let str = 'A man a plan a canal Panama';
    let str2='';
        for(let i= str.length-1; i>=0;i--){
           if(str[i]!== " "){
             str2 = str2 + str[i];
           }
        }
        str2 = str2.toLowerCase();
    // let str2 = str.replaceAll(" ",'').toLowerCase();
    let str3 = '';
    for(let i= str2.length-1; i>=0;i--){
       str3 = str3+ str2[i];
    }
    console.log(str3);
   if(str2 === str3){
    return true;
   }
   else{
     return false;
   }
}
palindrom();


//Task5-Write a function that returns the longest word in a sentence.
function findLongestWord(){
    let str = "I am learning JavaScript string methods";
    let str2 = str.split(" ");
    let count='';
    for(let ele of str2){
        if(ele.length>count.length){
            count = ele;
        }
    }
        console.log(count);
}
findLongestWord();

//Task6-Create a function that repeats a given string n times without using the .repeat() method.
function repeat(str,n){
    let res='';
    for(let i=0; i<n; i++){
     res = res + str;
    }
   return res;
}
console.log(repeat('abc',3));

//Task7- Write a function that removes duplicate characters from a string.
function duplicate(){
    let str = 'javascript';
    let res = '';
    for(let i=0; i<=str.length-1;i++){
        if(!res.includes(str[i])){
        res = res+str[i];
        }
    }
return res;
}
console.log(duplicate());

//Task-8-Create a function that counts the number of occurrences of a specific character in a string.
function countChar(ch){
    let str='hello world';
    let count=0;
    for(let i=0; i<=str.length-1; i++){    
        if(str[i]== ch){
            count++;
        }
    }
    return count;
}
console.log(countChar('l'));

//Task9-Write a function that replaces all spaces in a string with a specific character (e.g., replace spaces with underscores).
function replaceSpace(){
    let str = 'My name is vraj';
    let str2= '';
    for(let i=0; i<=str.length-1;i++){
        if(str[i]==' '){
             str2= str2+'_';
        }
        else{
            str2= str2+str[i];
        }
    }
    console.log(str2);
}
replaceSpace();

//Task10-Write a function that extracts the domain name from a given URL string.
function extractDomain(url) {
    let withoutProtocol = url.replace("https://", "").replace("http://", "");
    let domain = withoutProtocol.split("/")[0];
  
    if (domain.startsWith("www.")) {
        domain = domain.slice(4);
    }   
    return domain;
}
console.log(extractDomain("http://example.com/path?name=value"));

//Task11-Write a function that takes a sentence as input and converts it to camelCase format.
 // Output: "helloWorldFromJavaScript"
function camelCase(){
    let str = 'hello world from javascript';
    let str2= str.split(" ");
    let res =  str2.map((el,index)=>{
    if(index === 0){
        return el.toLowerCase();
    }
        return el[0].toUpperCase() + el.slice(1);
    }).join("");
   return res;
}
  console.log(camelCase());

  //Task12-Write a function that finds and returns the most frequent character in a string. If multiple characters have the same frequency, return any one of them.
 // Output: "a" (or another character that appears most frequently)

function frequency(str){
    let res='';
    let max = 0;
    for(let i=0; i<=str.length-1; i++){
        let count=1;
        for(let j=i+1 ; j<=str.length-1; j++){
            if(str[i] === str[j]){
               count++;
            }
            if(count>max){
                max = count;
                res = str[i];
            }
        }
    }
    return res;
}
console.log(frequency('javascript'));

//Task13- Write a function that converts a numeric string (e.g., "1234") into words
 // Output: "one thousand two hundred thirty-four"






//Task14-14. Write a function that performs basic string compression using the counts of repeated characters. 
// If the compressed string is not shorter than the original, return the original string.
// "aabcccccaaa"; // Output: "a2b1c5a3
function compressed(str){
let str2='';
let count=1;
for(let i=0; i<=str.length-1;i++){
    if(str[i]== str[i+1]){
        count++;
    }
    else{
        str2 = str2+str[i]+count;
        count=1;
    }
}
if(str2.length<str.length){
    return str2;
}
else{
    return str;
}
}
console.log(compressed("aabcccccaaa"));

//Task15- Write a function that removes duplicate words from a sentence.
function removeDupli(str){
    let str1 = str.split(" ")
    let str2= [];
    for(let i=0; i<=str1.length-1; i++){
        if(!str2.includes(str1[i])){
          str2.push(str1[i]);
        }
    }
     let res = str2.join(" ");
     return res;
}

console.log(removeDupli("this is is a test test"));
