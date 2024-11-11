// Exercício 1 //

let valor1 = 199.3;
let valor2 = 120;
let soma = valor1 + valor2;

console.log('A soma dos números é: ' + soma);






// Exercício 2 //

let numeros = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];
let soma1 = 0;
let i = 0;

while (i < numeros.length) {
    soma1 += numeros[i];
    i++;
}

let media = soma1 / numeros.length;
console.log("A média dos valores é:", media);






// Exercício 3 //

let numeros1 = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];

function vrPrimo(numero) {
    if (numero < 2) 
    return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

let numerosPrimos = numeros1.filter(vrPrimo);
console.log("Os Números primos são:", numerosPrimos);






// Exercício 4 //

// Criei outro projeto para o jogo //






// Exercício 5 //
//** Entendi o problema, porém não consegui aplicar no programa **//





//** Problema: No meu visual studio code, não esta printando na tela */