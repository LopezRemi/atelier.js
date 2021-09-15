
// Déclaration de la fonction.
function greetings(firstname, lastname) {
    return "Bienvenue " + firstname + " " + lastname;
}



// Apelle de la fonction pour éxécution.
greetings("Rémi", "Lopez");
// greetings("Bob", "Lalpoint");
// greetings("Paul", "Morea");


var speach = greetings("Gégé", "Depardieu");
console.log(speach);

console.log(greetings("Gégé", "Depardieu"));


let firstname = prompt("Entrez votre prénom")
let lastName = prompt("Entrez votre nom")

greetings(firstname, lastName);

