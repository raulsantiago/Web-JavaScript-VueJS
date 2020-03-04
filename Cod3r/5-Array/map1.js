// Map gera um novo array
// Possibilidade de alterar por diversas vezes
const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e){
    return e * 2 
})

console.log(resultado)

const soma10 = e => e + 10
const tripo = e => e * 3
// Convertendo number para float + fixando em 2 casa decimais + substituindo ponto por virgula
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)

