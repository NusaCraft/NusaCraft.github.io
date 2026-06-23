const express = require('express');
const app = express();

// Menyimpan status pembayaran sementara (False = belum bayar, True = sudah bayar)
let paymentStatus = false;

// Mengizinkan akses file statis langsung dari folder tempat server.js berada (ditandai titik .)
app.use(express.static('.'));

// Endpoint untuk mengecek status pembayaran dari frontend
app.get('/api/check-payment', (req, res) => {
    res.json({ isPaid: paymentStatus });
});

// --- TOMBOL SIMULASI KASIR ---
// Akses http://localhost:3000/simulasisukses untuk memicu tulisan BERHASIL
app.get('/simulasisukses', (req, res) => {
    paymentStatus = true;
    res.send('<h1>Simulasi Pembayaran Berhasil Diaktifkan</h1><p>Silakan kembali ke halaman kasir.</p>');
});

// Reset status kembali ke awal
app.get('/reset', (req, res) => {
    paymentStatus = false;
    res.send('Status pembayaran telah di-reset menjadi menunggu pembayaran.');
});

app.listen(3000, () => {
    console.log('Server kasir berjalan di http://localhost:3000');
});
