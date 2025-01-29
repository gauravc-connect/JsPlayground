const _ = require("lodash")
//Find the Most Frequent Character in a String

function mostFrequentChar (str){
   const inputString = (str.split(' ').join('').toLowerCase());
   
   let charObj = {};
   let key = '';
   let count = 0;

   for (let char of inputString){
    charObj[char] = (charObj[char] || 0) + 1;
    if(charObj[char] > count){
        key = char;
        count = charObj[char];
    }

   }
   console.log("charObj =>", charObj);
   console.log("key =>", key);
   console.log("count =>", count);

   const entries = Object.entries(charObj).sort();



   console.log("------------------------------entries"+entries.sort());
   
   return key;
}

console.log(mostFrequentChar("Javascript is greatttt"));