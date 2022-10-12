let nomi = ['Mario', 'Achille','Adriano', 'Lorenzo', 'Matteo', 'Francesco','Matteo','Antonio','Mario'];
let cognomi = ['Abbate', 'Lauro','Viterbini','Macchioni','Maggio','Rossi','Verdi','Ferrari','Colombo'];
let btn = document.querySelector('button')
let invitati = document.getElementById('invitati')
let numeroUtenti = document.getElementById('NumeroUtenti');
let genera = function(){
    for(let i = 0; i < 10; i++){
        let randomnomi = nomi[Math.floor(Math.random() * nomi.length)];
       
        let randomcognomi = cognomi[Math.floor(Math.random() * cognomi.length)];

        console.log(randomnomi , randomcognomi)
        invitati.innerHTML += `
        
        ${randomnomi}  ${randomcognomi} <br>
        `
    }
    


}
invitati.innerHTML = ''
btn.addEventListener('click', genera)

