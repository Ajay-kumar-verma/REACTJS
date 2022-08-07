// x = 23; // Gives reference error

// let x;


// function anotherRandomFunc(){
//   message = "Hello"; // Throws a reference error

//   let message;
// }
// anotherRandomFunc();



// Above code will throw an Error
// ----------------------------------



x = 23; // Gives reference error

var x;


function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error

  var message;
}
anotherRandomFunc();