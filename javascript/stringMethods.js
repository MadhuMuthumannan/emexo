// string length
const technology = 'Angular';
console.log(technology.length);
console.dir(String);

// character in position using 'at'
console.log(technology.at(1));

// print only the even characters
for (let i = 0; i < technology.length; i++) {
  if (i % 2 === 0) {
    console.log(technology.at(i));
  }
}

// concatenate two string using 'concat'
const firstName = 'Parvathy';
const secondName = ' Chandran';
const fullName = firstName.concat(secondName);
console.log(fullName);

// ends with
console.log(firstName.endsWith('y'));

// includes
const sentence = 'Happy Birthday to you Suji !';
console.log(sentence.indexOf('S'));
const firstPart = sentence.substring(0, 21);
const secondPart = sentence.substring(23, sentence.length);

console.log(firstPart + ' R' + secondPart);
console.log(sentence.includes('Suji'));

console.log(sentence.replace('Suji', 'suji'));

// creates an array out of string
const sampleName = 'madhu'; // ['m', 'a'...]
console.log(sampleName.split(''));

const sampleStr = 'Happy,Birthday,to,you Suji !';
console.log(sampleStr.split(','));

const isString = (input) => typeof input === 'string';

console.log(isString('str'));
console.log(isString(12));
console.log(isString({}));

console.log('  some text  '.trim());

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join('_'));
