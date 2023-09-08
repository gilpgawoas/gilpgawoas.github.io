<?php
$json = leeJson();
$saludo = $json->saludo;
$nombre = $json->nombre;
$resultado =
 "{$saludo} {$nombre}.";
return $resultado;
