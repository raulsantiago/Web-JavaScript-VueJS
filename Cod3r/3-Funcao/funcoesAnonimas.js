// Função Anonima é uma funcção sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ // Chamando uma função dentro da função
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) // não tem necessidade mas pode chamar
imprimirResultado(3, 4, function (x, y){ // pode criar uma função na chamada do metodo
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // Melhor criar uma função arrow

// Exemplo de função dentro de um objeto, como atributo
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}
pessoa.falar()