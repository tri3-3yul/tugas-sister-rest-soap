const express = require('express');
const router = express.Router();
const db = require('../db');

// Get semua mahasiswa
router.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get mahasiswa berdasarkan ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

// Tambah mahasiswa
router.post('/', (req, res) => {
    const { nama, nim, jurusan } = req.body;
    db.query(
        'INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)', 
        [nama, nim, jurusan], 
        (err, results) => {
            if (err) throw err;
            res.status(201).json({ id: results.insertId, nama, nim, jurusan });
    });
});

// Update mahasiswa
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nama, nim, jurusan } = req.body;
    db.query('UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?', 
    [nama, nim, jurusan, id], 
    (err) => {
        if (err) throw err;
        res.json({ id, nama, nim, jurusan });
    });
});

// Hapus mahasiswa
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.status(204).send();
    });
});

module.exports = router;
