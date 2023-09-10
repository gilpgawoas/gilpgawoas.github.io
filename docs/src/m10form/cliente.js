try {
 const resultado = await submit(
  evt, "srv/SrvProcesa.php",
  forma)
 alert(resultado)
} catch (e) {
 muestraError(e)
}