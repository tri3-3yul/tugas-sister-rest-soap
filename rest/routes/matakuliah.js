const express = require('express');
const router = express.Router();
const db = require('../db');

// Get semua mata kuliah
router.get('/', (req, res) => {
    db.query('SELECT * FROM mata_kuliah', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get mata kuliah berdasarkan ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM mata_kuliah WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

// Tambah mata kuliah
router.post('/', (req, res) => {
    const { nama_mk, sks, kode } = req.body;
    db.query(
        'INSERT INTO mata_kuliah (nama_mk, sks, kode) VALUES (?, ?, ?)', 
        [nama_mk, sks, kode], 
        (err, results) => {
            if (err) throw err;
            res.status(201).json({ id: results.insertId, nama_mk, sks, kode });
    });
});

// Update mata kuliah
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nama_mk, sks, kode } = req.body;
    db.query(
        'UPDATE mata_kuliah SET nama_mk = ?, sks = ?, kode = ? WHERE id = ?', 
        [nama_mk, sks, kode, id], 
        (err) => {
            if (err) throw err;
            res.json({ id, nama_mk, sks, kode });
    });
});

// Hapus mata kuliah
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM mata_kuliah WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.status(204).send();
    });
});

module.exports = router;
