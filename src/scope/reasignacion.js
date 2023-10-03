// var
var firstName;  // Cuando se declara una variable, se le asigna por defecto un valor undefined
firstName = 'Alba María';
console.log(firstName);

var lastName = 'García';    // Decralar + asignar
lastName = 'Rodríguez'; // Reasignar
console.log(lastName);

var secondName = 'David';   // Declarar + asignar
var secondName = 'Juan';    // Redeclarar
console.log(secondName);

//let
let fruit = 'Apple';    // Declarar + asignar
fruit = 'Kiwi';     // Reasignar
console.log(fruit);
// let permite reasignar el valor de la variable pero no redeclararla

let fruit = 'Banana';   // Esto produce un error, ya que let no se puede redeclarar
console.log(fruit);

// const
const animal = 'dog';   // Declarar y asignar
animal = 'cat';     // Reasignar --> const no lo permite
console.log(animal);
// const no permite redeclarar ni reasignar el valor de una variable

// Hay que tener en cuenta que const no es una forma infalible de manejar la inmutabilidad. Cuando trabajamos con arreglos y objetos podemos agregar o eliminar valores a la referencia
const vehicles = [];
vehicles.push("🚗");    // Agregamos un elemento al array de la constante
console.log(vehicles);

vehicles.pop();     // Eliminamos un elemento del array
console.log(vehicles);