let MailPerson = prompt("Please enter your e-mail");

let Mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

var Messaggio = "La tua Mail non è registrata";

/*Inizio ciclo for*/
for ( let iconta=0; iconta<=3; iconta++) {
    if (Mail[iconta]==MailPerson) {
        Messaggio = "La tua Mail è registrata";
    }
}
alert (Messaggio); 
console.log (Messaggio);

if (MailPerson!=Mail) {
    Messaggio= "Vuoi registrare la tua E-Mail?"
}
