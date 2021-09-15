console.log(" ##### exemple of loops ##### \n")

//While loop exemple
var i = 0;

var students = [
    "Theo",
    "Louis",
    "Cécile",
    "Chloé",
    "brandon",
    "timoté"
];

// while (i < students.length) {
//     console.log(students[i]);
//     i++;  
// }

//for loop exemple

// for (var j = 0; j < students.length; j++) {
//     console.log(students[j]);
// }

//for of / for in loops exemple

for(var student of students) {
    console.log(student);
}

for(var index in students){
    console.log(students[index]);
}

for(var index in students){
console.log("Etudiant numéro : " + (parseInt(index)+1) + " " + students[index]);
}

for(var index in students){
    console.log(index);
}
    
var human = {
    "name" : "henry",
    "age" : 45,
    "sexe" : "male",
    "country" : "france"
}

for(var key in human) {
    console.log(key + " : " + human[key]);
}