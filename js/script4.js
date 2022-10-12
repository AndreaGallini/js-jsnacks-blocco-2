let array1 = ['a','b','c']
let array2 = ['a','b']
let aggiungi = document.getElementById('aggiunto')
let btn = document.querySelector('button')
console.log( array1 , array2)
let lArray1 = array1.length;
let lArray2 = array2.length;

console.log(lArray1 , lArray2);

let add = function(){

    let vaggiungi = aggiungi.value;
    if(lArray2 < lArray1){
        array2.push(vaggiungi)
        console.log(array2)
    }
    for(let i = 0 ; i < lArray1; i++){
        if(lArray1 == lArray2){
            console.log('basta')
        }
    }
}
btn.addEventListener('click', add)