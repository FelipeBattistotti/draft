// global scope
var number = 7;

function twoAdder(){
  // function scope
  var increasedNumber = number + 2;
  console.log(number, increasedNumber);
}

console.log(number);
console.log(increasedNumber);
