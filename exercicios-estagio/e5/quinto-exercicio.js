const inverteCaracteres = (string) => {
    let newString = '';
    for (let index = string.length - 1; index >= 0; index--) {
        newString += string[index]
    }

    return console.log(newString);
}
//Exemplo de uso
inverteCaracteres('Olá Mundo!')