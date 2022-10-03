// Import library
const fs = require('fs');

// Membaca file lama
const oldFIleContent = fs.readFileSync('sod_file_lama.txt', 'utf-8');
console.debug("Content dari file: \n" + oldFIleContent);

// Menuliskan ulang isi file lama ke file baru
fs.writeFileSync('sod_file_lama_cpy.txt', oldFIleContent, 'utf-8');