// Type Coercion refers to the process of automatic or implicit conversion 
//of values from one data type to another

// -----------------------
// https://www.geeksforgeeks.org/what-is-type-coercion-in-javascript/
// ------------------------------



var x = 10 + '20';
var y = '20' + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + '10'

console.log(x,y,z);



var a1= 10 - '5';
var a2 = 10 * '5';
var a3 = 10 / '5';
var a4 = 10 % 'y5';
var a5= '10'+'20'; 
var a6=60-'a';
console.log(a1,a2,a3,a4,a5,a6);

// boolean to num

var p = true + '2';
  
   // The Boolean value false is
   // converted to number 0 and
   // then operation is performed
var q = true + 2;
 var r=false+5; 
console.log(p,q,r)



console.log("5*6+9")

console.log(false||true,true||false,false||67,false||"AJAY");
console.log(false&&true,true&&false,false&&67,true&&"AJAY");

