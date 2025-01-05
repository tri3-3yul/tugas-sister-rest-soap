<?php
require_once 'db.php';

class MahasiswaService
{
    // Create Mahasiswa
    public function createMahasiswa($nama, $nim, $jurusan)
    {
        global $conn;
        $stmt = $conn->prepare("INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)");
        $stmt->execute([$nama, $nim, $jurusan]);
        return "Mahasiswa added successfully.";
    }

    // Read Mahasiswa
    public function getMahasiswa()
    {
        global $conn;
        $stmt = $conn->query("SELECT * FROM mahasiswa");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update Mahasiswa
    public function updateMahasiswa($id, $nama, $nim, $jurusan)
    {
        global $conn;
        $stmt = $conn->prepare("UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?");
        $stmt->execute([$nama, $nim, $jurusan, $id]);
        return "Mahasiswa updated successfully.";
    }

    // Delete Mahasiswa
    public function deleteMahasiswa($id)
    {
        global $conn;
        $stmt = $conn->prepare("DELETE FROM mahasiswa WHERE id = ?");
        $stmt->execute([$id]);
        return "Mahasiswa deleted successfully.";
    }

    // Create Mata Kuliah
    public function createMataKuliah($nama_mk, $sks, $kode)
    {
        global $conn;
        $stmt = $conn->prepare("INSERT INTO mata_kuliah (nama_mk, sks, kode) VALUES (?, ?, ?)");
        $stmt->execute([$nama_mk, $sks, $kode]);
        return "Mata kuliah added successfully.";
    }

    // Read Mata Kuliah
    public function getMataKuliah()
    {
        global $conn;
        $stmt = $conn->query("SELECT * FROM mata_kuliah");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
