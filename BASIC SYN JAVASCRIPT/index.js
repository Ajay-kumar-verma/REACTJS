class Computer{

constructor(name){
    this.name=name;
}

run(){
    console.log("the compute is now running ...!");
   }

}


class Macbook extends Computer {

  constructor(name,company){
      super(name);  // this will execute constructor of compute class
      this.company=company;
  }

  login(){
      console.log(" You are login into a mackook"+this.name);
  }


}


const mcbk=new Macbook('Air','Apple');


mcbk.login();
mcbk.run();

