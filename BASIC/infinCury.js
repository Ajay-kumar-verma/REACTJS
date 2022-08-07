const add=(a) => {
  return (b)=>{
     if(b) return add(a+b);
      return a; 
  } 
   

}

let sum=add(4)(4)(4)(6)();

console.log(sum)