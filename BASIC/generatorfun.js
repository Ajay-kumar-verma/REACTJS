
function* num(){
 
// for(let i=0;i<3;i++)
//    yield i;
   
yield 4;
yield 5;
yield 10;
yield 321;
yield 09;

} 


let fun=num();

console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())