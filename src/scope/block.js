function fruits() {
    if (true) {
        var fruit1 = 'Apple';   // Function Scope
        let fruit2 = 'Kiwi';    // Block Scope
        const fruit3 = 'Banana';    // Block Scope
        // let y const, al tener scope de bloque no pueden ser accedidos fuera del mismo, por lo que los console.log con fruit2 y fruit3 deben moverse dentro del mismo, algo que no ocurre cuando se utiliza var
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits();