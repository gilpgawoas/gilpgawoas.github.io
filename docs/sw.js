/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "2.14"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/arquitectura_saludo.svg",
   "/img/arquitectura_soa.svg",
   "/img/clases_saludo.svg",
   "/img/clases_uno_a_uno_flechas.svg",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono2048.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/IEEE_754_Double_Floating_Point_Format.svg",
   "/img/m01awoas/Imagen1.png",
   "/img/m02servicio/serviciodistribucion.drawio.svg",
   "/img/m03soa/arquitectura_soa.svg",
   "/img/m03soa/capas_soa.svg",
   "/img/m03soa/mensajes_soap.svg",
   "/img/m10bd/bddistribucion.drawio.svg",
   "/img/m10bd/bdentity.drawio.svg",
   "/img/m11ws/chatdistribucion.drawio.svg",
   "/img/marcas.svg",
   "/img/mensajes_soap.svg",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01awoas/",
   "/m01awoas/index.html",
   "/m01awoas/mAnube.html",
   "/m01awoas/mBaw.html",
   "/m01awoas/mCservicio.html",
   "/m01awoas/mDtipos.html",
   "/m01awoas/mEoferta.html",
   "/m01awoas/mFmasUsados.html",
   "/m01awoas/mGaoas.html",
   "/m01awoas/mHawoas.html",
   "/m01awoas/mImashups.html",
   "/m01awoas/print.html",
   "/m02servicio/",
   "/m02servicio/index.html",
   "/m02servicio/mAdeploy.html",
   "/m02servicio/mAfuncionamiento/",
   "/m02servicio/mAfuncionamiento/index.html",
   "/m02servicio/mAfuncionamiento/m1wearables.html",
   "/m02servicio/mAfuncionamiento/m2asistentes.html",
   "/m02servicio/mAfuncionamiento/m3arduino.html",
   "/m02servicio/mAfuncionamiento/m4consolas.html",
   "/m02servicio/mAfuncionamiento/m5celulares.html",
   "/m02servicio/mAfuncionamiento/m6tablets.html",
   "/m02servicio/mAfuncionamiento/m7laptops.html",
   "/m02servicio/mAfuncionamiento/m8desktops.html",
   "/m02servicio/mAfuncionamiento/print.html",
   "/m02servicio/mAinstrucciones.html",
   "/m02servicio/mBarchivos.html",
   "/m02servicio/mBindexHtml.html",
   "/m02servicio/mCservicioPhp.html",
   "/m02servicio/print.html",
   "/m03soa/",
   "/m03soa/index.html",
   "/m03soa/mAsoa.html",
   "/m03soa/mBventajas.html",
   "/m03soa/mCprincipios.html",
   "/m03soa/mDcapas.html",
   "/m03soa/mEdiagrama.html",
   "/m03soa/mFxml.html",
   "/m03soa/mGdefXml.html",
   "/m03soa/mHejXml.html",
   "/m03soa/mIdtdXml.html",
   "/m03soa/mJsoap.html",
   "/m03soa/mKdefSoap.html",
   "/m03soa/mLestrSoap.html",
   "/m03soa/mMsolSoap.html",
   "/m03soa/mNrespSoap.html",
   "/m03soa/mOwsdl.html",
   "/m03soa/mPdefWsdl.html",
   "/m03soa/mQelemWsdl.html",
   "/m03soa/mRejemWsdl.html",
   "/m03soa/mSuddi.html",
   "/m03soa/mTdefUddi.html",
   "/m03soa/mUrest.html",
   "/m03soa/mVdefRest.html",
   "/m03soa/mWestrRest.html",
   "/m03soa/print.html",
   "/m04geolocalizacion.html",
   "/m05sociales.html",
   "/m06ecommerce/",
   "/m06ecommerce/index.html",
   "/m06ecommerce/mAfacilidad.html",
   "/m06ecommerce/mBnoDestaca.html",
   "/m06ecommerce/mCfacil.html",
   "/m06ecommerce/mDpopulares.html",
   "/m06ecommerce/mEdetalle.html",
   "/m06ecommerce/print.html",
   "/m07servicios/",
   "/m07servicios/index.html",
   "/m07servicios/mAfunError/",
   "/m07servicios/mAfunError/index.html",
   "/m07servicios/mAfunError/m1wearables.html",
   "/m07servicios/mAfunError/m2asistentes.html",
   "/m07servicios/mAfunError/m3arduino.html",
   "/m07servicios/mAfunError/m4consolas.html",
   "/m07servicios/mAfunError/m5celulares.html",
   "/m07servicios/mAfunError/m7laptops.html",
   "/m07servicios/mAfunError/m8desktops.html",
   "/m07servicios/mAfunError/print.html",
   "/m07servicios/mAinstrucciones.html",
   "/m07servicios/mBarchivos.html",
   "/m07servicios/mCjsconfigJson.html",
   "/m07servicios/mDejecutaJs.html",
   "/m07servicios/mEmuestraErrorJs.html",
   "/m07servicios/mFMethodJs.html",
   "/m07servicios/mGenviaJsonJs.html",
   "/m07servicios/mHsubmitJs.html",
   "/m07servicios/mIindexHtml.html",
   "/m07servicios/mJleeValorPhp.html",
   "/m07servicios/mKleeJsonPhp.html",
   "/m07servicios/mLServicioPhp.html",
   "/m07servicios/mMSrvErrorPhp.html",
   "/m07servicios/mNSrvResultadoPhp.html",
   "/m07servicios/mOSrvJsonPhp.html",
   "/m07servicios/mPSrvProcesaPhp.html",
   "/m07servicios/print.html",
   "/m08renderCliente/",
   "/m08renderCliente/index.html",
   "/m08renderCliente/mAinstrucciones.html",
   "/m08renderCliente/mBarchivos.html",
   "/m08renderCliente/mCSrvListaPhp.html",
   "/m08renderCliente/mDrenderJs.html",
   "/m08renderCliente/mEindexHtml.html",
   "/m08renderCliente/mFjsconfigJson.html",
   "/m08renderCliente/mGServicioPhp.html",
   "/m08renderCliente/print.html",
   "/m09renderServidor/",
   "/m09renderServidor/index.html",
   "/m09renderServidor/mAinstrucciones.html",
   "/m09renderServidor/mBarchivos.html",
   "/m09renderServidor/mCSrvRenderPhp.html",
   "/m09renderServidor/mDindexHtml.html",
   "/m09renderServidor/mEjsconfigJson.html",
   "/m09renderServidor/mFejecutaJs.html",
   "/m09renderServidor/mGmuestraErrorJs.html",
   "/m09renderServidor/mHServicioPhp.html",
   "/m09renderServidor/print.html",
   "/m10bd/",
   "/m10bd/index.html",
   "/m10bd/m01aer.html",
   "/m10bd/m01bdeploy.html",
   "/m10bd/m01instrucciones.html",
   "/m10bd/m02archivos.html",
   "/m10bd/m03textos.html",
   "/m10bd/m04txtConfirmaEliminacionJs.html",
   "/m10bd/m05txtFaltaElIdPhp.html",
   "/m10bd/m06txtFaltaElNombrePhp.html",
   "/m10bd/m07txtPasatiempoNoEncontradoPhp.html",
   "/m10bd/m08bd.html",
   "/m10bd/m09PasatiempoPhp.html",
   "/m10bd/m10bdCreaPhp.html",
   "/m10bd/m11AccesoBdPhp.html",
   "/m10bd/m12listado.html",
   "/m10bd/m13pasatiempoConsultaPhp.html",
   "/m10bd/m14SrvPasatiempos.html",
   "/m10bd/m15indexHtml.html",
   "/m10bd/m16agrega.html",
   "/m10bd/m17pasatiempoAgregaPhp.html",
   "/m10bd/m18SrvPasatiempoAgrega.html",
   "/m10bd/m19agregaHtml.html",
   "/m10bd/m20modifica.html",
   "/m10bd/m21pasatiempoBuscaPhp.html",
   "/m10bd/m22pasatiempoModificaPhp.html",
   "/m10bd/m23pasatiempoEliminaPhp.html",
   "/m10bd/m24SrvPasatiempoBusca.html",
   "/m10bd/m25SrvPasatiempoModifica.html",
   "/m10bd/m26SrvPasatiempoElimina.html",
   "/m10bd/m27modificaHtml.html",
   "/m10bd/m28frecuentes.html",
   "/m10bd/m29jsconfigJson.html",
   "/m10bd/m30ejecutaJs.html",
   "/m10bd/m31muestraErrorJs.html",
   "/m10bd/m32submitJs.html",
   "/m10bd/m33leeValorPhp.html",
   "/m10bd/m34ServicioPhp.html",
   "/m10bd/m35listaCss.html",
   "/m10bd/print.html",
   "/m11ws/",
   "/m11ws/index.html",
   "/m11ws/mAdeploy.html",
   "/m11ws/mAinstrucciones.html",
   "/m11ws/mBphpmensajes.html",
   "/m11ws/mCarchivos.html",
   "/m11ws/mDEventosPhp.html",
   "/m11ws/mEmainPhp.html",
   "/m11ws/mFhtmlmensajes.html",
   "/m11ws/mGindexHtml.html",
   "/m11ws/print.html",
   "/m12streaming.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03soa/1ejemploXml.xml",
   "/src/m03soa/2dtdXml.xml",
   "/src/m03soa/3_solicitud_soap.xml",
   "/src/m03soa/4_respuesta_soap.xml",
   "/src/m03soa/5_wsdl.xml",
   "/src/m04geolocalizacion/maps.html",
   "/src/m05sociales/face.html",
   "/src/m11ws/composer.zip",
   "/src/m12streaming/youtube.html" ]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}