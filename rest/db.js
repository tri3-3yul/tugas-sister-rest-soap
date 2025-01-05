const mysql = require('mysql');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // kosongkan jika default
    database: 'tugas_sister'
});

// Hubungkan ke database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;
