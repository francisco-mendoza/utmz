/** Genera utmz Analytics */

var nombre_cookie = "_utmz";

//Nombre Variables Cookie
var utmcsr, // utm_source
    utmccn, // utm_campaign
    utmcmd, // utm_medium
    utmctr, // utm_term
    utmref, // utm_ref
    utmses; // utm_sessid

var timeStamp;
var valor_cookie;

var getTimeStamp = function (){return Math.round(new Date().getTime()/1000)};

/** UTM SOURCE *********************************/
var getUtmcsr;
//Vemos si utm_source viene como parametro en la url
utmcsr = getParameterURL("utm_source");
if(utmcsr)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmcsr = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmcsr") && getUtmz("utmcsr"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmcsr = getOldUtmz("utmcsr");
        utmcsr = getUtmcsr[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmcsr = getUtmz("utmcsr");
        utmcsr = getUtmcsr[1];
        timeStamp = getUtmz("timestamp");
    }
}
// Si solo existe _utmz
else if(getUtmz("utmcsr"))
{
    getUtmcsr= getUtmz("utmcsr");
    utmcsr = getUtmcsr[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmcsr"))
{
    getUtmcsr= getOldUtmz("utmcsr");
    utmcsr = getUtmcsr[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmcsr = "(direct)";
    timeStamp = getTimeStamp();
}
/** ---------------------------------------------- */

/** UTM CAMPAIGN ***********************************/
var getUtmccn;
//Vemos si utm_campaign NO viene como parametro
utmccn = getParameterURL("utm_campaign");
if(utmccn)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmccn = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmccn") && getUtmz("utmccn"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmccn = getOldUtmz("utmccn");
        utmccn = getUtmccn[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmccn = getUtmz("utmccn");
        utmccn = getUtmccn[1];
        timeStamp = getUtmz("timestamp");
    }
}
// Si solo existe _utmz
else if(getUtmz("utmccn"))
{
    getUtmccn= getUtmz("utmccn");
    utmccn = getUtmccn[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmccn"))
{
    getUtmccn= getOldUtmz("utmccn");
    utmccn = getUtmccn[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmccn = "(direct)";
    timeStamp = getTimeStamp();
}
/** ---------------------------------------------- */

/** UTM MEDIUM *************************************/
var getUtmcmd;
//Vemos si utm_medium NO viene como parametro
utmcmd = getParameterURL("utm_medium");
if(utmcmd)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmcmd = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmcmd") && getUtmz("utmcmd"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmcmd = getOldUtmz("utmcmd");
        utmcmd = getUtmcmd[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmcmd = getUtmz("utmcmd");
        utmcmd = getUtmcmd[1];
        timeStamp = getUtmz("timestamp");
    }
}
// Si solo existe _utmz
else if(getUtmz("utmcmd"))
{
    getUtmcmd= getUtmz("utmcmd");
    utmcmd = getUtmcmd[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmcmd"))
{
    getUtmcmd= getOldUtmz("utmcmd");
    utmcmd = getUtmcmd[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmcmd = "(direct)";
    timeStamp = getTimeStamp();
}

/** ---------------------------------------------- */

/** UTM TERM *************************************/
var getUtmctr;
//Vemos si utm_term NO viene como parametro
utmctr = getParameterURL("utm_term");
if(utmctr)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmctr = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmctr") && getUtmz("utmctr"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmctr = getOldUtmz("utmctr");
        utmctr = getUtmctr[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmctr = getUtmz("utmctr");
        utmctr = getUtmctr[1];
        timeStamp = getUtmz("timestamp");
    }
}
// Si solo existe _utmz
else if(getUtmz("utmctr"))
{
    getUtmctr= getUtmz("utmctr");
    utmctr = getUtmctr[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmctr"))
{
    getUtmctr= getOldUtmz("utmctr");
    utmctr = getUtmctr[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmctr = "(direct)";
    timeStamp = getTimeStamp();
}

/** ---------------------------------------------- */

/** UTM REF *************************************/
var getUtmref;
//Vemos si utm_ref NO viene como parametro
utmref = getParameterURL("utm_ref");
if(utmref)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmref = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmref") && getUtmz("utmref"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmref = getOldUtmz("utmref");
        utmref = getUtmref[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmref = getUtmz("utmref");
        utmref = getUtmref[1];
        timeStamp = getUtmz("timestamp")[1];
    }
}
// Si solo existe _utmz
else if(getUtmz("utmref"))
{
    getUtmref= getUtmz("utmref");
    utmref = getUtmref[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmref"))
{
    getUtmref= getOldUtmz("utmref");
    utmref = getUtmref[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmref = "(direct)";
    timeStamp = getTimeStamp();
}
/** ---------------------------------------------- */

/** UTM SESSION *************************************/
var getUtmses;
//Vemos si utm_sessid NO viene como parametro
utmses = getParameterURL("utm_sessid");
if(utmses)
{
    timeStamp = getTimeStamp();
}
else if (existenUtmUrl()){
    utmses = '(no set)';
}
//Si existe __utmz  y existe _utmz
else if (getOldUtmz("utmses") && getUtmz("utmses"))
{
    //Si __utmz es el mas nuevo
    if(getOldUtmz("timestamp") > getUtmz("timestamp")){
        getUtmses = getOldUtmz("utmses");
        utmses = getUtmses[1];
        timeStamp = getTimeStamp();
    }
    //_utmz es el mas nuevo
    else{
        getUtmses = getUtmz("utmses");
        utmses = getUtmses[1];
        timeStamp = getUtmz("timestamp")[1];
    }
}
// Si solo existe _utmz
else if(getUtmz("utmses"))
{
    getUtmses= getUtmz("utmses");
    utmses = getUtmses[1];
    timeStamp = getUtmz("timestamp");
}
// Si solo existe __utmz
else if(getOldUtmz("utmses"))
{
    getUtmses= getOldUtmz("utmses");
    utmses = getUtmses[1];
    timeStamp = Math.floor(Date.now());
}
//Si no existe __utmz  y no existe _utmz
else
{
    utmses = "(direct)";
    timeStamp = getTimeStamp();
}
/** ---------------------------------------------- */

//Se asignan valores a la cookie
valor_cookie = "1."+timeStamp+".1.1.utmcsr="+utmcsr+"|utmccn="+utmccn+"|utmcmd="+utmcmd+"|utmctr="+utmctr+"|utmref="+utmref+"|utmses="+utmses+"";

//Se setea la cookie
setCookie(nombre_cookie, valor_cookie);

/**
 * Trae un valor de la Cookie __utmz
 * Formato ejemplo: utmcsr
 * */
function getOldUtmz(valor){
    var __utmz = getCookie("__utmz"); //Cookie __utmz
    var respuesta = "";
    if(__utmz){
        //var iniUtmzArray = __utmz.split(".",6);
        var iniUtmzArray = __utmz.indexOf(".utmcsr");
        //var campaign_data = iniUtmzArray[4] +"."+ iniUtmzArray[5];
        var campaign_data = __utmz.substring(iniUtmzArray+1);
        var utmzArray = campaign_data.split("|");
        if(valor == "timestamp"){
            var primerosValores = __utmz.split(".",6);
            respuesta = primerosValores[1];
        }else{
            var index;
            for (var i = 0; i < utmzArray.length; i++) { //Recorremos la cookie hasta que encuentra el valor
                index = utmzArray[i].split("=");
                if (index.indexOf(valor)!=-1) {
                    respuesta = index;
                    break;
                }else{
                    respuesta = false;
                }
            }
        }
        return respuesta;
    }else{
        return false;
    }
}

/**
 * Trae un valor de la cookie _utmz (NUEVA)
 * Formato ejemplo: utmcsr
 * */
function getUtmz(valor){
    var _utmz = getCookie("_utmz"); //cookie __utmz
    var respuesta = "";
    if(_utmz){
        //var iniUtmzArray = _utmz.split(".",6); // Separamos datos utm de lo demás
        var iniUtmzArray = _utmz.indexOf(".utmcsr");
        //var campaign_data = iniUtmzArray[4] +"."+ iniUtmzArray[5];
        var campaign_data = _utmz.substring(iniUtmzArray+1);
        var utmzArray = campaign_data.split("|"); // Se guarda cada dato en array
        if(valor == "timestamp"){
            var primerosValores = _utmz.split(".",6);
            respuesta = primerosValores[1];
        }else{
            var index;
            for (var i = 0; i < utmzArray.length; i++) { //Recorremos la cookie hasta que encuentra el valor
                index = utmzArray[i].split("=");
                if (index.indexOf(valor)!=-1) {
                    respuesta = index;
                    break;
                }else{
                    respuesta = false;
                }
            }
        }
        return respuesta;
    }else{
        return false;
    }
}

function getCookie(nombreCookie){
    var nombre = nombreCookie + "=";
    var cookieArray = document.cookie.split(';');
    for(var i = 0; i < cookieArray.length; i++){
        var cookie = cookieArray[i].replace(/^\s+|\s+$/g, '');
        if (cookie.indexOf(nombre)==0){
            return cookie.substring(nombre.length,cookie.length);
        }
    }
    return null;
}

function setCookie(cookie, value){
    var expires = new Date();
    expires.setTime(expires.getTime() + 62208000000); // 1000*60*60*24*30*24 (2 años)
    document.cookie = cookie + "=" + value + "; expires=" + expires.toGMTString() + "; domain=." + __cookie_domain + "; path=/";
}

function getParameterURL(parametro){
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    for (var i = 0; i < URLVariables.length; i++) {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] == parametro) {
            return parameterName[1];
        }
    }
    return null;
}

function existenUtmUrl(){
    return window.location.href.indexOf('utm') != -1;
}




