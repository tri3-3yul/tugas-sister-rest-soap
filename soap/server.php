<?php
require_once 'MahasiswaService.php';

$service = new MahasiswaService();
$server = new SoapServer(null, ['uri' => "http://localhost/soap_service/server.php"]);
$server->setObject($service);
$server->handle();
?>
