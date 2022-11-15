console.log(result);
const result = addTen(subtractFive(50));

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

// console.log(result);

// Compilation phase
// var result = undefined
// var addTen = function
// var subtractFive = function

// execution phase
// undefined
// line number 12 => prints 55
