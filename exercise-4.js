var tanggal = 40;
var bulan = 8;
var tahun = 89374589374;

switch (true) {
  case (tanggal <= 0 || tanggal >= 32):
    tanggal = 'isi tanggal antara 1-31 || '
    break;
  default:
    tanggal;
    break;
}

switch (bulan) {
  case 1:
    bulan = 'januari';
    break;
  case 2:
    bulan = 'februari';
    break;
  case 3:
    bulan = 'maret';
    break;
  case 4:
    bulan = 'april';
    break;
  case 5:
    bulan = 'mei';
    break;
  case 6:
    bulan = 'juni';
    break;
  case 7:
    bulan = 'juli';
    break;
  case 8:
    bulan = 'agustus';
    break;
  case 9:
    bulan = 'september';
    break;
  case 10:
    bulan = 'october';
    break;
  case 11:
    bulan = 'november';
    break;
  case 12:
    bulan = 'desember';
    break;
  default:
    console.log('masukkan bulan 1 - 12');
}

switch (true) {
  case (tahun >= 2200 || tahun <= 1900):
    tahun = '|| masukkan tahun antara 1900 - 2200'
    break;
  default:
    tahun;
}

console.log(tanggal+' '+bulan+' '+tahun);
