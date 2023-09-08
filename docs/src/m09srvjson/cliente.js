const datos = {
 saludo: "Hola",
 nombre: "pp"
}
const resultado =
 await enviaJson(datos,
  MetodoHttp.POST,
  "srv/SrvJson.php")
alert(resultado)