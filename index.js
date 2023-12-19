// Synclovis company

//RestApi
//Virtual Dom
//useEffectt
//null and undefined
//var and let/
//when we use arrow function
//inharitance
//why main in java
//advantage of frameworks

// input = 'DDRRRRPPKLL';
// Output = "D2R4P2K1L2"

// initi count =1
//initi resultstring =' '
// loop input i
// i === i+1
//count++
//resultstring+= i+count> 1
// count=1

function occuranceFunc(input) {
  if (!input) {
    return ''; // Return an empty string for an empty input
  }
  let resultstring = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      resultstring += input[i] + (count > 1 ? count : '');
      count = 1;
    }
  }
  return resultstring;
}
input = 'DDRRRRPPKLL';
const result = occuranceFunc(input);
console.log(result);
console.log('hello');
