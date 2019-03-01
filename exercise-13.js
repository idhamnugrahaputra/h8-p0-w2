function xo(str) {
  var x = []
  var o = []
  var newStr = str.split('')// split

  for (var i = 0; i < newStr.length; i++){
    if (newStr[i] == 'x'){
      x.push(newStr[i])
    }

    if (newStr[i] == 'o') {
      o.push(newStr[i])
    }
  }

  if (x.length == o.length) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
