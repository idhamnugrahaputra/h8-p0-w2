console.log('soal 1 :');
var rows1 = 5;
for (var i = 1; i <= rows1; i++) {
  console.log('*');
}
console.log('\n');

console.log('soal 2 :');
var rows2 = 5
for(var i = 1; i <= rows2; i++) {
  let x = ''
  for(var j = 1; j<= rows2; j++){
    x = x + '*'
  }
  console.log(x);
}
console.log('\n');

console.log('soal 3 :');
var rows3 = 5
for(var i=1; i<=rows3; i++) {
  let bintang = ''
  for(var j=1; j<=i; j++){
    bintang += '*'
  }
  console.log(bintang);
}
