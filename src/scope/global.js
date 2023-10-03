//Variables

var a;  // Declaración una variable
var b = 'b';    // Declaración + Asignación
b = 'bb';   // Reasignación
var a = 'aa';   // Redeclaración


// Global Scope
// Las variables declaradas en el Scope Global (no están dentro de un bloque de código) pueden ser utilizadas dentro de otros bloques

var fruit = 'Apple';    // Global
function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country = 'Colombia'; // Al hacerlo de esta forma, no se define el scope y pasa a ser Global
    console.log(country);
}
countries();
console.log(country);