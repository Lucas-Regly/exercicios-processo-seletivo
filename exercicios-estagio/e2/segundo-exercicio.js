function verificarSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    while (a <= numero) {
        if (a === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        } else {
            c = a + b;
            a = b;
            b = c;
        }
    }

    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

// Exemplo de uso
const numeroInformado = 21;
verificarSequenciaFibonacci(numeroInformado);
