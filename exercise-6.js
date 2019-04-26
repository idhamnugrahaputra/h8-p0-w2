console.log(soal 1 :) :
console.log('LOOPING PERTAMA');
var x = 1;
while (x <= 20) {
  if (x % 2 == 0) {
    console.log(x + ' ' + '-' + ' I LOVE CODING');
  }
  x++;
}

console.log('LOOPING KEDUA');
var z = 20;
while (z > 0){
  if (z % 2 == 0) {
    console.log(z + ' ' + '-' + ' I will become fullstack developer');
  }
  z = z - 1;
}
console.log('\n');

console.log('soal 2 :')
console.log('LOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
  console.log(i + ' ' + '-' + ' I LOVE CODING');
}
console.log('LOOPING KEDUA');
for (var i = 20; i >= 1; i--) {
  console.log(i + ' ' + '-' + ' I will become fullstack developer');
}
console.log('\n');

console.log('soal 3 :')
console.log("ganjil & genap")
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log('GENAP');
  }else {
    console.log('GANJIL');
  }
}
console.log('\n');

console.log("counter: 2")
for (var i = 1; i <= 100; i = i + 2) {
  if (i % 3 === 0) {
    console.log(i +' KELIPATAN 3');
  }else {
    console.log('');
  }
}
console.log('\n');

console.log("counter : 5")
for (var i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6');
  }else {
    console.log('');
  }
}
console.log('\n');

console.log("counter : 9")
for (var i = 1; i <= 100; i+= 9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
  }else {
    console.log('');
  }
}
