let nomi = ['Andrea', 'Giulia','Sofia', 'Lorenzo', 'Marco', 'Francesco'];
let cognomi = ['Gallini', 'Osvaldo','Ornavasso'];
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
btn.addEventListener('click', genera)

