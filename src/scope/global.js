//Variables

var a; //declarando
var b = "b"; //declarando / asingnamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

var fruit = 'Apple';

console.log(fruit);
function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = 'Colombia'; // global
  console.log(country);
}
countries(); 
console.log(country);
