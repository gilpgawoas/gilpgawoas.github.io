/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "3.24"

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
   "/img/m07srverror/srverrordistribucion.drawio.svg",
   "/img/m08srvresultado/srvresultadodistribucion.drawio.svg",
   "/img/m09srvjson/srvjsondistribucion.drawio.svg",
   "/img/m10form/srvformdistribucion.drawio.png",
   "/img/m11renderCliente/renclientedistribucion.drawio.svg",
   "/img/m12renderServidor/renserverdistribucion.drawio.svg",
   "/img/m13bd/bddistribucion.drawio.svg",
   "/img/m13bd/bdentity.drawio.svg",
   "/img/m13bd/bdpaquetes.drawio.svg",
   "/img/m13bd/bqrel.drawio.svg",
   "/img/m14chat/chatdistribucion.drawio.svg",
   "/img/m15chatserio/chatseriodistribucion.drawio.svg",
   "/img/m17auno/aunodeploy.drawio.svg",
   "/img/m17auno/aunoder.drawio.svg",
   "/img/m17auno/aunopaquetes.drawio.svg",
   "/img/m17auno/aunorel.drawio.svg",
   "/img/m17aut/sesiondistribucion.drawio.svg",
   "/img/m17aut/sesionentity.drawio.svg",
   "/img/m18amuchos/amuchosdeploy.drawio.svg",
   "/img/m18amuchos/amuchosder.drawio.svg",
   "/img/m18amuchos/amuchospaquetes.drawio.svg",
   "/img/m18amuchos/amuchosrel.drawio.svg",
   "/img/m19aut/autdeploy.drawio.svg",
   "/img/m19aut/autder.drawio.svg",
   "/img/m19aut/autpaquetes.drawio.svg",
   "/img/m19aut/autrel.drawio.svg",
   "/img/m20archivos/archivosdeploy.drawio.svg",
   "/img/m20archivos/archivosder.drawio.svg",
   "/img/m20archivos/archivospaquetes.drawio.svg",
   "/img/m20archivos/archivosrel.drawio.svg",
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
   "/m02servicio/mAintro.html",
   "/m02servicio/mBdeploy.html",
   "/m02servicio/mCfuncionamiento/",
   "/m02servicio/mCfuncionamiento/index.html",
   "/m02servicio/mCfuncionamiento/m1cliente.html",
   "/m02servicio/mCfuncionamiento/m2invoca.html",
   "/m02servicio/mCfuncionamiento/m3procesa.html",
   "/m02servicio/mCfuncionamiento/m4devuelve.html",
   "/m02servicio/mCfuncionamiento/m5verifica.html",
   "/m02servicio/mCfuncionamiento/m6recupera.html",
   "/m02servicio/mCfuncionamiento/m7muestra.html",
   "/m02servicio/mCfuncionamiento/m8termina.html",
   "/m02servicio/mCfuncionamiento/print.html",
   "/m02servicio/mDinstrucciones.html",
   "/m02servicio/mEarchivos.html",
   "/m02servicio/mFindexHtml.html",
   "/m02servicio/mGservicioPhp.html",
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
   "/m07srverror/",
   "/m07srverror/index.html",
   "/m07srverror/mAintro.html",
   "/m07srverror/mBejecuta.html",
   "/m07srverror/mCmuestraerror.html",
   "/m07srverror/mDservicio.html",
   "/m07srverror/mEdeploy.html",
   "/m07srverror/mFfunError/",
   "/m07srverror/mFfunError/index.html",
   "/m07srverror/mFfunError/m1cliente.html",
   "/m07srverror/mFfunError/m2servidor.html",
   "/m07srverror/mFfunError/m3procesa.html",
   "/m07srverror/mFfunError/m4devuelve.html",
   "/m07srverror/mFfunError/m5catch.html",
   "/m07srverror/mFfunError/m6muestraerror.html",
   "/m07srverror/mFfunError/m7termina.html",
   "/m07srverror/mFfunError/print.html",
   "/m07srverror/mGinstrucciones.html",
   "/m07srverror/mHarchivos.html",
   "/m07srverror/mIindexHtml.html",
   "/m07srverror/mJSrvErrorPhp.html",
   "/m07srverror/mKjsconfigJson.html",
   "/m07srverror/mLejecutaJs.html",
   "/m07srverror/mMmuestraErrorJs.html",
   "/m07srverror/mNautoloadPhp.html",
   "/m07srverror/mOpathPhp.html",
   "/m07srverror/mPservicioPhp.html",
   "/m07srverror/print.html",
   "/m08srvresultado/",
   "/m08srvresultado/index.html",
   "/m08srvresultado/mAintro.html",
   "/m08srvresultado/mBdeploy.html",
   "/m08srvresultado/mCfunRecibe/",
   "/m08srvresultado/mCfunRecibe/index.html",
   "/m08srvresultado/mCfunRecibe/m1cliente.html",
   "/m08srvresultado/mCfunRecibe/m2servidor.html",
   "/m08srvresultado/mCfunRecibe/m3procesa.html",
   "/m08srvresultado/mCfunRecibe/m4devuelve.html",
   "/m08srvresultado/mCfunRecibe/m5muestra.html",
   "/m08srvresultado/mCfunRecibe/m6termina.html",
   "/m08srvresultado/mCfunRecibe/print.html",
   "/m08srvresultado/mDinstrucciones.html",
   "/m08srvresultado/mEarchivos.html",
   "/m08srvresultado/mFindexHtml.html",
   "/m08srvresultado/mGSrvResultadoPhp.html",
   "/m08srvresultado/mHjsconfigJson.html",
   "/m08srvresultado/mIejecutaJs.html",
   "/m08srvresultado/mJmuestraErrorJs.html",
   "/m08srvresultado/mKautoloadPhp.html",
   "/m08srvresultado/mLpathPhp.html",
   "/m08srvresultado/mMservicioPhp.html",
   "/m08srvresultado/print.html",
   "/m09srvjson/",
   "/m09srvjson/index.html",
   "/m09srvjson/mAintro.html",
   "/m09srvjson/mBenviaJson.html",
   "/m09srvjson/mCleeJson.html",
   "/m09srvjson/mDdeploy.html",
   "/m09srvjson/mEfunJson/",
   "/m09srvjson/mEfunJson/index.html",
   "/m09srvjson/mEfunJson/m1cliente.html",
   "/m09srvjson/mEfunJson/m2acreaJson.html",
   "/m09srvjson/mEfunJson/m3servicio.html",
   "/m09srvjson/mEfunJson/m4aleeDatos.html",
   "/m09srvjson/mEfunJson/m5aprocesaDatos.html",
   "/m09srvjson/mEfunJson/m6response.html",
   "/m09srvjson/mEfunJson/m7devuelve.html",
   "/m09srvjson/mEfunJson/m8muestra.html",
   "/m09srvjson/mEfunJson/m9termina.html",
   "/m09srvjson/mEfunJson/print.html",
   "/m09srvjson/mFinstrucciones.html",
   "/m09srvjson/mGarchivos.html",
   "/m09srvjson/mHindexHtml.html",
   "/m09srvjson/mISrvJsonPhp.html",
   "/m09srvjson/mJenviaJsonJs.html",
   "/m09srvjson/mKMethodoHttpJs.html",
   "/m09srvjson/mLleeJsonPhp.html",
   "/m09srvjson/mMjsconfigJson.html",
   "/m09srvjson/mNejecutaJs.html",
   "/m09srvjson/mOmuestraErrorJs.html",
   "/m09srvjson/mPautoloadPhp.html",
   "/m09srvjson/mQpathPhp.html",
   "/m09srvjson/mRservicioPhp.html",
   "/m09srvjson/print.html",
   "/m10form/",
   "/m10form/index.html",
   "/m10form/mAintro.html",
   "/m10form/mBsubmit.html",
   "/m10form/mCleeTexto.html",
   "/m10form/mDdeploy.html",
   "/m10form/mEfunFormError/",
   "/m10form/mEfunFormError/index.html",
   "/m10form/mEfunFormError/m10termina.html",
   "/m10form/mEfunFormError/m1captura.html",
   "/m10form/mEfunFormError/m2submit.html",
   "/m10form/mEfunFormError/m3invoca.html",
   "/m10form/mEfunFormError/m4leeDatos.html",
   "/m10form/mEfunFormError/m5validaDatos.html",
   "/m10form/mEfunFormError/m6aborta.html",
   "/m10form/mEfunFormError/m7devuelve.html",
   "/m10form/mEfunFormError/m8throwCliente.html",
   "/m10form/mEfunFormError/m9muestra.html",
   "/m10form/mEfunFormError/print.html",
   "/m10form/mFfunFormOk/",
   "/m10form/mFfunFormOk/index.html",
   "/m10form/mFfunFormOk/m10muestra.html",
   "/m10form/mFfunFormOk/m11termina.html",
   "/m10form/mFfunFormOk/m1captura.html",
   "/m10form/mFfunFormOk/m2submit.html",
   "/m10form/mFfunFormOk/m3invoca.html",
   "/m10form/mFfunFormOk/m4leeDatos.html",
   "/m10form/mFfunFormOk/m5validaSaludo.html",
   "/m10form/mFfunFormOk/m6validaNombre.html",
   "/m10form/mFfunFormOk/m7procesaDatos.html",
   "/m10form/mFfunFormOk/m8response.html",
   "/m10form/mFfunFormOk/m9devuelve.html",
   "/m10form/mFfunFormOk/print.html",
   "/m10form/mGinstrucciones.html",
   "/m10form/mHarchivos.html",
   "/m10form/mIindexHtml.html",
   "/m10form/mJSrvProcesaPhp.html",
   "/m10form/mKsubmitJs.html",
   "/m10form/mLleeTextoPhp.html",
   "/m10form/mMjsconfigJson.html",
   "/m10form/mNejecutaJs.html",
   "/m10form/mOMethodoHttpJs.html",
   "/m10form/mPmuestraErrorJs.html",
   "/m10form/mQautoloadPhp.html",
   "/m10form/mRpathPhp.html",
   "/m10form/mSservicioPhp.html",
   "/m10form/print.html",
   "/m11renderCliente/",
   "/m11renderCliente/index.html",
   "/m11renderCliente/mAintro.html",
   "/m11renderCliente/mBdeploy.html",
   "/m11renderCliente/mCinstrucciones.html",
   "/m11renderCliente/mDarchivos.html",
   "/m11renderCliente/mEindexHtml.html",
   "/m11renderCliente/mFrenderJs.html",
   "/m11renderCliente/mGSrvListaPhp.html",
   "/m11renderCliente/mHjsconfigJson.html",
   "/m11renderCliente/mIautoloadPhp.html",
   "/m11renderCliente/mJpathPhp.html",
   "/m11renderCliente/mKservicioPhp.html",
   "/m11renderCliente/print.html",
   "/m12renderServidor/",
   "/m12renderServidor/index.html",
   "/m12renderServidor/mAintro.html",
   "/m12renderServidor/mBdeploy.html",
   "/m12renderServidor/mCinstrucciones.html",
   "/m12renderServidor/mDarchivos.html",
   "/m12renderServidor/mEindexHtml.html",
   "/m12renderServidor/mFSrvRenderPhp.html",
   "/m12renderServidor/mGjsconfigJson.html",
   "/m12renderServidor/mHejecutaJs.html",
   "/m12renderServidor/mImuestraErrorJs.html",
   "/m12renderServidor/mJautoloadPhp.html",
   "/m12renderServidor/mKpathPhp.html",
   "/m12renderServidor/mLservicioPhp.html",
   "/m12renderServidor/print.html",
   "/m13bd/",
   "/m13bd/index.html",
   "/m13bd/mAintro.html",
   "/m13bd/mBder.html",
   "/m13bd/mBpaquetes.html",
   "/m13bd/mBrel.html",
   "/m13bd/mCdeploy.html",
   "/m13bd/mDinstrucciones.html",
   "/m13bd/mEarchivos.html",
   "/m13bd/mFjsconfigJson.html",
   "/m13bd/mGtextos/",
   "/m13bd/mGtextos/index.html",
   "/m13bd/mGtextos/mAintro.html",
   "/m13bd/mGtextos/mBtxtConfirmaEliminarJs.html",
   "/m13bd/mGtextos/mCtxtFaltaElNombrePhp.html",
   "/m13bd/mGtextos/mDtxtPasatiempoNoEncontradoPhp.html",
   "/m13bd/mGtextos/mEplantillaNoEsNumeroJs.html",
   "/m13bd/mGtextos/mFplantillaNoEsTextoJs.html",
   "/m13bd/mGtextos/print.html",
   "/m13bd/mHbd/",
   "/m13bd/mHbd/index.html",
   "/m13bd/mHbd/mAbdCreaPhp.html",
   "/m13bd/mHbd/mBpasatiempoPhp.html",
   "/m13bd/mHbd/mCaccesobdPhp.html",
   "/m13bd/mHbd/print.html",
   "/m13bd/mIlistados/",
   "/m13bd/mIlistados/index.html",
   "/m13bd/mIlistados/mAindexHtml.html",
   "/m13bd/mIlistados/mBSrvPasatiempoConsulta.html",
   "/m13bd/mIlistados/mCpasatiempoConsultaPhp.html",
   "/m13bd/mIlistados/print.html",
   "/m13bd/mJagregar/",
   "/m13bd/mJagregar/index.html",
   "/m13bd/mJagregar/mAagregaHtml.html",
   "/m13bd/mJagregar/mBSrvPasatiempoAgrega.html",
   "/m13bd/mJagregar/mCpasatiempoAgregaPhp.html",
   "/m13bd/mJagregar/print.html",
   "/m13bd/mKmodificar/",
   "/m13bd/mKmodificar/index.html",
   "/m13bd/mKmodificar/m21pasatiempoBuscaPhp.html",
   "/m13bd/mKmodificar/m22pasatiempoModificaPhp.html",
   "/m13bd/mKmodificar/m23pasatiempoEliminaPhp.html",
   "/m13bd/mKmodificar/m24SrvPasatiempoBusca.html",
   "/m13bd/mKmodificar/m25SrvPasatiempoModifica.html",
   "/m13bd/mKmodificar/m26SrvPasatiempoElimina.html",
   "/m13bd/mKmodificar/m27modificaHtml.html",
   "/m13bd/mKmodificar/print.html",
   "/m13bd/mLcustom/",
   "/m13bd/mLcustom/index.html",
   "/m13bd/mLcustom/m35boton-agregarJs.html",
   "/m13bd/mLcustom/m36boton-eliminarJs.html",
   "/m13bd/mLcustom/m37boton-guardarJs.html",
   "/m13bd/mLcustom/m38campo-id-ocultoJs.html",
   "/m13bd/mLcustom/m39campo-nombre-cargandoJs.html",
   "/m13bd/mLcustom/m40campo-nombreJs.html",
   "/m13bd/mLcustom/m41hipervinculo-agregar-agregaJs.html",
   "/m13bd/mLcustom/m42hipervinculo-cancelar-indexJs.html",
   "/m13bd/mLcustom/m43indica-campos-obligatoriosJs.html",
   "/m13bd/mLcustom/m44indicador-cargandoJs.html",
   "/m13bd/mLcustom/m45lista-principalJs.html",
   "/m13bd/mLcustom/print.html",
   "/m13bd/mMlibjs/",
   "/m13bd/mMlibjs/index.html",
   "/m13bd/mMlibjs/m48confirmaEliminarJs.html",
   "/m13bd/mMlibjs/m49ejecutaJs.html",
   "/m13bd/mMlibjs/m50escuchaEventosAgregaJs.html",
   "/m13bd/mMlibjs/m51escuchaEventosModificaJs.html",
   "/m13bd/mMlibjs/m52MetodoHttpJs.html",
   "/m13bd/mMlibjs/m53muestraErrorJs.html",
   "/m13bd/mMlibjs/m54muestraNumeroJs.html",
   "/m13bd/mMlibjs/m55muestraRenderJs.html",
   "/m13bd/mMlibjs/m56muestraTextoJs.html",
   "/m13bd/mMlibjs/m57parametrosDePaginaJs.html",
   "/m13bd/mMlibjs/m58saltaAIndexJs.html",
   "/m13bd/mMlibjs/m59submitJs.html",
   "/m13bd/mMlibjs/print.html",
   "/m13bd/mNlibphp/",
   "/m13bd/mNlibphp/index.html",
   "/m13bd/mNlibphp/mLleeTextoPhp.html",
   "/m13bd/mNlibphp/mQautoloadPhp.html",
   "/m13bd/mNlibphp/mRpathPhp.html",
   "/m13bd/mNlibphp/mSservicioPhp.html",
   "/m13bd/mNlibphp/mTleeEnteroPhp.html",
   "/m13bd/mNlibphp/mUleeSinEspaciosInFinPhp.html",
   "/m13bd/mNlibphp/mVrecibeFetchAllPhp.html",
   "/m13bd/mNlibphp/mWvalidaPhp.html",
   "/m13bd/mNlibphp/mXvalidaNombreNoVacioPhp.html",
   "/m13bd/mNlibphp/mYvalidaTextoNoVacioPhp.html",
   "/m13bd/mNlibphp/print.html",
   "/m13bd/print.html",
   "/m14chat/",
   "/m14chat/index.html",
   "/m14chat/mAdeploy.html",
   "/m14chat/mBinstrucciones.html",
   "/m14chat/mCchathtml/",
   "/m14chat/mCchathtml/index.html",
   "/m14chat/mCchathtml/m43indica-campos-obligatoriosJs.html",
   "/m14chat/mCchathtml/m44indicador-cargandoJs.html",
   "/m14chat/mCchathtml/m53errorEnWebSocketJs.html",
   "/m14chat/mCchathtml/m53muestraErrorJs.html",
   "/m14chat/mCchathtml/mAarchivos.html",
   "/m14chat/mCchathtml/mAindexHtml.html",
   "/m14chat/mCchathtml/mBtxtConectadoJs.html",
   "/m14chat/mCchathtml/mBtxtConexionTerminadaJs.html",
   "/m14chat/mCchathtml/mBtxtErrorEnLaConexionJs.html",
   "/m14chat/mCchathtml/print.html",
   "/m14chat/mDchatwss/",
   "/m14chat/mDchatwss/index.html",
   "/m14chat/mDchatwss/mAarchivos.html",
   "/m14chat/mDchatwss/mBReplit.html",
   "/m14chat/mDchatwss/mCreplitNix.html",
   "/m14chat/mDchatwss/mDComposerJson.html",
   "/m14chat/mDchatwss/mEChatPhp.html",
   "/m14chat/mDchatwss/mFmainPhp.html",
   "/m14chat/mDchatwss/mQautoloadPhp.html",
   "/m14chat/mDchatwss/mRpathPhp.html",
   "/m14chat/mDchatwss/print.html",
   "/m14chat/print.html",
   "/m15chatserio/",
   "/m15chatserio/index.html",
   "/m15chatserio/mAdeploy.html",
   "/m15chatserio/mBinstrucciones.html",
   "/m15chatserio/mCchatseriohtml/",
   "/m15chatserio/mCchatseriohtml/index.html",
   "/m15chatserio/mCchatseriohtml/m43indica-campos-obligatoriosJs.html",
   "/m15chatserio/mCchatseriohtml/m44indicador-cargandoJs.html",
   "/m15chatserio/mCchatseriohtml/m53errorEnWebSocketJs.html",
   "/m15chatserio/mCchatseriohtml/m53muestraErrorJs.html",
   "/m15chatserio/mCchatseriohtml/mAarchivos.html",
   "/m15chatserio/mCchatseriohtml/mAindexHtml.html",
   "/m15chatserio/mCchatseriohtml/mBtxtConectadoJs.html",
   "/m15chatserio/mCchatseriohtml/mBtxtConexionTerminadaJs.html",
   "/m15chatserio/mCchatseriohtml/mBtxtErrorEnLaConexionJs.html",
   "/m15chatserio/mCchatseriohtml/print.html",
   "/m15chatserio/mDchatseriowss/",
   "/m15chatserio/mDchatseriowss/index.html",
   "/m15chatserio/mDchatseriowss/mAarchivos.html",
   "/m15chatserio/mDchatseriowss/mBReplit.html",
   "/m15chatserio/mDchatseriowss/mCreplitNix.html",
   "/m15chatserio/mDchatseriowss/mDComposerJson.html",
   "/m15chatserio/mDchatseriowss/mDtxtAdministradorPhp.html",
   "/m15chatserio/mDchatseriowss/mDtxtCastigadoPhp.html",
   "/m15chatserio/mDchatseriowss/mDtxtPerdonamePhp.html",
   "/m15chatserio/mDchatseriowss/mEchatserioPhp.html",
   "/m15chatserio/mDchatseriowss/mFmainPhp.html",
   "/m15chatserio/mDchatseriowss/mQautoloadPhp.html",
   "/m15chatserio/mDchatseriowss/mRpathPhp.html",
   "/m15chatserio/mDchatseriowss/print.html",
   "/m15chatserio/print.html",
   "/m16streaming.html",
   "/m17auno/",
   "/m17auno/index.html",
   "/m17auno/mAintro.html",
   "/m17auno/mBder.html",
   "/m17auno/mBpaquetes.html",
   "/m17auno/mBrel.html",
   "/m17auno/mCdeploy.html",
   "/m17auno/mDinstrucciones.html",
   "/m17auno/mEarchivos.html",
   "/m17auno/mFjsconfigJson.html",
   "/m17auno/mGtextos/",
   "/m17auno/mGtextos/index.html",
   "/m17auno/mGtextos/mAintro.html",
   "/m17auno/mGtextos/mBtxtConfirmaEliminarJs.html",
   "/m17auno/mGtextos/mCtxtFaltaElNombrePhp.html",
   "/m17auno/mGtextos/mDtxtAmigoNoEncontradoPhp.html",
   "/m17auno/mGtextos/mDtxtFutbolPhp.html",
   "/m17auno/mGtextos/mDtxtSinPasatiempoPhp.html",
   "/m17auno/mGtextos/mDtxtVideojuegosPhp.html",
   "/m17auno/mGtextos/mEplantillaNoEsNumeroJs.html",
   "/m17auno/mGtextos/mFplantillaNoEsTextoJs.html",
   "/m17auno/mGtextos/print.html",
   "/m17auno/mHbd/",
   "/m17auno/mHbd/index.html",
   "/m17auno/mHbd/mAbdCreaPhp.html",
   "/m17auno/mHbd/mBamigoPhp.html",
   "/m17auno/mHbd/mBdescargaPasatiempoOpcionesJs.html",
   "/m17auno/mHbd/mBpasatiempoPhp.html",
   "/m17auno/mHbd/mCaccesobdPhp.html",
   "/m17auno/mHbd/mCleePasatiempoPhp.html",
   "/m17auno/mHbd/mCpasatiempoAgregaPhp.html",
   "/m17auno/mHbd/mCpasatiempoConsultaPhp.html",
   "/m17auno/mHbd/mDSrvPasatiempoOpciones.html",
   "/m17auno/mHbd/print.html",
   "/m17auno/mIlistados/",
   "/m17auno/mIlistados/index.html",
   "/m17auno/mIlistados/mAindexHtml.html",
   "/m17auno/mIlistados/mBSrvAmigoConsulta.html",
   "/m17auno/mIlistados/mCamigoConsultaPhp.html",
   "/m17auno/mIlistados/print.html",
   "/m17auno/mJagregar/",
   "/m17auno/mJagregar/index.html",
   "/m17auno/mJagregar/mAagregaHtml.html",
   "/m17auno/mJagregar/mBSrvAmigoAgrega.html",
   "/m17auno/mJagregar/mCamigoAgregaPhp.html",
   "/m17auno/mJagregar/print.html",
   "/m17auno/mKmodificar/",
   "/m17auno/mKmodificar/index.html",
   "/m17auno/mKmodificar/m21amigoBuscaPhp.html",
   "/m17auno/mKmodificar/m22amigoModificaPhp.html",
   "/m17auno/mKmodificar/m23amigoEliminaPhp.html",
   "/m17auno/mKmodificar/m24SrvAmigBusca.html",
   "/m17auno/mKmodificar/m25SrvAmigoModifica.html",
   "/m17auno/mKmodificar/m26SrvAmigoElimina.html",
   "/m17auno/mKmodificar/m27modificaHtml.html",
   "/m17auno/mKmodificar/print.html",
   "/m17auno/mLcustom/",
   "/m17auno/mLcustom/index.html",
   "/m17auno/mLcustom/m35boton-agregarJs.html",
   "/m17auno/mLcustom/m36boton-eliminarJs.html",
   "/m17auno/mLcustom/m37boton-guardarJs.html",
   "/m17auno/mLcustom/m38campo-id-ocultoJs.html",
   "/m17auno/mLcustom/m39campo-nombre-cargandoJs.html",
   "/m17auno/mLcustom/m40campo-nombreJs.html",
   "/m17auno/mLcustom/m41hipervinculo-agregar-agregaJs.html",
   "/m17auno/mLcustom/m42hipervinculo-cancelar-indexJs.html",
   "/m17auno/mLcustom/m43indica-campos-obligatoriosJs.html",
   "/m17auno/mLcustom/m44indicador-cargandoJs.html",
   "/m17auno/mLcustom/m45lista-principalJs.html",
   "/m17auno/mLcustom/mAcampo-pasatiempoJs.html",
   "/m17auno/mLcustom/print.html",
   "/m17auno/mMlibjs/",
   "/m17auno/mMlibjs/index.html",
   "/m17auno/mMlibjs/m48confirmaEliminarJs.html",
   "/m17auno/mMlibjs/m49ejecutaJs.html",
   "/m17auno/mMlibjs/m50escuchaEventosAgregaJs.html",
   "/m17auno/mMlibjs/m51escuchaEventosModificaJs.html",
   "/m17auno/mMlibjs/m52MetodoHttpJs.html",
   "/m17auno/mMlibjs/m53muestraErrorJs.html",
   "/m17auno/mMlibjs/m53muestraForaneaNumericaJs.html",
   "/m17auno/mMlibjs/m54muestraNumeroJs.html",
   "/m17auno/mMlibjs/m55muestraRenderJs.html",
   "/m17auno/mMlibjs/m56muestraTextoJs.html",
   "/m17auno/mMlibjs/m57parametrosDePaginaJs.html",
   "/m17auno/mMlibjs/m58saltaAIndexJs.html",
   "/m17auno/mMlibjs/m59submitJs.html",
   "/m17auno/mMlibjs/print.html",
   "/m17auno/mNlibphp/",
   "/m17auno/mNlibphp/index.html",
   "/m17auno/mNlibphp/mLleeTextoPhp.html",
   "/m17auno/mNlibphp/mQautoloadPhp.html",
   "/m17auno/mNlibphp/mRpathPhp.html",
   "/m17auno/mNlibphp/mSservicioPhp.html",
   "/m17auno/mNlibphp/mTleeEnteroPhp.html",
   "/m17auno/mNlibphp/mTleeForaneaPhp.html",
   "/m17auno/mNlibphp/mUleeSinEspaciosInFinPhp.html",
   "/m17auno/mNlibphp/mVrecibeFetchAllPhp.html",
   "/m17auno/mNlibphp/mWvalidaPhp.html",
   "/m17auno/mNlibphp/mXvalidaNombreNoVacioPhp.html",
   "/m17auno/mNlibphp/mYvalidaTextoNoVacioPhp.html",
   "/m17auno/mNlibphp/print.html",
   "/m17auno/print.html",
   "/m18amuchos/",
   "/m18amuchos/index.html",
   "/m18amuchos/mAintro.html",
   "/m18amuchos/mBder.html",
   "/m18amuchos/mBpaquetes.html",
   "/m18amuchos/mBrel.html",
   "/m18amuchos/mCdeploy.html",
   "/m18amuchos/mDinstrucciones.html",
   "/m18amuchos/mEarchivos.html",
   "/m18amuchos/mFjsconfigJson.html",
   "/m18amuchos/mGtextos/",
   "/m18amuchos/mGtextos/index.html",
   "/m18amuchos/mGtextos/mAintro.html",
   "/m18amuchos/mGtextos/mBtxtConfirmaEliminarJs.html",
   "/m18amuchos/mGtextos/mCtxtFaltaElIdPhp.html",
   "/m18amuchos/mGtextos/mDtxtAdministraElSistemaPhp.html",
   "/m18amuchos/mGtextos/mDtxtUsuarioNoEncontradoPhp.html",
   "/m18amuchos/mGtextos/mEplantillaNoEsNumeroJs.html",
   "/m18amuchos/mGtextos/mFplantillaNoEsTextoJs.html",
   "/m18amuchos/mGtextos/mFtxtFaltaElCuePhp.html",
   "/m18amuchos/mGtextos/mGtxtFaltaLaDescripcionPhp.html",
   "/m18amuchos/mGtextos/mHtxtNoEsUnRolPhp.html",
   "/m18amuchos/mGtextos/mItxtRealizaComprasPhp.html",
   "/m18amuchos/mGtextos/print.html",
   "/m18amuchos/mHbd/",
   "/m18amuchos/mHbd/index.html",
   "/m18amuchos/mHbd/mAbdCreaPhp.html",
   "/m18amuchos/mHbd/mBrolPhp.html",
   "/m18amuchos/mHbd/mBusuarioPhp.html",
   "/m18amuchos/mHbd/mCaccesobdPhp.html",
   "/m18amuchos/mHbd/mDSrvRolOpciones.html",
   "/m18amuchos/mHbd/mEcreaArrayDeRolesPhp.html",
   "/m18amuchos/mHbd/mFrolAgregaPhp.html",
   "/m18amuchos/mHbd/mGrolConsultaPhp.html",
   "/m18amuchos/mHbd/mHusuRolAgregaPhp.html",
   "/m18amuchos/mHbd/mIusuRolConsultaPhp.html",
   "/m18amuchos/mHbd/mJusuRolEliminaPhp.html",
   "/m18amuchos/mHbd/print.html",
   "/m18amuchos/mIlistados/",
   "/m18amuchos/mIlistados/index.html",
   "/m18amuchos/mIlistados/mAindexHtml.html",
   "/m18amuchos/mIlistados/mBSrvUsuarioConsulta.html",
   "/m18amuchos/mIlistados/mCusuarioConsultaPhp.html",
   "/m18amuchos/mIlistados/print.html",
   "/m18amuchos/mJagregar/",
   "/m18amuchos/mJagregar/index.html",
   "/m18amuchos/mJagregar/mAagregaHtml.html",
   "/m18amuchos/mJagregar/mBSrvUsuarioAgrega.html",
   "/m18amuchos/mJagregar/mCusuarioAgregaPhp.html",
   "/m18amuchos/mJagregar/print.html",
   "/m18amuchos/mKmodificar/",
   "/m18amuchos/mKmodificar/index.html",
   "/m18amuchos/mKmodificar/m21usuarioBuscaPhp.html",
   "/m18amuchos/mKmodificar/m22usuarioModificaPhp.html",
   "/m18amuchos/mKmodificar/m23usuarioEliminaPhp.html",
   "/m18amuchos/mKmodificar/m24SrvUsuarioBusca.html",
   "/m18amuchos/mKmodificar/m25SrvUsuarioModifica.html",
   "/m18amuchos/mKmodificar/m26SrvUsuarioElimina.html",
   "/m18amuchos/mKmodificar/m27modificaHtml.html",
   "/m18amuchos/mKmodificar/print.html",
   "/m18amuchos/mLcustom/",
   "/m18amuchos/mLcustom/index.html",
   "/m18amuchos/mLcustom/m35boton-agregarJs.html",
   "/m18amuchos/mLcustom/m36boton-eliminarJs.html",
   "/m18amuchos/mLcustom/m37boton-guardarJs.html",
   "/m18amuchos/mLcustom/m38campo-id-ocultoJs.html",
   "/m18amuchos/mLcustom/m41hipervinculo-agregar-agregaJs.html",
   "/m18amuchos/mLcustom/m42hipervinculo-cancelar-indexJs.html",
   "/m18amuchos/mLcustom/m43indica-campos-obligatoriosJs.html",
   "/m18amuchos/mLcustom/m44indicador-cargandoJs.html",
   "/m18amuchos/mLcustom/m45lista-principalJs.html",
   "/m18amuchos/mLcustom/mAcampo-cue-cargandoJs.html",
   "/m18amuchos/mLcustom/mBcampo-cueJs.html",
   "/m18amuchos/mLcustom/mCcampo-rolesJs.html",
   "/m18amuchos/mLcustom/print.html",
   "/m18amuchos/mMlibjs/",
   "/m18amuchos/mMlibjs/index.html",
   "/m18amuchos/mMlibjs/m48confirmaEliminarJs.html",
   "/m18amuchos/mMlibjs/m49ejecutaJs.html",
   "/m18amuchos/mMlibjs/m50escuchaEventosAgregaJs.html",
   "/m18amuchos/mMlibjs/m51escuchaEventosModificaJs.html",
   "/m18amuchos/mMlibjs/m52MetodoHttpJs.html",
   "/m18amuchos/mMlibjs/m53muestraErrorJs.html",
   "/m18amuchos/mMlibjs/m54muestraNumeroJs.html",
   "/m18amuchos/mMlibjs/m55muestraRenderJs.html",
   "/m18amuchos/mMlibjs/m56muestraTextoJs.html",
   "/m18amuchos/mMlibjs/m57parametrosDePaginaJs.html",
   "/m18amuchos/mMlibjs/m58saltaAIndexJs.html",
   "/m18amuchos/mMlibjs/m59submitJs.html",
   "/m18amuchos/mMlibjs/print.html",
   "/m18amuchos/mNlibphp/",
   "/m18amuchos/mNlibphp/index.html",
   "/m18amuchos/mNlibphp/mLleeTextoPhp.html",
   "/m18amuchos/mNlibphp/mQautoloadPhp.html",
   "/m18amuchos/mNlibphp/mRpathPhp.html",
   "/m18amuchos/mNlibphp/mSservicioPhp.html",
   "/m18amuchos/mNlibphp/mTleeArrayPhp.html",
   "/m18amuchos/mNlibphp/mTleeEnteroPhp.html",
   "/m18amuchos/mNlibphp/mUleeSinEspaciosInFinPhp.html",
   "/m18amuchos/mNlibphp/mVrecibeFetchAllPhp.html",
   "/m18amuchos/mNlibphp/mWvalidaPhp.html",
   "/m18amuchos/mNlibphp/mXvalidaIdNoVacioPhp.html",
   "/m18amuchos/mNlibphp/mYvalidaTextoNoVacioPhp.html",
   "/m18amuchos/mNlibphp/print.html",
   "/m18amuchos/print.html",
   "/m19aut/",
   "/m19aut/index.html",
   "/m19aut/mAintro.html",
   "/m19aut/mBder.html",
   "/m19aut/mBpaquetes.html",
   "/m19aut/mBrel.html",
   "/m19aut/mCdeploy.html",
   "/m19aut/mDinstrucciones.html",
   "/m19aut/mEarchivos.html",
   "/m19aut/mFjsconfigJson.html",
   "/m19aut/mGindexHtml.html",
   "/m19aut/mHperfilHtml.html",
   "/m19aut/mIloginHtml.html",
   "/m19aut/mJadminHtml.html",
   "/m19aut/mKclienteHtml.html",
   "/m19aut/mKSrvLoginPhp.html",
   "/m19aut/mLSrvSesionPhp.html",
   "/m19aut/mMSrvSaludoClientePhp.html",
   "/m19aut/mNSrvLogoutPhp.html",
   "/m19aut/mOconstantes/",
   "/m19aut/mOconstantes/index.html",
   "/m19aut/mOconstantes/mAintro.html",
   "/m19aut/mOconstantes/mBCUEJs.html",
   "/m19aut/mOconstantes/mCROL_ADMINISTRADORJs.html",
   "/m19aut/mOconstantes/mDROL_CLIENTEJs.html",
   "/m19aut/mOconstantes/mDROL_IDSJs.html",
   "/m19aut/mOconstantes/mECUEPhp.html",
   "/m19aut/mOconstantes/mFROL_ADMINISTRADORPhp.html",
   "/m19aut/mOconstantes/mFROL_CLIENTEPhp.html",
   "/m19aut/mOconstantes/mGROL_IDSPhp.html",
   "/m19aut/mOconstantes/print.html",
   "/m19aut/mPtextos/",
   "/m19aut/mPtextos/index.html",
   "/m19aut/mPtextos/mAintro.html",
   "/m19aut/mPtextos/mBtxtCueIncorrectoJs.html",
   "/m19aut/mPtextos/mCtxtRolIdsIncorrectoJs.html",
   "/m19aut/mPtextos/mDtxtAdministraElSistemaPhp.html",
   "/m19aut/mPtextos/mDtxtFaltaElIdPhp.html",
   "/m19aut/mPtextos/mEtxtDatosIncorrectosPhp.html",
   "/m19aut/mPtextos/mFtxtFaltaElCuePhp.html",
   "/m19aut/mPtextos/mGtxtFaltaElMatchPhp.html",
   "/m19aut/mPtextos/mGtxtFaltaLaDescripcionPhp.html",
   "/m19aut/mPtextos/mHtxtNoEsUnRolPhp.html",
   "/m19aut/mPtextos/mHtxtNoPermitidoPhp.html",
   "/m19aut/mPtextos/mItxtRealizaComprasPhp.html",
   "/m19aut/mPtextos/print.html",
   "/m19aut/mQdao/",
   "/m19aut/mQdao/index.html",
   "/m19aut/mQdao/mAbdCreaPhp.html",
   "/m19aut/mQdao/mASesionJs.html",
   "/m19aut/mQdao/mBrolPhp.html",
   "/m19aut/mQdao/mBusuarioPhp.html",
   "/m19aut/mQdao/mCaccesobdPhp.html",
   "/m19aut/mQdao/mCusuarioAgregaPhp.html",
   "/m19aut/mQdao/mEusuarioVerificaPhp.html",
   "/m19aut/mQdao/mFrolAgregaPhp.html",
   "/m19aut/mQdao/mGrolConsultaPhp.html",
   "/m19aut/mQdao/mHusuRolAgregaPhp.html",
   "/m19aut/mQdao/mIusuRolConsultaPhp.html",
   "/m19aut/mQdao/mJusuarioBuscaCuePhp.html",
   "/m19aut/mQdao/print.html",
   "/m19aut/mScustom/",
   "/m19aut/mScustom/index.html",
   "/m19aut/mScustom/m44indicador-cargandoJs.html",
   "/m19aut/mScustom/mAmi-navJs.html",
   "/m19aut/mScustom/mCmuestra-rolesJs.html",
   "/m19aut/mScustom/print.html",
   "/m19aut/mTlibjs/",
   "/m19aut/mTlibjs/index.html",
   "/m19aut/mTlibjs/m49ejecutaJs.html",
   "/m19aut/mTlibjs/m50htmlentitiesJs.html",
   "/m19aut/mTlibjs/m52MetodoHttpJs.html",
   "/m19aut/mTlibjs/m53muestraErrorJs.html",
   "/m19aut/mTlibjs/m58saltaAIndexJs.html",
   "/m19aut/mTlibjs/m59submitJs.html",
   "/m19aut/mTlibjs/print.html",
   "/m19aut/mUlibphp/",
   "/m19aut/mUlibphp/index.html",
   "/m19aut/mUlibphp/mLleeTextoPhp.html",
   "/m19aut/mUlibphp/mQautoloadPhp.html",
   "/m19aut/mUlibphp/mRpathPhp.html",
   "/m19aut/mUlibphp/mSservicioPhp.html",
   "/m19aut/mUlibphp/mUleeSinEspaciosInFinPhp.html",
   "/m19aut/mUlibphp/mVrecibeFetchAllPhp.html",
   "/m19aut/mUlibphp/mWvalidaPhp.html",
   "/m19aut/mUlibphp/mXvalidaIdNoVacioPhp.html",
   "/m19aut/mUlibphp/mYvalidaTextoNoVacioPhp.html",
   "/m19aut/mUlibphp/print.html",
   "/m19aut/print.html",
   "/m20archivos/",
   "/m20archivos/index.html",
   "/m20archivos/mAintro.html",
   "/m20archivos/mBder.html",
   "/m20archivos/mBpaquetes.html",
   "/m20archivos/mBrel.html",
   "/m20archivos/mCdeploy.html",
   "/m20archivos/mDinstrucciones.html",
   "/m20archivos/mEarchivos.html",
   "/m20archivos/mFjsconfigJson.html",
   "/m20archivos/mGtextos/",
   "/m20archivos/mGtextos/index.html",
   "/m20archivos/mGtextos/mAintro.html",
   "/m20archivos/mGtextos/mBtxtConfirmaEliminarJs.html",
   "/m20archivos/mGtextos/mCtxtFaltaElNombrePhp.html",
   "/m20archivos/mGtextos/mEplantillaNoEsNumeroJs.html",
   "/m20archivos/mGtextos/mFplantillaNoEsTextoJs.html",
   "/m20archivos/mGtextos/mGtxtArchivoNoEncontradoPhp.html",
   "/m20archivos/mGtextos/mHtxtFaltaElArchivoPhp.html",
   "/m20archivos/mGtextos/mItxtFaltaElArchivoAnteriorPhp.html",
   "/m20archivos/mGtextos/mJtxtFaltanBytesPhp.html",
   "/m20archivos/mGtextos/mKtxtProductoNoEncontradoPhp.html",
   "/m20archivos/mGtextos/print.html",
   "/m20archivos/mHbd/",
   "/m20archivos/mHbd/index.html",
   "/m20archivos/mHbd/mAbdCreaPhp.html",
   "/m20archivos/mHbd/mBarchivoPhp.html",
   "/m20archivos/mHbd/mBproductoPhp.html",
   "/m20archivos/mHbd/mCaccesobdPhp.html",
   "/m20archivos/mHbd/mDSrvArchivoPhp.html",
   "/m20archivos/mHbd/mEarchivoBuscaPhp.html",
   "/m20archivos/mHbd/print.html",
   "/m20archivos/mIlistados/",
   "/m20archivos/mIlistados/index.html",
   "/m20archivos/mIlistados/mAindexHtml.html",
   "/m20archivos/mIlistados/mBSrvProductoConsultaPhp.html",
   "/m20archivos/mIlistados/mCproductoConsultaPhp.html",
   "/m20archivos/mIlistados/print.html",
   "/m20archivos/mJagregar/",
   "/m20archivos/mJagregar/index.html",
   "/m20archivos/mJagregar/mAagregaHtml.html",
   "/m20archivos/mJagregar/mBSrvProductoAgregaPhp.html",
   "/m20archivos/mJagregar/mCproductoAgregaPhp.html",
   "/m20archivos/mJagregar/mDarchivoAgregaPhp.html",
   "/m20archivos/mJagregar/print.html",
   "/m20archivos/mKmodificar/",
   "/m20archivos/mKmodificar/index.html",
   "/m20archivos/mKmodificar/m21productoBuscaPhp.html",
   "/m20archivos/mKmodificar/m22archivoModificaPhp.html",
   "/m20archivos/mKmodificar/m22productoModificaPhp.html",
   "/m20archivos/mKmodificar/m23archivoEliminaPhp.html",
   "/m20archivos/mKmodificar/m23productoEliminaPhp.html",
   "/m20archivos/mKmodificar/m24SrvProductoBuscaPhp.html",
   "/m20archivos/mKmodificar/m25SrvProductoModificaPhp.html",
   "/m20archivos/mKmodificar/m26SrvProductoEliminaPhp.html",
   "/m20archivos/mKmodificar/m27modificaHtml.html",
   "/m20archivos/mKmodificar/print.html",
   "/m20archivos/mLcustom/",
   "/m20archivos/mLcustom/index.html",
   "/m20archivos/mLcustom/m35boton-agregarJs.html",
   "/m20archivos/mLcustom/m36boton-eliminarJs.html",
   "/m20archivos/mLcustom/m37boton-guardarJs.html",
   "/m20archivos/mLcustom/m38campo-id-ocultoJs.html",
   "/m20archivos/mLcustom/m39campo-nombre-cargandoJs.html",
   "/m20archivos/mLcustom/m40campo-nombreJs.html",
   "/m20archivos/mLcustom/m41hipervinculo-agregar-agregaJs.html",
   "/m20archivos/mLcustom/m42hipervinculo-cancelar-indexJs.html",
   "/m20archivos/mLcustom/m43indica-campos-obligatoriosJs.html",
   "/m20archivos/mLcustom/m44indicador-cargandoJs.html",
   "/m20archivos/mLcustom/m45lista-principalJs.html",
   "/m20archivos/mLcustom/mAcampo-muestra-imagenJs.html",
   "/m20archivos/mLcustom/mBcampo-sube-imagen-obligatorioJs.html",
   "/m20archivos/mLcustom/mCcampo-sube-imagenJs.html",
   "/m20archivos/mLcustom/print.html",
   "/m20archivos/mMlibjs/",
   "/m20archivos/mMlibjs/index.html",
   "/m20archivos/mMlibjs/m48confirmaEliminarJs.html",
   "/m20archivos/mMlibjs/m49ejecutaJs.html",
   "/m20archivos/mMlibjs/m50escuchaEventosAgregaJs.html",
   "/m20archivos/mMlibjs/m51escuchaEventosModificaJs.html",
   "/m20archivos/mMlibjs/m52MetodoHttpJs.html",
   "/m20archivos/mMlibjs/m53muestraErrorJs.html",
   "/m20archivos/mMlibjs/m54muestraNumeroJs.html",
   "/m20archivos/mMlibjs/m55muestraRenderJs.html",
   "/m20archivos/mMlibjs/m56muestraTextoJs.html",
   "/m20archivos/mMlibjs/m57parametrosDePaginaJs.html",
   "/m20archivos/mMlibjs/m58saltaAIndexJs.html",
   "/m20archivos/mMlibjs/m59submitJs.html",
   "/m20archivos/mMlibjs/print.html",
   "/m20archivos/mNlibphp/",
   "/m20archivos/mNlibphp/index.html",
   "/m20archivos/mNlibphp/mLleeTextoPhp.html",
   "/m20archivos/mNlibphp/mQautoloadPhp.html",
   "/m20archivos/mNlibphp/mRpathPhp.html",
   "/m20archivos/mNlibphp/mSservicioPhp.html",
   "/m20archivos/mNlibphp/mTleeBytesPhp.html",
   "/m20archivos/mNlibphp/mTleeEnteroPhp.html",
   "/m20archivos/mNlibphp/mUleeSinEspaciosInFinPhp.html",
   "/m20archivos/mNlibphp/mVrecibeFetchAllPhp.html",
   "/m20archivos/mNlibphp/mVseRecibioElArchivoPhp.html",
   "/m20archivos/mNlibphp/mWvalidaPhp.html",
   "/m20archivos/mNlibphp/mXvalidaNombreNoNullPhp.html",
   "/m20archivos/mNlibphp/mXvalidaNombreNoVacioPhp.html",
   "/m20archivos/mNlibphp/mYvalidaTextoNoVacioPhp.html",
   "/m20archivos/mNlibphp/print.html",
   "/m20archivos/print.html",
   "/m21carrito.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03soa/1ejemploXml.xml",
   "/src/m03soa/2dtdXml.xml",
   "/src/m03soa/3_solicitud_soap.xml",
   "/src/m03soa/4_respuesta_soap.xml",
   "/src/m03soa/5_wsdl.xml",
   "/src/m04geolocalizacion/maps.html",
   "/src/m05sociales/face.html",
   "/src/m07srverror/srverror.zip",
   "/src/m08srvresultado/srvresultado.zip",
   "/src/m09srvjson/cliente.js",
   "/src/m09srvjson/servidor.php",
   "/src/m09srvjson/srvjson.zip",
   "/src/m10form/cliente.js",
   "/src/m10form/servicio.php",
   "/src/m10form/srvform.zip",
   "/src/m11renderCliente/rendercli.zip",
   "/src/m12renderServidor/renderserv.zip",
   "/src/m13bd/srvbd.zip",
   "/src/m14chat/chathtml.zip",
   "/src/m14chat/chatwss.zip",
   "/src/m15chatserio/chatseriohtm.zip",
   "/src/m15chatserio/chatseriowss.zip",
   "/src/m15streaming/youtube.html",
   "/src/m17auno/srvauno.zip",
   "/src/m18amuchos/srvamuchos.zip",
   "/src/m19aut/srvaut.zip",
   "/src/m20archivos/srvarchivos.zip" ]

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