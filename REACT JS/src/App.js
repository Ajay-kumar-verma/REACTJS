// import './App.css';
// import Form from './Topic/Form'
// import Form1 from './Topic/Form1';
//  import Routing from './Topic/Routing'
// import UseState from './Topic/UseState';
// import UseEffect from './Topic/UseEffect';
// import RefForm from './Topic/RefForm';
// import Context  from './Topic/Context.js';
// import Material from './Topic/MaterialIcon';
// import LifeCycle from './Topic/LifeCycle.js';
// import UseEffect2 from './Topic/UseEffect2';
  // import SimpleGrd from './Chakra/Layout/SimpleGrd'
// import Grd from './Chakra/Layout/Grd'
//  import  Flx from './Chakra/Layout/Flx'
// import {Btn} from './Chakra/Form/Btn'
// import Ckbx from './Chakra/Form/Ckbx';
// import Fmcnt from './Chakra/Form/Fmcnt';
// import Input from './Chakra/Form/Input.js';
//  import {Rspsv} from './Chakra/Layout/Rspsv.js';
import {useState, useEffect} from 'react';
 
function App() {

  let [firstSignal,setfirstSignal] =  useState("red");
  let [seconSignal,setSecongSignal] =  useState("green");
  let [time,settime]=useState(15); 
  




useEffect(() => {
  let bool=true;
  let x=  setInterval(()=>{
    settime(time--); 
   
    
  if(time==-2){
      
    if(bool){
      setfirstSignal("green");
      setSecongSignal("red");
      settime(15);
      bool=false;
    }
    else{ 
      setfirstSignal("red");
      setSecongSignal("green");
      settime(15);
      bool=true;  
    }

      }    
  
  if(time==9){
     setfirstSignal("yellow");
     setSecongSignal("yellow");
  }
  
  if(time==-1){
     setfirstSignal("green");
     setSecongSignal("red");
  }


  
  },1000)
  
return (()=>{
  clearInterval(x);
})



})



  return (
   <>
   {/* <Form  /> */}
   {/* <Form1 /> */}
   {/* {<Routing />} */}
    {/* <UseState  /> */}
   {/* <UseEffect  /> */}
   {/* <UseEffect2  /> */}
  {/* <RefForm  /> */}
  {/* < Context  /> */}
   {/* <Material /> */}
   {/* <LifeCycle /> */}
   {/* <SimpleGrd  /> */}
   {/* <Grd   /> */}
   {/* <Flx />  */}
  {/* <Btn /> */}
{/* <Ckbx /> */}
  {/* <Fmcnt  /> */}
  {/* <Input /> */}

{/* <Rspsv  /> */}
   <br/>
   











  <p>{time}</p>
  <p>{firstSignal}</p>
     <br/>
   <p>{time}</p>
  <p>{seconSignal}</p>
     















   </>
   
    );
}

export default App;
