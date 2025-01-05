<?php
$client = new SoapClient(null, [
    'location' => "http://localhost/soap_service/server.php",
    'uri' => "http://localhost/soap_service/server.php",
    'trace' => 1
]);

// Contoh: Create Mahasiswa
echo $client->createMahasiswa("John Doe", "123456", "Informatika");

// Contoh: Get Mahasiswa
print_r($client->getMahasiswa());

// Contoh: Update Mahasiswa
echo $client->updateMahasiswa(1, "Jane Doe", "654321", "Sistem Informasi");

// Contoh: Delete Mahasiswa
echo $client->deleteMahasiswa(1);
?>
