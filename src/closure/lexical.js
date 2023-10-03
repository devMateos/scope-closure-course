// Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto
// El ámbito léxico hace referencia a que la accesibilidad de las variables está determinada por la posición de las mismas dentro de los ámbitos anidados
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {     // función interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();