console.log('use method :')
function balikKata(kata) {
  return kata.split('').reverse().join('')
}

// // TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
console.log('\n');

console.log('use looping :')
function balikKata(kata) {
  var result = ''
  for (var i = kata.length-1; i >= 0; i--) {
    result += kata[i]
  }
  return result
}

// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
