window.addEventListener('load', e => {
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("../sw.js");
    }
});