// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armanzenando uuma funcção arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))

// Retorno implícito
const subtracao = (a, b) => a - b // Melhor opção mais curta
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
