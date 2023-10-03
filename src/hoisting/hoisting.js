console.log(name);
var name = 'Elmo';
// El hoisting provoca que la declaración de la variable name sea elevada a la parte superior del documento, dándole el valor "undefined"


nameOfDog();
function nameOfDog() {
    console.log(`El mejor perro es ${elmo}`);
}

var elmo = 'Elmito';

// ⚠ ATENCIÓN: El hoisting solo aplica a variables declaradas con var y a funciones declaradas con "Function Declaration", si lo hacemos con let o const o con "Arrow Functions" tendremos errores. 