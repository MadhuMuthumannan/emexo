console.log('Async methods');
console.log('timeout and interval');
const timeout = setTimeout(() => {
  //   console.log('cleared');
}, 3000);
clearTimeout(timeout);

let counter = 0;

const interval = setInterval(() => {
  counter++;
  //   console.log(counter);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

// callback function
let sum = 10;
function addAndPrint(num, callback) {
  sum = sum + num;
  callback();
}

var print = function () {
  console.log(sum);
};

addAndPrint(10, print);

// promise
const prom = new Promise((resolve, reject) => {
  debugger;
  if (5 > 10) {
    setTimeout(() => {
      resolve('Resolved');
    }, 1000);
  } else {
    reject('Rejected');
  }
});

prom
  .then((val) => {
    console.log(val);
  })
  .catch((val) => {
    console.log(val);
  });

// async await
// https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj
