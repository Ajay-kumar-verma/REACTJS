// It update direct to real DOM 
setInterval(()=>{
    const d1=document.getElementById("div1");

d1.innerHTML=`
<h2>Ajay kumar verma </h2>
<input type='text'  /><br/>
${new Date().toLocaleTimeString()} 
`
},1000)





// It update first in Virtual dom 
// then compare to real dom and update to .difference 

const d2=document.getElementById('div2');
const root= ReactDOM.createRoot(d2);

setInterval(()=>{
const div=React.createElement('div',null,
React.createElement('h2',null,"Ajay kumar verma"),
React.createElement('h2',null,"Rahul Singha"),
React.createElement('input',{type:'text'},null),
React.createElement('p',null, new Date().toLocaleTimeString(),
React.createElement('h2',null,"Ravi Singha")
),
)
    root.render(div)

},1000)
// we can render only one component in React
