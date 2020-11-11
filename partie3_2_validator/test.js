const validator = require('validator');

var chaine1= "mimi.bader4@gmail.com";
var chaine2= "GHHHggh";
var chaine3 ="kkkk";
var chaine4 ="$30";
var chaine5 = new Date();


console.log(chaine1+" est email ?:"+validator.isEmail(chaine1));
console.log(chaine2+" est majuscule ?:"+validator.isUppercase(chaine2));
console.log(chaine3+" est vide ?:"+validator.isEmpty(chaine3));
console.log(chaine4+" est une monnnaie courante ?:"+validator.isCurrency(chaine4));
console.log(chaine5+" est une date valide ?:"+validator.isDate(chaine5));

