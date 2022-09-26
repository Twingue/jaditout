/////////NOM////////////
    var nomm = document.getElementById("nom");
    nomm.addEventListener("change", nickname)


function nickname(){
    var filtre= (/^[a-zA-Z,é,\-,è,ë,ö,ä,ï,ü,ÿ,ô]+$/);
    var resultat =filtre.test(nomm.value);
    console.log(resultat);
    if (resultat == false){
        nomm.value = "";   
        alert("Nom incorrect")
}
}

////////PRENOM//////////
var pren = document.getElementById("prenom");
pren.addEventListener("change", namee)


function namee(){
var filtre= (/^[a-zA-Z,é,\-,è,ë,ö,ä,ï,ü,ÿ,ô]+$/);
var resultat =filtre.test(pren.value);
console.log(resultat);
if (resultat == false){
    pren.value = "";   
    alert("Prénom incorrect")
}
}

///////////CODE POSTAL//////////////

var poste = document.getElementById("cp");
    poste.addEventListener("change", codepostal)
    
function codepostal(){
var filtre = /^\d{5}$/;
var resultat =filtre.test(poste.value);
    console.log(resultat);
    
    if (resultat == false){
        poste.value = "";   
        alert("Code postal incorrect, saisissez un code postal de 5 chiffres")
    
    } 
}

///////////VILLE/////////////

var ville = document.getElementById("ville");
ville.addEventListener("change", villee)

function villee(){
var filtre= new RegExp(/^[a-zA-Z,é,\-,è,ë,ö,ä,ï,ü,ÿ,ô]+$/);
var resultat =filtre.test(ville.value);
console.log(resultat);
if (resultat == false){
    ville.value = "";   
    alert("Ville incorrect")

} 
}


//////////////ADRESSE/////////////

var adresse = document.getElementById("adresse");
adresse.addEventListener("change", adressee)

function adressee(){
var filtre= new RegExp(/^[0-9]{1,3}[a-zA-Z,é,\-, ,è,ë,ö,ä,ï,ü,ÿ,ô,]+$/);
var resultat =filtre.test(adresse.value);
console.log(resultat);
if (resultat == false){
    adresse.value = "";   
    alert("Adresse incorrect")

} 
}

///////////EMAIL//////////////
var email = document.getElementById("email");
email.addEventListener("change", function(){
var filtre=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var resultat =filtre.test(email.value);
console.log(resultat);
if (resultat == false){
    email.value = "";   
    alert("Email incorrect,saisissez un email correct")

} 
})

/////////DATE DE NAISSANCE//////////
var dateNaissance = document.getElementById("naissance");
dateNaissance.addEventListener("change", Naissancedate)

function Naissancedate(){
var filtre= new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
var resultat =filtre.test(dateNaissance.value);
console.log(resultat);
if (!resultat){
    dateNaissance.value = "";   
    alert("Date de naissance incorrect")

} 
}