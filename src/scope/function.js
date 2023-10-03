function greeting() {
    let userName = 'Alba';
    console.log(userName);

    if (userName === 'Alba') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);  //No encuentra la variable userName, porque ésta tiene Scope de función