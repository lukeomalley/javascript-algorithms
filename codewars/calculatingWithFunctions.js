function zero(operator) {
  return operator ? operator(0) : 0;
}
function one(operator) {
  return operator ? operator(1) : 1;
}
function two(operator) {
  return operator ? operator(2) : 2;
}
function three(operator) {
  return operator ? operator(3) : 3;
}
function four(operator) {
  return operator ? operator(4) : 4;
}
function five(operator) {
  return operator ? operator(5) : 5;
}
function six(operator) {
  return operator ? operator(6) : 6;
}
function seven(operator) {
  return operator ? operator(7) : 7;
}
function eight(operator) {
  return operator ? operator(8) : 8;
}
function nine(operator) {
  return operator ? operator(9) : 9;
}

function plus(num1, num2) {
  return num2 !== undefined ? num1 + num2 : num2 => plus(num1, num2);
}
function minus(num1, num2) {
  return num2 !== undefined ? num2 - num1 : num2 => minus(num1, num2);
}
function times(num1, num2) {
  return num2 !== undefined ? num1 * num2 : num2 => times(num1, num2);
}
function dividedBy(num1, num2) {
  return num2 !== undefined ? Math.floor(num2 / num1) : num2 => dividedBy(num1, num2);
}

console.log(five(times(seven())));
console.log(six(dividedBy(three())));
