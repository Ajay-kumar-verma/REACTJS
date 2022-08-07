let ob="ABCDEFG";

ob=Array.from(ob);

ob=new Set([4,3,2,6,7,5,4,3,8,7,4]);
ob=Array.from(ob);

for(let i of ob)
 console.log(i);

console.log(Object.keys(ob))
