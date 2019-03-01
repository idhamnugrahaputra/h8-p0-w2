function balikKata(kata) {
  var Split = kata.split('').reverse().join('')
  return Split
}

// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
