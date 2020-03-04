// Call server para chamar uma função
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // So funcina devido a instanciação global
console.log(produto.getPreco()) // Normal

const carro = { preco: 499990.9.toPrecision(1), desc: 0.20}

console.log(getPreco.call(carro)) // Call em uso para chamar a função
console.log(getPreco.apply(carro)) // Apply em uso para chamar a função

// A diferença entre Call e Apply é a forma de chamar os parametros
console.log(getPreco.call(carro, 0.17, '$')) 
console.log(getPreco.apply(global, [0.17, '$'])) // Ter ser dentro do Array os parametros
