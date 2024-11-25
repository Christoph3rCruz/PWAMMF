if('serviceWorker' in navigator){
    console.log('Iniciando SW');
    navigator.serviceWorker.register('./sw.js')

                .then(res=> console.log('Service worker funcionando', res))
                .catch(res=>console.log('Error. SW no funcionando', err));
}else{
    console.log('No soportaste')
}