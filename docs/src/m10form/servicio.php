<?php

$saludo = leeTexto("saludo");
$nombre = leeTexto("nombre");
if ($saludo === "") {
 throw new Exception(
  "Falta el saludo"
 );
}
if ($nombre === "") {
 throw new Exception(
  "Falta el nombre"
 );
}
$resultado =
 "{$saludo} {$nombre}.";
return $resultado;
