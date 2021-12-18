import {Computer} from './Computer.js';
class Macbook extends Computer {

    constructor(name,company){
        super(name);  // this will execute constructor of compute class
        this.company=company;
    }
  
    login(){
        console.log(" You are login into a mackook"+this.name);
    }
  
}

export default Macbook;