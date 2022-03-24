function Accedi () {
    
    var email_utente = document.getElementById('accedi').value;

    for (var i = 0; i < caselle_mail.length; i++) {
        console.log(caselle_mail[i]);
        console.log(i);
        if (email_utente == caselle_mail[i])  {
            alert("Accesso eseguito correttamente"); break;
            
        } 
    }
    
    if (email_utente !== caselle_mail[i]) {
        alert ("Email non registrata");
        document.getElementById('accedi').value = "";
    }       
    
} 

var caselle_mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"]

function Registrazione() {
    var email_utente = document.getElementById('registrati').value;

    for (var i = 0; i < caselle_mail.length; i++) {
    console.log(caselle_mail[i]);
    console.log(i);

    if (email_utente == caselle_mail[i]) {
        alert("Account già esistente"); break;
    }

}   
if (!email_utente.includes("@")) {
    alert("La Email deve contenere @");
    document.getElementById('registrati').value = "";

} else if (email_utente !== caselle_mail[i])
    alert("Registrazione completata");
    email_utente = document.getElementById('registrati').value;
    caselle_mail.push(email_utente);  
    console.log(caselle_mail);
        
}        


