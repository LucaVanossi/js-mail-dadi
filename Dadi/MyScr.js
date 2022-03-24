/*let dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(`Il tiro dell'utente è ${dadoUtente}`);

let dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Il tiro del Computer è ${dadoComputer}`);

if (dadoUtente > dadoComputer) {
    console.log("Ha vinto l'utente!");
} else if (dadoComputer > dadoUtente) {
    console.log('Ha vinto il Computer!');
} else if (dadoUtente === dadoComputer) {
    console.log('Pareggio.');
}*/

var numero_giocatore = Math.floor(Math.random() * 6) + 1;
document.getElementById("TiroUtente1").innerHTML ="Dado Giocatore " + numero_giocatore;
var numero_computer = Math.floor(Math.random() * 6) + 1;
document.getElementById("TiroComputer1").innerHTML ="Dado Computer " + numero_computer;
if (numero_giocatore > numero_computer) {
    document.getElementById("Risultato1").innerHTML = "Vince il Giocatore !";
}
else if(numero_giocatore == numero_computer) {
    document.getElementById("Risultato1").innerHTML = "Pareggio !";
}
else { 
    document.getElementById("Risultato1").innerHTML = "Vince il Computer!";
}
