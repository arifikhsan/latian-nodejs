// normal function statement
function sayHi() {
  console.log('hi');
}

sayHi();

// function expression
let saybye = function() {
  console.log('bye');
};

saybye();

function callFunction(fun) {
  fun();
}

callFunction(saybye);
