var nama = '';
var peran = 'kesatria';

if(nama == '') {
  console.log('nama harus diisi');
} else if(nama != '' && peran == '' || peran != 'kesatria' || peran != 'tabib' || peran != 'penyihir') {
  console.log('Halo '+ nama+ ', ' + "Pilih peranmu untuk memulai game!");
}else if (nama != '' && peran == 'kesatria') {
  console.log('Halo '+ peran+ ' ' + nama + ','+' kamu dapat menyerang dengan senjatamu.');
}else if (nama != '' && peran == 'tabib') {
  console.log('Halo '+ peran+ ' ' + nama + ','+' kamu akan membantu temanmu yang terluka.');
}else if (nama != '' && peran == 'penyihir') {
  console.log('Halo '+ peran+ ' ' + nama + ','+' ciptakan keajaiban yang membantu kemenanganmu!');
}
