console.log(global); // undefined
if (true) {
  var global = 'Global Declaration';
}

(function () {
  console.log(result);
  let result = 'result';
})();

// Compilation phase
// creates variable called global

// execution phase
// line number 1 => undefined
// assign 'Global Declaration' to global
// line number 7 => code will break result is not defined
