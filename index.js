var a = 20;
var b = 38;

function add(a, b) {
  return(a + b);
}
function subtract(b, a) {
  return(b - a);
}
function multiply(a, b) {
  return(a * b);
}
function divide(a, b) {
  return(a / b);
}
function inc(n) {
  n ++;
  return(n);
}
function dec(n) {
  n--;
  return(n);
}
function makeInt(n) {
<<<<<<< HEAD
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
=======
  parseInt('n', 10);
  return("n");
}
function preserveDecimal(n) {
  parseFloat(n);
  return(n);
>>>>>>> cf10751dd66aa0bac83c6892c38a5084daa8a3ae
}