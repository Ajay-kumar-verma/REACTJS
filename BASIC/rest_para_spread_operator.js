// rest parameter
const add=(...data)=>{
  let sum=parseInt(0);  
 console.log(data)

  for(let x of data)
  {
   sum+=parseInt(x);
//    console.log(sum)
  }
   
   return sum;

}

console.log(add(4,5,6,5))

// Rest parameter is used to take a variable number of arguments and turns into an array 
// while the spread operator takes an array or an object and spreads it


let x=[2,3,6,5,1,78,2]

let y=x // it get refer 

y=[...x]  //get copied data
