console.log(" ##### exemple de boucles ##### \n")

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

while (i < students.length) {
    console.log(students[i]);
    i++;  
}

for (var j = 0; j < students.length; j++) {
    console.log(students[j]);
}