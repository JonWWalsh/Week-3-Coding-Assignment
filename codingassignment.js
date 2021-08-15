// 1a.
// const ages = [3, 9, 23, 64, 2, 8, 28, 93];
// ages.push(21);
// var a = ages[0]
// var b = ages[ages.length - 1]
// console.log(b - a);

// function average(ages) {
//     var sum = 0;
//     for(var i = 0; i < array.length;i++){
//         sum += array[i];
//     }
//    return sum / array.length;
// }

// 2
// const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// // let lengths = names.map(function(element) {
// //    return element.length;
// //  });
// // console.log(lengths);
// // let average = lengths.reduce(function(accumulator, currentValue) {
// //     return accumulator + currentValue;
// // });
// // console.log(average / lengths.length);
// // console.log(names.join(" ")); //2b

// let nameLengths = [names.length];
// for(var i = 0; i < names.length; i++)  {
//     nameLengths[i] = names[i].length;
// }
// console.log(nameLengths);

// let sum = nameLengths.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }); console.log(sum);

// function wordFunction(word, n) {
//     var repeatedString = "";
//     while (n > 0) {
//         repeatedString += word;
//         n--;
//     }
//     return repeatedString;
// }
// wordFunction("Coding", 4);
// console.log(wordFunction("Coding", 4));

//8
// function createFullName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
// createFullName("Jon", "Walsh");

//9
//const numbers = [1, 54, 22, 67, 9, 40];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }); if(sum > 100) {
//     sum = true;
// } console.log(sum);

//10
// const numbers = [1, 54, 22, 67, 9, 40];
// let avg = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(avg / numbers.length);

//11
// const numbers = [5, 57, 36, 67, 19, 88];
// let avg = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(avg / numbers.length);

// const num = [7, 33, 42, 66, 20, 99];
// let average = num.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(average / num.length);
// if(avg > average) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//12
// var moneyInPocket = 12;
// var isHotOutside = 70;
// function willBuyDrink(temp, money) {
    
// if(isHotOutside >= 85) { 
//         temp = true;
// }
// if (moneyInPocket > 10.50) {
//     money = true;
// }
//     if( money == true && temp == true){
//         willBuyDrink = true;
//     }  else{
//         willBuyDrink = false;
//     }
// } 
// willBuyDrink();
// console.log(willBuyDrink);

//13
//This code takes in to account how much tv time my son has had and if he has done his
//worksheets in order to determine if he can watch any more tv today.
var tvTime = 1;
var workSheetDone = true;
function canWatchTV(tv, hw) {    
if(tvTime < 3){ 
        tv = true;
}
if(workSheetDone = true) {
    hw = true;
} else {
    hw = false;
}
    if(tvTime == true && workSheetDone == true){
        canWatchTV = true;
    }  else{
        canWatchTV = false;
    }
} 
canWatchTV();
console.log(canWatchTV);