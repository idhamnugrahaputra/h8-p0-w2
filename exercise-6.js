//soal 1 :
// console.log('LOOPING PERTAMA');
// var x = 1;
// while (x <= 20) {
//   console.log(x + ' ' + '-' + ' I LOVE CODING');
//   x++;
// }
// or
// var y = 0;
// while (y < 20) {
//   console.log(y + 1 + ' ' + '-' + ' I LOVE CODING');
//   y += 1
// }
// console.log('LOOPING KEDUA');
// var z = 20;
// while (z > 0){
//   console.log(z + ' ' + '-' + ' I LOVE CODING');
//   z = z - 1;
// }

//soal 2 :
// console.log('LOPING PERTAMA');
// for (var i = 1; i <= 20; i++) {
//   console.log(i + ' ' + '-' + ' I LOVE CODING');
// }
// console.log('LOOPING KEDUA');
// for (var i = 20; i >= 1; i--) {
//   console.log(i + ' ' + '-' + ' I LOVE CODING');
// }

//soal 3 :
//ganjil & genap
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log('GENAP');
//   }else {
//     console.log('GANJIL');
//   }
// }

// counter: 2
// for (var i = 1; i <= 100; i = i + 2) {
//   if (i % 3 === 0) {
//     console.log(i +' KELIPATAN 3');
//   }else {
//     console.log('');
//   }
// }
// counter : 5
// for (var i = 1; i <= 100; i += 5) {
//   if (i % 6 === 0) {
//     console.log(i + ' KELIPATAN 6');
//   }else {
//     console.log('');
//   }
// }
// counter : 9
for (var i = 1; i <= 100; i+= 9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
  }else {
    console.log('i');
  }
}
