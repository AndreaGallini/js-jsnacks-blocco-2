let numeri = [0,1,2,3,4,5,6,7,8,9,10];
let somma = document.getElementById('risultato').value;
let totale = 0;
console.log(numeri)
for(let i = 1; i< numeri.length; i++){
  // console.log(i)
  if(numeri[i] % 2 != 0 ){
    let numeriDispari = numeri[i]
    console.log(numeriDispari)
   
  
}
 totale += numeri[i]
 console.log(totale)
}