let numeroUtente = document.getElementById('numeroUtente');
let result = document.getElementById('result');

let btn = document.querySelector('button');
 let calcola = function (){
    let vnumeroUtente = numeroUtente.value;
    let risultato = vnumeroUtente % 2;
    if(risultato == 0){
        console.log('pari')
        result.innerHTML = 'il Tuo numero è pari.'
    }else if(risultato == 1){
        console.log('dispari')
        risultato = vnumeroUtente
        let risultatoDispari = risultato++;
        
        console.log(risultato)
        result.innerHTML = risultato
    }else {
        console.log('non è un numero intero')
        result.innerHTML = 'Il tuo non è un numero o non è un numero intero.'
    }
 }
btn.addEventListener('click', calcola)
