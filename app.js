//1. Declare and initialize an empty multidimensional array.
//(Array of arrays)

// var multy =[
//     [ ]
//     [ ]
//     [ ]
// ];

//2. Declare and initialize a multidimensional array
//representing the following matrix:
/*var mlti =[
    [0,1,2,3]
    [1,0,2,3]
    [2,1,0,1]
];
*/
//3. Write a program to print numeric counting from 1 to 10.
/*
for (var i = 1; i <= 10;i++){
    document.write(i +"<br>")
}
*/
/*4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/
// var input1 =+prompt ("Enter number to show its multiplication table");
// var input2 = +prompt ("Enter lenght multiplication table")
// for (var i =1; i <= input2.length; i++){
//    console.log(input1  * [i])
// }

/*
let tableNumber = parseInt(prompt("Enter the number for which you want to print the multiplication table: "));
let tableLength = parseInt(prompt("Enter the length of the multiplication table: "));
console.log(`Multiplication table for ${tableNumber}:`);
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
*/

/*
Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]
*/
/*
var fruits = ["Apple",'Banana',"mango","orange","strawberry"];
for (var i = 0 ; i < fruits.length;i++){
    console.log(fruits[i])
    document.write(`Element at index ${i} is ${fruits[i]} </br>}*/
/*
6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k  */

// var arr = ["Counting:",1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + ",")
// }

// document.write("<h3> Reverse counting:</h1>")
// for (var i = 15; i >= 1; i--){
//     document.write(i+" ")
// }
//generating Even number 

// document.write("<h1>Even number:</h1>")
// for (var i = 0; i <=20 ; i +=2){
// document.write(i + " ")
// }
// document.write("<h1>Odd number:</h1>")
// for(var i = 1 ; i <20; i +=2){
//     document.write(i +" ")
// }

// document.write("<h1>Series number:</h1>")
// for (var i = 2; i <=20 ; i +=2){
//  document.write(i + "k"+" ")
// }

/*You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.
*/

var A = ["orangee","banana","strawberry",];
var userInput = prompt("enter what you wanna have");

    if (userInput===A[0]){
        alert("you can buy this one as it is available")
    }
    
    else if(userInput=== A[1])
       {alert("you can buy this one as it is available")
    }
    else if (userInput===A[2]){
        alert("you can buy this one as it is available")
    }
    else if(userInput===A[3]){
        alert("you can buy this one as it is available")
    }else("not found")